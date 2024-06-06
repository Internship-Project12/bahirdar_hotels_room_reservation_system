import Hero from "../components/homepage/Hero";
import ExploreMoreBtn from "../components/homepage/ExploreMoreBtn";
import About from "../components/homepage/About";

function HomePage() {
  return (
    <>
      <section className="px-10">
        <div className="flex min-h-[calc(100vh-2*24px-50px)] flex-1 flex-col items-center justify-center gap-6 py-6 md:p-3">
          <Hero />
          <ExploreMoreBtn />
        </div>
      </section>

      <HotelsSection title={"Explore More Hotels"} />

      <About />
    </>
  );
}

const HotelCard = ({ imageSrc, altText, hotelName }) => {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg bg-gray-200 p-4">
      <img
        src={imageSrc}
        alt={altText}
        className="mb-2 h-40 w-full rounded-lg object-cover"
      />
      <h3 className="text-lg font-semibold text-gray-600">{hotelName}</h3>
    </div>
  );
};

const HotelsSection = ({ title }) => {
  const hotels = [
    {
      src: "./hotel-images/img-1-hero.jpg",
      alt: "Hotel 1",
      name: "Palm Palace",
    },
    {
      src: "./hotel-images/img-2.jpg",
      alt: "Hotel 2",
      name: "Riverland Hotel",
    },
    { src: "./hotel-images/img-4.jpg", alt: "Hotel 3", name: "Lakemark Hotel" },
    { src: "./hotel-images/img-3.jpg", alt: "Hotel 4", name: "Azwa Hotel" },
    {
      src: "./hotel-images/img-2.jpg",
      alt: "Hotel 4",
      name: "Azwa Hotel",
    },
    { src: "./hotel-images/img-5.jpg", alt: "Hotel 5", name: "Yiganda Hotel" },
    { src: "./hotel-images/img-2.jpg", alt: "Hotel 5", name: "Yiganda Hotel" },
    {
      src: "./hotel-images/img-3.jpg",
      alt: "Hotel 6",
      name: "Lake Avenue Hotel",
    },
  ];

  return (
    <section className="px-10 py-6">
      <h2 className="mb-4 text-2xl font-bold text-gray-600">{title}</h2>
      <div className="grid grid-cols-2 gap-4 text-gray-600 md:grid-cols-3 lg:grid-cols-4">
        {hotels.map((hotel, index) => (
          <HotelCard
            key={index}
            imageSrc={hotel.src}
            altText={hotel.alt}
            hotelName={hotel.name}
          />
        ))}
      </div>
    </section>
  );
};

export default HomePage;
