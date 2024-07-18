/* eslint-disable react/prop-types */
import { FaHotel, FaTags, FaCreditCard, FaHeadset } from "react-icons/fa";

const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col items-center rounded-lg bg-[#f0ba6b] p-6 text-center shadow-lg transition-transform duration-200 hover:translate-y-[-0.5rem] hover:shadow-xl">
    <Icon className="text-primary-light mb-4 text-7xl text-[#e8f0eadc]" />
    <h3 className="mb-2 text-xl font-semibold text-gray-800">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const OurServices = () => (
  <section className="py-16">
    <div className="container mx-auto px-4">
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold text-gray-800">Our Services</h2>
        <p className="mt-4 text-lg text-gray-600">
          We provide a comprehensive range of services to make your booking
          experience seamless and enjoyable.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
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
);

export default OurServices;
