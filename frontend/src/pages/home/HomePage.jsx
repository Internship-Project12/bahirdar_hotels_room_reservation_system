import Hero from "./_components/Hero";
import { HotelsSection } from "./_components/HotelsSection";
import OurServices from "./_components/OurServices";

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
