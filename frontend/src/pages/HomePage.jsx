import Hero from "../ui/homepage/Hero";
import { HotelsSection } from "../ui/homepage/HotelsSection";

function HomePage() {
  return (
    <section className="px-10">
      <div className="flex min-h-[calc(100vh-2*24px-50px)] flex-1 flex-col items-center justify-center gap-6">
        <Hero />
      </div>
      <HotelsSection />
    </section>
  );
}

export default HomePage;
