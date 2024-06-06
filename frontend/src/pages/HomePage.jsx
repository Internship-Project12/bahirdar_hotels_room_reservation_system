import Hero from "../components/homepage/Hero";
import ExploreMoreBtn from "../components/homepage/ExploreMoreBtn";
import About from "../components/homepage/About";
import { HotelsSection } from "./HotelsSection";

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

export default HomePage;
