import { hotels } from "../../data/hotels";
import { MdDeleteOutline, MdEdit } from "react-icons/md";
import Table from "../../ui/table/Table";

const hotelHeaders = [
  { label: "Image", key: "image" },
  { label: "Name", key: "name" },
  { label: "Address", key: "address" },
  { label: "Number of Rooms", key: "numOfRooms" },
  { label: "Number of Ratings", key: "numberOfRatings" },
  { label: "Average Ratings", key: "averageRatings" },
  { label: "Facilities", key: "facilities" },
  { label: "Actions", key: "actions" },
];

const hotelData = hotels.map((hotel) => ({
  ...hotel,
  actions: [
    {
      icon: <MdEdit size={24} color="blue" />,
      onClick: () => console.log("Edit", hotel.id),
    },
    {
      icon: <MdDeleteOutline size={24} color="red" />,
      onClick: () => console.log("Delete", hotel.id),
    },
  ],
}));

function HotelsTable() {
  return (
    <Table
      title="All Hotels"
      headers={hotelHeaders}
      datas={hotelData}
      actions={[
        { label: "Add Hotel", onClick: () => console.log("Add Hotel") },
      ]}
    />
  );
}

export default HotelsTable;
