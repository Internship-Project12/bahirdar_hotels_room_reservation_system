import {
  MdOutlineBedroomChild,
  MdOutlineFreeCancellation,
  MdOutlineManageSearch,
  MdOutlineShoppingCartCheckout,
} from "react-icons/md";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import BookingCard from "../bookings/BookingCard";
import { useCurrentHotel } from "./useCurrentHotel";
import { useAuthContext } from "../../context/AuthContext";
import CustomLabeledPieChart from "../stats/CustomLabeledPieChart";
import AreaChartBox from "../stats/AreaChartBox";
import {
  barChartBookingData,
  barChartBoxVisit,
  bookingRevenueData,
  hotelUserBookingMonthlyStatusData,
  lineChartData,
} from "../../data/stat-data";
import BarChartBox from "../stats/BarChartBox";
import LineChartBox from "../stats/LineChartBox";
import ModalAddRoom from "../../ui/ModalAddRoom";
import LoadingSkeleton from "../../ui/LoadingSkeleton";
import MaxWidthWrapper from "../../ui/MaxWidthWrapper";
import { useQuery } from "@tanstack/react-query";
import QueryKey from "../../constants/QueryKey";
import { apiAdmin } from "../../services/apiAdmin";

const RecentlyBookedRooms = [
  {
    photo: "/rooms/room1.jpeg",
    roomNumber: "001 ",
    pricePerNight: 542,
    type: "single",
  },
  {
    photo: "/rooms/room2.jpeg",
    roomNumber: "002",
    pricePerNight: 542,
    type: "double",
  },
  {
    photo: "/rooms/room3.jpeg",
    roomNumber: "003",
    pricePerNight: 542,
    type: "single",
  },
  {
    photo: "/rooms/room4.jpeg",
    roomNumber: "004",
    pricePerNight: 542,
    type: "triple",
  },
];

function ManagerDashboard() {
  const navigate = useNavigate();
  const { setCurrentHotelHandler, currentHotel } = useAuthContext();

  const { hotel, isLoading, isError } = useCurrentHotel();

  const { data: { data } = {}, isLoading: isLoadingHotelStats } = useQuery({
    queryKey: [QueryKey.HOTEL_STATS],
    queryFn: () => apiAdmin.getHotelStats(currentHotel._id),
    enabled: !!currentHotel._id,
  });

  if (isLoading || isLoadingHotelStats) {
    return (
      <div className="mx-auto flex min-h-screen justify-center">
        <div className="mt-5 p-4 lg:mt-12">
          <LoadingSkeleton className="h-3 w-[10rem] bg-gray-50 dark:bg-gray-300" />
          <LoadingSkeleton className="h-3 w-[30rem] bg-gray-50 dark:bg-gray-300" />
          <LoadingSkeleton className="h-3 w-[20rem] bg-gray-50 dark:bg-gray-300" />
          <LoadingSkeleton className="h-3 w-[15rem] bg-gray-50 dark:bg-gray-300" />
          <LoadingSkeleton className="h-3 w-[25rem] bg-gray-50 dark:bg-gray-300" />
          <LoadingSkeleton className="h-3 w-[10rem] bg-gray-50 dark:bg-gray-300" />
        </div>
      </div>
    );
  }

  if (isError) {
    toast.error(
      "Something went very wrong when fetching a hotel data : Please try again.",
    );
    return navigate("/");
  }

  if (hotel) {
    setCurrentHotelHandler(hotel);
  }

  if (!data) return null;

  const { numBookings, numReviews, numRooms, numUsers } = data;

  const managerStats = [
    {
      icon: <MdOutlineBedroomChild className="size-8" />,
      title: "Rooms",
      number: numRooms,
    },
    {
      icon: <MdOutlineManageSearch className="size-8" />,
      title: "Bookings",
      number: numBookings,
    },
    {
      icon: <MdOutlineShoppingCartCheckout className="size-8" />,
      title: "Users",
      number: numUsers,
    },
    {
      icon: <MdOutlineFreeCancellation className="size-8" />,
      title: "Reviews",
      number: numReviews,
    },
  ];

  return (
    <>
      <div className="flex w-full flex-col gap-5 overflow-hidden">
        <MaxWidthWrapper className="border-black/7 w-full border bg-black/5">
          <section className="m-3 mx-auto mb-8 grid w-full grid-cols-1 gap-4 gap-x-5 sm:grid-cols-2 lg:w-3/4 lg:grid-cols-4 lg:gap-x-10">
            {managerStats.map(({ title, icon, number }, i) => (
              <div
                key={i}
                className="flex flex-col items-center rounded bg-gradient-to-br from-[#E0A75E] to-[#E0A75E]/70 p-4 text-white shadow-xl"
              >
                {icon}
                <span className="text-xl font-semibold md:text-2xl">
                  {number}
                </span>
                <h3 className="text-sm">{title}</h3>
              </div>
            ))}
          </section>
        </MaxWidthWrapper>

        <MaxWidthWrapper className="border-black/7 w-full border bg-black/5">
          <section className="h-96 w-full">
            <CustomLabeledPieChart />
          </section>
        </MaxWidthWrapper>

        <MaxWidthWrapper className="border-black/7 w-full border bg-black/5">
          <section className="flex justify-between">
            <div className="m-3 my-6 h-96 w-full p-6 py-6">
              <BarChartBox data={barChartBoxVisit} />
            </div>
            <div className="m-3 my-6 h-96 w-full p-6 py-6">
              <BarChartBox data={barChartBookingData} />
            </div>
          </section>
        </MaxWidthWrapper>

        <section className="m-3 my-6 flex h-[500px] p-8">
          <AreaChartBox
            title="Monthly Registered Number of Hotels and Users "
            data={hotelUserBookingMonthlyStatusData}
            dataKeys={["users", "hotels"]}
            colors={["#160ce4", "#15c458"]}
          />
        </section>

        <section className="m-3 my-6 flex h-[500px] p-6">
          <AreaChartBox
            title="Revenue Analysis"
            data={bookingRevenueData}
            dataKeys={["revenue"]}
            colors={["#15c458"]}
          />
        </section>

        <section className="mx-3 my-6 flex h-[400px] p-6">
          <LineChartBox
            data={lineChartData}
            title={"Total Number of Registered Users and Bookings over Time"}
          />
        </section>

        <section className="my-6 flex flex-col">
          <div className="flex justify-between p-4">
            <h2 className="text-2xl font-bold uppercase">
              Recently Booked Rooms
            </h2>
            <Link
              to="/dashboard/bookings"
              className="flex items-center rounded-full bg-blue-500 px-2 py-1 text-sm text-white transition-all duration-200 hover:scale-105"
            >
              See more &gt;&gt;
            </Link>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4">
            {RecentlyBookedRooms.map((room, i) => (
              <BookingCard key={i} {...room} />
            ))}
          </div>
        </section>

        <section>
          <div className="flex justify-between p-4">
            <h2 className="text-2xl font-bold uppercase">Recent Users</h2>
            <Link
              to="/dashboard/users"
              className="flex items-center rounded-full bg-blue-500 px-2 py-1 text-sm text-white transition-all duration-200 hover:scale-105"
            >
              See more &gt;&gt;
            </Link>
          </div>
          {/* <BookingTable bookings={RecentBooks} bookingHeaders={bookingHeaders} /> */}
        </section>
      </div>
      {hotel.rooms.length < 1 && <ModalAddRoom hotel={hotel} />}
    </>
  );
}

export default ManagerDashboard;
