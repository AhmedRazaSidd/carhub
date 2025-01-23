import { fetchCars } from "@/utils";
import { CarCard, CustomFilter, Hero, SearchBar } from "./components";

export default async function Home() {
  const allCars = await fetchCars();  
  
  const isAllCarsEmpty =
    !Array.isArray(allCars) || allCars.length === 0 || !allCars;

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>
        <div className="home__filters">
          <SearchBar />
        </div>
        {!isAllCarsEmpty ? (
          <section className="flex flex-wrap">
            {allCars?.map((car, index) => (
              <CarCard car={car} key={index} />
            ))}
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops, no results</h2>
          </div>
        )}
      </div>
    </main>
  );
}
