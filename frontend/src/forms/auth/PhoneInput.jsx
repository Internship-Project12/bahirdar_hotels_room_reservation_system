import "react-phone-number-input/style.css";
import flags from "react-phone-number-input/flags";
import { useFormContext } from "react-hook-form";
import PhoneInputWithCountry from "react-phone-number-input/react-hook-form";
import parsePhoneNumberFromString from "libphonenumber-js";

function PhoneInput() {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <label className="flex flex-1 flex-col tracking-wider text-gray-900">
      <span className="ml-2 font-normal md:text-xl">Phone Number</span>
      <PhoneInputWithCountry
        flags={flags}
        name="phoneNumber"
        control={control}
        international
        placeholder="Enter phone number"
        defaultCountry="ET"
        rules={{
          required: "Phone number is required",
          validate: (value) => {
            const phoneNumberInstance = parsePhoneNumberFromString(value || "");
            return (
              phoneNumberInstance?.isValid() ||
              "Invalid phone number. Please try a valid one!"
            );
          },
        }}
        className="w-full rounded-xl p-2 focus:outline-none"
      />
      {errors.phoneNumber && (
        <p className="text-sm font-light tracking-wide text-red-500">
          {errors.phoneNumber.message}
        </p>
      )}
    </label>
  );
}

export default PhoneInput;
