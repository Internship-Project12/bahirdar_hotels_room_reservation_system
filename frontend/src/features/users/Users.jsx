import { users } from "../../data/users";
import Table from "../../ui/table/Table";

const userHeaders = [
  { label: "First Name", key: "firstName" },
  { label: "Last Name", key: "lastName" },
  { label: "Email", key: "email" },
  { label: "Phone Number", key: "phoneNumber" },
  { label: "Role", key: "role" },
  // { label: "edit", key: "edit" },
];

function Users() {
  return <Table title={"All Users"} headers={userHeaders} data={users} />;
}

export default Users;
