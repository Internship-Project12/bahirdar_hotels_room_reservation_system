import { rooms } from "../../data/rooms";
import Table from "../../ui/table/Table";

const roomHeaders = [
  { label: "image", key: "image" },
  { label: "roomNumber", key: "roomNumber" },
  { label: "roomType", key: "roomType" },
  { label: "pricePerNight", key: "pricePerNight" },
  { label: "capacity", key: "capacity" },
  { label: "isAvailable", key: "isAvailable" },
];

function Rooms() {
  return (
    <div>
      <div className="flex justify-between p-3">
        <h2>All Users </h2>
        <p>filter/sort</p>
      </div>

      <Table headers={roomHeaders} data={rooms} />
    </div>
  );
}

export default Rooms;
