import Hero from "../components/homepage/Hero";
import ExploreMoreBtn from "../components/homepage/ExploreMoreBtn";

function HomePage() {
  return (
    <main className="flex min-h-full flex-col gap-6">
      <Hero />
      <ExploreMoreBtn />
    </main>
  );
}

export default HomePage;
