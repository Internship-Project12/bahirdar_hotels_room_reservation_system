import { useCreateRoom } from "./useCreateRoom";
import ManageRoomForm from "../../forms/manageRoomForm/ManageRoomForm";

/*
  {
    roomNumber: '101',
    roomType: 'single',
    pricePerNight: '350',
    capacity: '3',
    description: 
      'The room is cozy, with a comfortable bed and a view of the city skyline.',
    amenities: [ 'Wi-Fi', 'Room Service', 'Desk and Chair' ],
    RoomImageFiles: FileList {
      0: File {
        name: 'bed-2.jpg',
        lastModified: 1721063667219,
        webkitRelativePath: '',
        size: 75426,
        type: 'image/jpeg'
      },
      1: File {
        name: 'bed-1.jpg',
        lastModified: 1721063566820,
        webkitRelativePath: '',
        size: 74462,
        type: 'image/jpeg'
      },
      length: 2
    }
  }
*/

function AddRoom() {
  const { mutate, isPending } = useCreateRoom();

  const onSubmitHandler = (room) => {
    mutate(room);
  };

  return <ManageRoomForm onSubmit={onSubmitHandler} isAdding={isPending} />;
}

export default AddRoom;
