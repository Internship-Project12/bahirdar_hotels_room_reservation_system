import Table from "../../ui/table/Table";

const userHeaders = [
  { label: "user", key: "user" },
  { label: "Email", key: "email" },
  { label: "Phone Number", key: "phoneNumber" },
  // { label: "", key: "role" },
];

const users = [
  {
    id: 1,
    user: "Alemu kebede",
    userImg: "/user1.jpeg",
    email: "abrham@gmail.com",
    phoneNumber: "+251 23 3298 353",
    role: "manager",
    hotel: "abc international hotel",
  },
  {
    id: 2,
    user: "betel Doe",
    userImg: "/user2.jpeg",

    email: "birtukan@gmail.com",
    phoneNumber: "+251 23 3298 353",
  },
  {
    id: 4,
    user: "Jane Smith",
    userImg: "/user3.jpeg",
    email: "weynua@gmail.com",
    phoneNumber: "+251 23 3298 353",
  },
  {
    id: 5,
    user: "Alemu",
    userImg: "/user1.jpeg",
    email: "yitbarek@gmail.com",
    phoneNumber: "+251 23 3298 353",
  },
  {
    id: 3,
    user: "betel Doe",
    userImg: "/user2.jpeg",
    email: "yehalem@gmail.com",
    phoneNumber: "+251 23 3298 353",
  },
];

function Users() {
  return (
    <div>
      <div className="flex justify-between p-3">
        <h2>All Users </h2>
        <p>filter/sort</p>
      </div>
      <Table headers={userHeaders} data={users} />
    </div>
  );
}

export default Users;
