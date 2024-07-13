import UsersTable from "./UsersTable";

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

function HotelUsers() {
  return <UsersTable users={users} />;
}

export default HotelUsers;
