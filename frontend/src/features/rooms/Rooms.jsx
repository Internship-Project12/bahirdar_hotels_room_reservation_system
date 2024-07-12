import { rooms } from "../../data/rooms";
import Table from "../../ui/table/Table";

const roomHeaders = [
  // { label: "images", key: "images" },
  { label: "roomNumber", key: "roomNumber" },
  { label: "roomType", key: "roomType" },
  { label: "pricePerNight", key: "pricePerNight" },
  { label: "capacity", key: "capacity" },
  { label: "isAvailable", key: "isAvailable" },
];


function Rooms() {
  return <Table title="Rooms" headers={roomHeaders} data={rooms} />;
}

export default Rooms;
