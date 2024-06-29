import {
  MdOutlineBedroomChild,
  MdOutlineFreeCancellation,
  MdOutlineManageSearch,
  MdOutlinePendingActions,
  MdOutlineShoppingCartCheckout,
} from "react-icons/md";
import HotelsStat from "../components/hotels/HotelsStat";

function Dashboard() {
  return (
    <div className="flex w-full flex-col p-3">
      <section className="grid grid-cols-4 justify-between">
        <HotelsStat
          Icon={MdOutlineBedroomChild}
          title={"Available rooms"}
          number={130}
        />

        <HotelsStat
          Icon={MdOutlineShoppingCartCheckout}
          title={"Today Checkouts"}
          number={130}
        />

        <HotelsStat
          Icon={MdOutlineFreeCancellation}
          title={"Cancellations"}
          number={21}
        />

        <HotelsStat
          Icon={MdOutlineManageSearch}
          title={"Enquiries"}
          number={412}
        />

        <HotelsStat
          Icon={MdOutlinePendingActions}
          title={"Pending Payments"}
          number={78}
        />
      </section>

      <div>
        <h2>Recent Enquiries</h2>
        <h2>Booking Status</h2>
      </div>
      <h2>Available Rooms</h2>
      <h2>Booking Detials</h2>
    </div>
  );
}

export default Dashboard;
