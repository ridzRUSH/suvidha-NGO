import EventCard from "./EventCard.component";
import AnimalFeeding from "../assets/gallery/AnimalFeeding.jpg";
import BooksDistribution from "../assets/gallery/BooksDistribution.jpg";
import ClothsDistribution from "../assets/gallery/ClothsDistribution.jpg";
import FoodDistribution from "../assets/gallery/FoodDistribution.jpg";
import FreeEducation from "../assets/gallery/FreeEducation.jpg";
import OnlineEvents from "../assets/gallery/OnlineEvents.jpg";
import SanitaryPad from "../assets/gallery/SanitaryPad.jpg";
import TreePlantation from "../assets/gallery/TreePlantation.jpg";
import WomensDay from "../assets/gallery/Women'sDay.jpg";
import Workshops from "../assets/gallery/Workshops.jpg";
import SuvidhaEvents from "../assets/gallery/SuvidhaEvents.jpg";

const Gallery = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
      <h1 className="text-4xl text-center md:text-3xl font-bold text-gray-800 sm:text-2xl mb-2 ">
        Gallery
      </h1>
      <div className="grid place-items-center  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <EventCard image={Workshops} title="Free Workshops " />
        <EventCard image={BooksDistribution} title="Book Distribution " />
        <EventCard image={OnlineEvents} title="Online Events " />
        <EventCard image={ClothsDistribution} title="Cloths Distribution" />
        <EventCard image={TreePlantation} title="Tree Palantation " />

        <EventCard image={FreeEducation} title="Free Education " />
        <EventCard image={WomensDay} title="Women Day " />
        <EventCard image={FoodDistribution} title="Food Distribution " />
        <EventCard image={SuvidhaEvents} title="Suvidha Events" />
        <EventCard image={SanitaryPad} title="Empowering womens" />
        <EventCard image={AnimalFeeding} title="Animal feeding" />
      </div>
    </section>
  );
};

export default Gallery;
