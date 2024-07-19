const user = {
  _id: "668ce28fa5b16ed846c21a22",
  firstName: "Edmealem",
  lastName: "Kassahun",
  email: "test@test.com",
  role: "user",
  phoneNumber: "0908005801",
  createdAt: "2024-07-09T07:11:11.764Z",
  updatedAt: "2024-07-13T11:39:53.181Z",
  __v: 0,
  photo:
    "https://res.cloudinary.com/dvp1mjhd9/image/upload/v1714759095/gsqg5uwxwtzc744wy6j5.png",
  bookings: [
    {
      _id: "6693cdcb295dc5119b718706",
      user: {
        _id: "668ce28fa5b16ed846c21a22",
        firstName: "test",
        lastName: "Alemu",
        email: "test@test.com",
        role: "user",
        phoneNumber: "0908005801",
        photo:
          "https://res.cloudinary.com/dvp1mjhd9/image/upload/v1714759095/gsqg5uwxwtzc744wy6j5.png",
        id: "668ce28fa5b16ed846c21a22",
      },
      room: {
        _id: "6693cdbc295dc5119b718701",
        roomNumber: "101",
        roomType: "double",
        pricePerNight: 200,
        images: [
          "http://res.cloudinary.com/dvp1mjhd9/image/upload/v1719767826/dpdcizouxqvmwiubmhel.jpg",
          "http://res.cloudinary.com/dvp1mjhd9/image/upload/v1719767828/jccr0lowxldhrotudni2.jpg",
        ],
        id: "6693cdbc295dc5119b718701",
      },
      checkInDate: "2024-07-10T08:58:40.000Z",
      checkOutDate: "2024-07-13T08:58:40.000Z",
      status: "confirmed",
      createdAt: "2024-07-14T13:08:27.754Z",
      updatedAt: "2024-07-14T13:08:27.754Z",
      hotel: "668ced40c8a56b00ec4b58da",
      numOfNights: 3,
      pricePerNight: 200,
      totalPrice: 600,
      __v: 0,
      id: "6693cdcb295dc5119b718706",
    },
    {
      _id: "6693d4bc62f78ba7e404fbc6",
      user: {
        _id: "668ce28fa5b16ed846c21a22",
        firstName: "test",
        lastName: "Alemu",
        email: "test@test.com",
        role: "user",
        phoneNumber: "0908005801",
        photo:
          "https://res.cloudinary.com/dvp1mjhd9/image/upload/v1714759095/gsqg5uwxwtzc744wy6j5.png",
        id: "668ce28fa5b16ed846c21a22",
      },
      room: {
        _id: "6693cdbc295dc5119b718701",
        roomNumber: "101",
        roomType: "double",
        pricePerNight: 200,
        images: [
          "http://res.cloudinary.com/dvp1mjhd9/image/upload/v1719767826/dpdcizouxqvmwiubmhel.jpg",
          "http://res.cloudinary.com/dvp1mjhd9/image/upload/v1719767828/jccr0lowxldhrotudni2.jpg",
        ],
        id: "6693cdbc295dc5119b718701",
      },
      checkInDate: "2024-07-10T08:58:40.000Z",
      checkOutDate: "2024-07-13T08:58:40.000Z",
      status: "cancelled",
      createdAt: "2024-07-14T13:38:04.623Z",
      updatedAt: "2024-07-14T13:38:04.623Z",
      hotel: "668ced40c8a56b00ec4b58da",
      numOfNights: 3,
      pricePerNight: 200,
      totalPrice: 600,
      __v: 0,
      id: "6693d4bc62f78ba7e404fbc6",
    },
  ],
  id: "668ce28fa5b16ed846c21a22",

  // this is for managers that have hotel property
  hotel: {
    _id: "668ce2f3603914bd3b9e584e",
    name: "Azwa International Hotel",
    imageCover:
      "http://res.cloudinary.com/dvp1mjhd9/image/upload/v1719767825/q3elysozotzxbdpddv8b.jpg",
    avgRating: 3.5,
    address: "Addis Ababa, Ethiopia",
    summary:
      "5-star hotel located in the heart of Addis Ababa, Ethiopia 5-star hotel located in the heart of Addis Ababa, Ethiopia",
    hotelStar: 4,
    id: "668ce2f3603914bd3b9e584e",
  },
};

function Profile() {
  return (
    <div className="flex flex-col space-y-7">
      <div className="mx-4 flex items-center justify-center">
        <p className="w-[60%] text-center text-lg leading-10 tracking-wider text-slate-600">
          Welcome to Our Website Where You Can book / reserve a room in any
          Hotel easily from your any where and any time. take a look at the
          hotels and a reserve a room.
        </p>
      </div>
      <div className="mx-4 flex items-center justify-center p-4">
        <h1 className="text-6xl text-slate-500 opacity-90">
          {user.firstName} {user.lastName}
        </h1>
      </div>
      <div className='flex items-center justify-center'>
        <div className="flex border-2 border-slate-300 w-[50%] rounded-full shadow-xl bg-slate-200 items-center justify-center gap-4">
          <div className="h-[100px] w-[100px]">
            <img
              src={user.photo}
              alt=""
              className="h-full w-full rounded-full object-cover object-center"
            />
          </div>
          <div>
            <p className="text-xl text-slate-600">{user.email}</p>
            <p className="text-sm text-slate-600">{user.phoneNumber}</p>
          </div>
        </div>
      </div>
      <div>
        <p className=""></p>
      </div>
    </div>
  );
}

export default Profile;
