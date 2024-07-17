import { useAuthContext } from "../../context/AuthContext";
import UpdateHotel from "../hotels/UpdateHotel";

function Settings() {
  const { user } = useAuthContext();

  return <UpdateHotel hotelId={user.hotel._id} />;
}

export default Settings;
