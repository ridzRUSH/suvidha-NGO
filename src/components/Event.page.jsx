import EventCard from "./EventCard.component";
import Animal_Feeding from "../assets/events/Animal-Feeding.jpg";
import Cloths_Distribution from "../assets/events/Cloths-Distribution.jpg";
import Food_Donation from "../assets/events/Food-Donation.jpg";
import Free_Workshop from "../assets/events/Free-Workshop.jpg";
import Fundraising from "../assets/events//Fundraising.jpg";
import Sanitary_Pads from "../assets/events/Sanitary-Pads.jpg";
import Tree_Plantation from "../assets/events/Tree-Plantation.jpg";
import Womens_Day from "../assets/events/Women's-Day.jpg";
const Event = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
      <h1 className="text-4xl text-center md:text-3xl font-bold text-gray-800 sm:text-2xl mb-2 ">
        Events
      </h1>
      <div className="grid place-items-center  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <EventCard
          image={Tree_Plantation}
          title="Tree Plantation"
          description="Join us in nurturing the Earth's embrace, one tree at a time. Together, let's create a greener tomorrow and breathe life into our planet. "
        />
        <EventCard
          image={Fundraising}
          title="Fundraising Events"
          description="Unlock the power of generosity at our Fundraising Event. Your support will ignite positive change and uplift lives in our community. "
        />
        <EventCard
          image={Cloths_Distribution}
          title="Cloths Distribution"
          description="Providing warmth and dignity through clothing. Join us in our mission to bring smiles and comfort to those in need through our cloth distribution event"
        />
        <EventCard
          image={Womens_Day}
          title="Women's Day"
          description="Celebrating the strength, resilience, and achievements of women worldwide on this special Women's Day. Together, let's honor their contributions"
        />
        <EventCard
          image={Food_Donation}
          title="Food Donation  by Our NGO"
          description="Your generous contributions can fill empty plates and bring smiles to those in need. Together,we can provide the nutrious meal."
        />

        <EventCard
          image={Animal_Feeding}
          title="Animal Feeding Programs"
          description="Join us in providing sustenance and compassion to our furry companions. Together, let's make a positive impact on their lives through our Animal Feeding event. "
        />
        <EventCard
          image={Sanitary_Pads}
          title="Sanitary Pads Distribution"
          description="Breaking barriers and promoting menstrual health with our Sanitary Pad Initiative. Together, let's empower women and ensure access to safe and dignified hygiene. "
        />
        <EventCard
          image={Free_Workshop}
          title="Free Workshops"
          description="Discover new skills, ignite your passions, and embrace lifelong learning with our engaging and enriching free workshops. "
        />
      </div>
    </section>
  );
};

export default Event;
