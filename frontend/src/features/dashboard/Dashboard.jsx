import {
  MdOutlineBedroomChild,
  MdOutlineFreeCancellation,
  MdOutlineManageSearch,
  MdOutlinePendingActions,
  MdOutlineShoppingCartCheckout,
} from "react-icons/md";
import Stats from "../hotels/Stats";
import AvailableHotelRooms from "../hotels/AvailableHotelRooms";
import BookingTable from "../bookings/BookingTable";

const managerStats = [
  {
    Icon: MdOutlineBedroomChild,
    title: "Available rooms",
    number: 30,
  },
    {
      Icon: MdOutlineManageSearch,
      title: "Today's CheckIn",
      number: 30,
    },
  {
    Icon: MdOutlineShoppingCartCheckout,
    title: "Today's Checkout",
    number: 130,
  },
  {
    Icon: MdOutlineFreeCancellation,
    title: "Cancellations",
    number: 30,
  },
  {
    Icon: MdOutlinePendingActions,
    title: "Pending Payments",
    number: 30,
  },
];

const Rooms = [
  {
    image: "/hotel-images/img-2.jpg",
    name: "Palm Palace International Hotel",
    pricePerNight: 542,
  },
  {
    image: "/hotel-images/img-2.jpg",
    name: "Palm Palace International Hotel",
    pricePerNight: 542,
  },
  {
    image: "/hotel-images/img-2.jpg",
    name: "Palm Palace International Hotel",
    pricePerNight: 542,
  },
  {
    image: "/hotel-images/img-2.jpg",
    name: "Palm Palace International Hotel",
    pricePerNight: 542,
  },
];

function Dashboard() {
  return (
    <div className="flex w-full flex-col">
      <section className="mb-8 grid grid-cols-5 justify-between">
        {managerStats.map((stat, i) => (
          <Stats
            key={i}
            Icon={stat.Icon}
            title={stat.title}
            number={stat.number}
          />
        ))}
      </section>

      <section className="mb-8 flex flex-col">
        <h2 className="bg-white p-4 text-2xl font-bold uppercase">Hotels</h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-4">
          {Rooms.map((room, i) => (
            <AvailableHotelRooms
              key={i}
              hotelPhoto={room.image}
              hotelName={room.name}
              availableRooms={74}
              pricePerDay={room.pricePerNight}
            />
          ))}
        </div>
      </section>

      <BookingTable bookingTitle={"Recent Bookings"} />
    </div>
  );
}

export default Dashboard;
