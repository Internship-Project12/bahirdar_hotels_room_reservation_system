import "react-phone-number-input/style.css";
import { useFormContext } from "react-hook-form";
import PhoneInputWithCountry from "react-phone-number-input/react-hook-form";
import parsePhoneNumberFromString from "libphonenumber-js";

function PhoneInput() {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <label className="flex-1 text-sm font-bold text-gray-700">
      Phone Number
      <PhoneInputWithCountry
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
        className="w-full rounded border border-gray-400 bg-white px-3 py-2 focus:outline-none"
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
