import MaxWidthWrapper from "../ui/MaxWidthWrapper";

const hotel = {
  name: "Addis International Hotel",
  summary:
    "Addis International Hotel is a luxurious hotel located in the heart of Addis Ababa, Ethiopia.",
  address: "Bole Medhanealem, Addis Ababa, Ethiopia",
  roomNumber: 101,
  price: 150,
  numOfNights: 3,
  numOfPeople: 4,
  checkIn: "2022-12-01",
  checkOut: "2022-12-04",
  roomImages: [
    "/rooms/room1.jpeg",
    "/rooms/room2.jpeg",
    "/rooms/room1.jpeg",
    "/rooms/room2.jpeg",
    "/rooms/room3.jpeg",
  ],
};
function BookRoomPage() {
  return (
    <section className="min-h-screen">
      <MaxWidthWrapper>
        <div className="flex h-full flex-col items-center justify-center rounded border p-5">
          <h1 className="mb-4 text-3xl font-bold text-gray-800">
            Book a Room In {hotel.name}{" "}
          </h1>

          <div className="space-y-2">
            <p className="text-sm">{hotel.summary}</p>
            <p>
              Hotel Address: <span className="text-sm"> {hotel.address}</span>
            </p>
            <p>
              Room Number: <span className="text-sm">{hotel.roomNumber}</span>
            </p>
            <p>
              Price: <span className="text-sm">${hotel.price}</span>
            </p>
            <p>
              Number of People:{" "}
              <span className="text-sm">{hotel.numOfPeople}</span>
            </p>
            <p>
              Check In: <span className="text-sm">{hotel.checkIn}</span>
            </p>
            <p>
              Check Out: <span className="text-sm">{hotel.checkOut}</span>
            </p>
            <p>
              Number of Nights:{" "}
              <span className="text-sm">{hotel.numOfNights}</span>
            </p>
            <div className="my-5 grid grid-cols-3 gap-5">
              {hotel.roomImages.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt="room"
                  className="h-[10rem] w-[12rem] object-cover"
                />
              ))}
            </div>

            {/* PAYMENT METHODS TO BOOK A ROOM */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                Payment Methods
              </h2>
              <div className="flex items-center">
                <div>
                  <img
                    src="/chapa.png"
                    alt="chapa image"
                    className="h-16 w-36"
                  />
                </div>
                <button className="rounded bg-green-600 px-5 py-3 text-white transition hover:bg-green-500">
                  continue paying with chapa
                </button>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}

export default BookRoomPage;

// TODO: Add a button to continue paying with stripe
/* <label>continue paying with stripe</label> */
