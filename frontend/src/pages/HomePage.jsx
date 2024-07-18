import Hero from "../ui/homepage/Hero";
import { HotelsSection } from "../ui/homepage/HotelsSection";
import OurServices from "../ui/homepage/OurServices";

function HomePage() {
  return (
    <section className="mx-10 flex flex-col gap-16">
      <div className="flex min-h-[calc(100vh-2*24px-50px)] flex-1 flex-col items-center justify-center">
        <Hero />
      </div>
      <HotelsSection />

      <OurServices />
    </section>
  );
}

export default HomePage;
