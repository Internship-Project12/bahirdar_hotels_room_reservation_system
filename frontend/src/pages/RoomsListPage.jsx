import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import { createPortal } from "react-dom";
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
  const [openFilter, setOpenFilter] = useState(false);

  const handleOpenFilter = () => setOpenFilter(!openFilter);

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
    <div className="relative flex w-full flex-col justify-between gap-4 p-6 md:flex-row">
      {/* filter/sort */}
      <div className="sticky top-0 hidden h-fit min-h-screen w-[20%] space-y-8 rounded-lg bg-slate-100 md:block">
        <div className="flex flex-col items-center justify-center gap-6">
          <h2 className="rounded bg-slate-200 px-5 py-2 text-sm">
            Filter By Room Type:
          </h2>
          <RoomTypeFilter
            selectedRoomTypes={selectedRoomTypes}
            onChange={handleRoomTypeChange}
          />
        </div>
      </div>

      {/* Mobile for filter */}
      {/* <div className="relative md:hidden">
        <button
          onClick={handleOpenFilter}
          className="rounded bg-blue-500 px-3 py-2 text-white"
        >
          Filter
        </button>
        {openFilter &&
          createPortal(
            <div className="absolute">
              <RoomTypeFilter
                selectedRoomTypes={selectedRoomTypes}
                onChange={handleRoomTypeChange}
              />
            </div>,
            document.getElementById("modal"),
          )}
      </div> */}

      {/* rooms list  */}
      <section className="w-full rounded-md border-l-2 border-r-2 bg-slate-100 shadow-lg lg:-mt-7 lg:w-[50%]">
        {isLoadingHotel || isLoadingRooms ? null : (
          <div className="flex flex-col items-center justify-center gap-2 p-4">
            <Link
              to={`/hotels/${hotelId}`}
              className="z-10 w-full text-center font-mono text-4xl font-semibold tracking-tighter text-blue-600 opacity-95"
            >
              {isLoadingHotel ? <SpinnerMini /> : hotel?.name}
            </Link>
            <h2 className="z-10 text-center font-mono capitalize tracking-tighter shadow-lg">
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
