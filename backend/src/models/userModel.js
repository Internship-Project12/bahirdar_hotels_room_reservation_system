import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcryptjs';
import crypto from 'crypto';

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, 'Please tell us your name!'],
      trim: true,
    },
    lastName: {
      type: String,
      required: [true, 'Please tell us your name!'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Please provide your email'],
      unique: true,
      lowercase: true,
      validate: [validator.isEmail, 'Please provide a valid email'],
    },
    photo: String,
    phoneNumber: {
      type: String,
      required: [true, 'Please provide your phone number'],
      trim: true,
    },
    password: {
      type: String,
      required: [true, 'Please provide a password'],
      minlength: [8, 'Password must have at least 8 characters'],
      select: false,
    },
    passwordConfirm: {
      type: String,
      required: [true, 'Please confirm your password'],
      validate: {
        // This only works on CREATE and SAVE!!!
        validator: function (el) {
          return el === this.password;
        },
        message: 'Passwords are not the same!',
      },
    },
    active: {
      type: Boolean,
      default: true,
      select: false,
    },
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,

    // ****************************************************** //
    // we add this prop on hotel creation
    // 1st we admin creates a user with role=manager
    // then we add the hotels' id to the user on hotel creation
    hotel: {
      type: mongoose.Schema.ObjectId,
      ref: 'Hotel',
    },

    // role will be admin for the first user
    // role will be manager when the admin creates the user or updates the user to the manager
    // else it will be user on signup
    role: {
      type: String,
      default: 'user',
      enum: {
        values: ['user', 'admin', 'manager'],
        message: 'Role is either: user, admin, manager',
      },
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// BOOKINGS
userSchema.virtual('bookings', {
  ref: 'Booking',
  foreignField: 'user',
  localField: '_id',
});

// ************HOOKS************
// set the first user as an admin
userSchema.pre('save', async function (next) {
  const countDoc = await this.constructor.countDocuments();
  console.log(countDoc);

  if (countDoc === 0) {
    this.role = 'admin';
  }

  next();
});

// Hash the password before save
userSchema.pre('save', async function (next) {
  // Only run this function if password was actually modified
  if (!this.isModified('password')) return next();

  // Hash the password with cost of 12
  const salt = await bcrypt.genSalt(12);
  const hashedPassword = await bcrypt.hash(this.password, salt);
  this.password = hashedPassword;

  // Delete passwordConfirm field
  this.passwordConfirm = undefined;
  next();
});

// UPDATE PASSWORD CHANGED AT PROP
userSchema.pre('save', function (next) {
  if (!this.isModified('password') || this.isNew) return next();

  this.passwordChangedAt = Date.now() - 1000;

  next();
});

// DELETE ME
userSchema.pre(/^find/, function (next) {
  this.find({ active: { $ne: false } });

  next();
});

// ************STATIC METHODS**************
// Check/Compare if the password is correct
userSchema.methods.isCorrectPassword = async function (pass, hashedPass) {
  return await bcrypt.compare(pass, hashedPass);
};

// Check if The user changed his password After a token is signed
userSchema.methods.changedPasswordAfter = function (JWTTimestamp) {
  if (this.passwordChangedAt) {
    const changedTimestamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );
    return JWTTimestamp < changedTimestamp;
  }

  return false;
};

userSchema.methods.createPasswordResetToken = function () {
  const resetToken = crypto.randomBytes(32).toString('hex');

  this.passwordResetToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex');

  this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

  return resetToken;
};

// Create a mongoose model
const User = mongoose.model('User', userSchema);

// Export User Model
export default User;
