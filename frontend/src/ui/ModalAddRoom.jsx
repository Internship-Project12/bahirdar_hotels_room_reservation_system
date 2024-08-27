import { Link } from "react-router-dom";
import ModalWindow from "./ModalWindow";
import AddRoom from "../features/rooms/AddRoom";

function ModalAddRoom({ hotel }) {
  return (
    <ModalWindow>
      <div className="relative flex w-[80vw] flex-col items-center justify-center gap-4">
        <Link
          to="/"
          className="absolute left-[50%] top-1 -translate-x-[50%] text-slate-500 underline"
        >
          go to home
        </Link>
        <Link
          to={`/hotels/${hotel._id}`}
          target="blank"
          className="m-3 mt-4 flex items-center justify-center gap-2 p-3 text-3xl font-extrabold tracking-widest text-blue-600 underline"
        >
          Welcome to {hotel.name}
        </Link>
        <p className="w-[70%] border-b-2 border-slate-500 text-center text-lg leading-10 tracking-wide text-slate-500">
          Before you can start managing your hotel, you need to add at least 1
          room on this hotel. Please take your time add a room to your hotel and
          start managing your hotel.
        </p>
        <AddRoom />
      </div>
      {/* 
          <div className='flex justify-center items-center m-4'>
            <button className="bg-blue-600 text">Want to add more room</button>
          </div> */}
    </ModalWindow>
  );
}

export default ModalAddRoom;
