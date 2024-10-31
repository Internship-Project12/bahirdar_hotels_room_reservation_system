import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import RoomsListItem from "../ui/RoomsListItem";
import { useQuery } from "@tanstack/react-query";
import QueryKey from "../constants/QueryKey";
import apiRooms from "../services/apiRooms";
import { useHotel } from "../features/hotels/useHotel";
import SpinnerMini from "../ui/SpinnerMini";
import Spinner from "../ui/Spinner";
import toast from "react-hot-toast";
import RoomTypeFilter from "../components/RoomTypeFilter";
import { useState } from "react";

function RoomsListPage() {
  const { hotelId } = useParams();
  const [selectedRoomTypes, setSelectedRoomTypes] = useState([]);

  const navigate = useNavigate();

  const {
    data: { data: { data: hotel } = {} } = {},
    isLoading: isLoadingHotel,
    isError,
    error,
  } = useHotel({ id: hotelId });

  const { data: { data: { rooms } = {} } = {}, isLoading: isLoadingRooms } =
    useQuery({
      queryKey: [QueryKey.ROOMS, hotelId, selectedRoomTypes],
      queryFn: () =>
        apiRooms.getAllRoomsOnHotel({ hotelId, selectedRoomTypes }),
      retry: false,
    });

  if (isError) {
    toast.error(
      error?.response?.message || "No Hotel Found. 404); please try again",
    );

    return navigate(`/hotels/${hotelId}`);
  }

  const handleRoomTypeChange = (e) => {
    const selectedType = e.target.value;

    setSelectedRoomTypes((prev) =>
      e.target.checked
        ? [...prev, selectedType]
        : prev.filter((type) => type !== selectedType),
    );
  };

  return (
    <div className="relative flex w-full justify-between gap-4 p-6">
      {/* filter/sort */}
      <div className="sticky top-0 h-fit min-h-screen w-[20%] space-y-8 rounded-lg bg-slate-100">
        <div className="flex flex-col items-center justify-center gap-6">
          <RoomTypeFilter
            selectedRoomTypes={selectedRoomTypes}
            onChange={handleRoomTypeChange}
          />
        </div>
      </div>

      {/* rooms list  */}
      <section className="w-[50%] rounded-md border-l-2 border-r-2 bg-slate-100 shadow-lg lg:-mt-7">
        {isLoadingHotel || isLoadingRooms ? null : (
          <div className="flex flex-col items-center justify-center gap-2 p-4 text-blue-600">
            <Link
              to={`/hotels/${hotelId}`}
              className="z-10 w-full text-center font-mono text-4xl font-semibold tracking-tighter opacity-95"
            >
              {isLoadingHotel ? <SpinnerMini /> : hotel?.name}
            </Link>
            <h2 className="z-10 text-center font-mono font-semibold capitalize tracking-tighter shadow-lg">
              There are a total of{" "}
              {isLoadingHotel ? " - " : hotel?.numOfRooms + 1} rooms found In
              this hotel 🏨
            </h2>
          </div>
        )}

        {isLoadingRooms || isLoadingHotel ? (
          <Spinner />
        ) : rooms.length > 0 ? (
          rooms.map((room, i) => <RoomsListItem key={i} room={room} />)
        ) : (
          <div className="flex h-[200px] items-center justify-center">
            <p className="text-2xl capitalize text-slate-600">
              404 ): There are no rooms found.
            </p>
          </div>
        )}
      </section>

      {/* room detail page */}
      <section className="h-fit w-[27%] flex-1 overflow-hidden rounded-xl border-l-2 border-r-2 bg-slate-100 shadow-lg">
        <Outlet />
      </section>
      {/* <section></section> */}
    </div>
  );
}

export default RoomsListPage;
