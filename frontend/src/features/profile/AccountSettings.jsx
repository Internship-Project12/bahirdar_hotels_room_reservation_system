import ForgotMyPassword from "./ForgotMyPassword";
import UpdateMeForm from "./UpdateMeForm";
import UpdateMyPassword from "./UpdateMyPassword";

const AccountSettings = () => {
  return (
    <div>
      <UpdateMeForm />
      <UpdateMyPassword />
      <ForgotMyPassword />
    </div>
  );
};

export default AccountSettings;
