import {
  MdOutlineBedroomChild,
  MdOutlineFreeCancellation,
  MdOutlineManageSearch,
  MdOutlinePendingActions,
  MdOutlineShoppingCartCheckout,
} from "react-icons/md";
import HotelsStat from "../../features/admin/hotels/HotelsStat";
import AvailableHotelRooms from "../../features/admin/hotels/AvailableHotelRooms";
import BookingTable from "../../features/manager/bookings/BookingTable";

function Dashboard() {
  return (
    <div className="overflow-hiddsen flex w-full flex-col p-3">
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

      <section className="flex justify-between bg-gray-400">
        <div>
          <h2>Recent Enquiries</h2>
        </div>
        <div>
          <h2>Booking Status</h2>
        </div>
      </section>

      <section className="text-gray-700">
        <h2 className="text-lg font-bold">Available Hotel Rooms</h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-4">
          <AvailableHotelRooms
            hotelPhoto={"/hotel-images/img-2.jpg"}
            hotelName={"Palm Palace International Hotel"}
            availableRooms={74}
            pricePerDay={64}
          />
          <AvailableHotelRooms
            hotelPhoto={"/hotel-images/img-3.jpg"}
            hotelName={"Azwa International Hotel"}
            availableRooms={76}
            pricePerDay={53}
          />
          <AvailableHotelRooms
            hotelPhoto={"/hotel-images/img-2.jpg"}
            hotelName={"Unison International Hotel"}
            availableRooms={95}
            pricePerDay={79}
          />
          <AvailableHotelRooms
            hotelPhoto={"/hotel-images/img-2.jpg"}
            hotelName={"Dib Anbessa International Hotel"}
            availableRooms={95}
            pricePerDay={79}
          />
        </div>
      </section>

      <BookingTable bookingTitle={"Recent Bookings"} />
    </div>
  );
}

export default Dashboard;
