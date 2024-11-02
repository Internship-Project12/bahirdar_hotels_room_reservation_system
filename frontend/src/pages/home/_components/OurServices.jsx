/* eslint-disable react/prop-types */
import { FaHotel, FaTags, FaCreditCard, FaHeadset } from "react-icons/fa";
import MaxWidthWrapper from "../../../ui/MaxWidthWrapper";

const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col items-center rounded-sm bg-[#f0ba6b] text-center font-mono shadow-lg transition-transform duration-300 hover:translate-y-[-0.5rem] hover:shadow-xl sm:p-3 md:p-6">
    <Icon className="mb-4 text-7xl text-white" />
    <h3 className="mb-2 text-xl text-gray-800 md:font-semibold">{title}</h3>
    <p className="text-sm text-gray-500">{description}</p>
  </div>
);

export default function OurServices() {
  return (
    <MaxWidthWrapper>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="my-5 flex flex-col items-center justify-center space-y-5 p-4 md:space-y-10">
            <h2 className="border-b p-4 text-xl text-black/70 shadow md:text-2xl md:font-bold lg:text-4xl">
              Our Services
            </h2>
            <p className="mt-2 text-center text-sm text-gray-500 md:mt-4 md:text-left md:text-lg">
              We provide a comprehensive range of services to make your booking
              experience seamless and enjoyable.
            </p>
          </div>
          <div className="mx-auto grid w-3/4 grid-cols-1 gap-8 sm:w-full sm:grid-cols-2 lg:grid-cols-4">
            <ServiceCard
              icon={FaHotel}
              title="Hotel Booking"
              description="Find and book the best hotels at unbeatable prices."
            />
            <ServiceCard
              icon={FaTags}
              title="Special Offers"
              description="Exclusive discounts for your bookings."
            />
            <ServiceCard
              icon={FaCreditCard}
              title="Secure Payments"
              description="Secure transactions for your booking."
            />
            <ServiceCard
              icon={FaHeadset}
              title="24/7 Support"
              description="Reliable customer support for all your booking needs."
            />
          </div>
        </div>
      </section>
    </MaxWidthWrapper>
  );
}
