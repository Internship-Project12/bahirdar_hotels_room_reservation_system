import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import QueryKey from "../../constants/QueryKey";
import apiRooms from "../../services/apiRooms";
import ManageRoomForm from "../../forms/manageRoomForm/ManageRoomForm";
import { useUpdateRoom } from "./useUpdateRoom";

function UpdateRoom() {
  const { id } = useParams();

  const { data: { data: { room } = {} } = {}, isLoading } = useQuery({
    queryKey: [QueryKey.ROOM, id],
    queryFn: () => apiRooms.getRoom({ id }),
  });

  const { mutate, isPending } = useUpdateRoom();

  const handleUpdateRoom = (formData) => {
    mutate(formData);
  };

  return (
    <ManageRoomForm
      onSubmit={handleUpdateRoom}
      room={room}
      isLoading={isLoading}
      isUpdating={isPending}
      isInUpdateMode={true}
    />
  );
}

export default UpdateRoom;

/*
{
    status: 'success',
    message: 'get room route',
    data: {
      room: {
        _id: '66956876da838a16189480e3',
        roomNumber: '104',
        roomType: 'single',
        pricePerNight: 350,
        isAvailable: true,
        amenities: [ 'Wi-Fi', 'Room Service', 'Safe', 'Desk and Chair' ],
        capacity: 3,
        description: 
          'The room is cozy, with a comfortable bed and a view of the city skyline.',
        images: [
          
            'http://res.cloudinary.com/dvp1mjhd9/image/upload/v1721067638/yjd8cbthxaueq28cyzkq.jpg', 
            'http://res.cloudinary.com/dvp1mjhd9/image/upload/v1721067638/fvsbhimdfeyrclenheuz.jpg'
        ],
        hotel: '668ced40c8a56b00ec4b58da',
        createdAt: '2024-07-15T18:20:38.836Z',
        updatedAt: '2024-07-15T18:20:38.836Z',
        __v: 0,
        id: '66956876da838a16189480e3'
      }
    }
  }
*/
