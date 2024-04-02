import AheliGosh from "../assets/persons/AheliGosh.jpg";
import AnanyaTriphati from "../assets/persons/AnanyaTriphati.jpg";
import divyaMalfoy from "../assets/persons/divyaMalfoy.jpg";
import KushiJain from "../assets/persons/KushiJain.jpg";
import LekhaShreeHJ from "../assets/persons/LekhaShreeHJ.jpg";
import mayaSahani from "../assets/persons/mayaSahani.jpg";
import SanjanaTunk from "../assets/persons/SanjanaTunk.jpg";
import TestimonialCard from "./TestomonialCard.component";
import unknownImage from "../assets/unknownImage.jpg";

const Testomonial = () => {
  return (
    <>
      <span className=" p-4">
        <h1 className="text-4xl text-center md:text-3xl font-bold text-gray-800 sm:text-2xl">
          What
          <span className=" text-5xl text-green-800"> people</span> say
        </h1>{" "}
        <h1 className="text-4xl text-center md:text-3xl font-bold text-gray-800 sm:text-2xl">
          about us
        </h1>
      </span>
      <div className="grid ml-[9%] grid-cols-1 md:ml-0 md:grid-cols-2 lg:grid-cols-4 gap-2">
        <div className="h-auto max-w-full rounded-lg">
          <TestimonialCard
            text="I'm glad to have worked with the Suvidha Foundation because I am passionate about their message and what they, glad to be a part of NGO"
            person={"Aheli Gosh"}
            image={AheliGosh}
          />
        </div>
        <div className="h-auto max-w-full rounded-lg">
          <TestimonialCard
            text="Regular meetings really helped in systematic learning as well as working and also helped in managing lots of time"
            person={"Ananya Triphati"}
            image={AnanyaTriphati}
          />
        </div>
        <div className="h-auto max-w-full rounded-lg">
          <TestimonialCard
            text="Had great learning. Fruitful experience. That the Outside is for Everyone! My passion is to support my community in getting outside"
            person={"Kushi Jain"}
            image={KushiJain}
          />
        </div>
        <div className="h-auto max-w-full rounded-lg">
          <TestimonialCard
            text="Great experience, I earned a lot by working in such a great NGO"
            person={"Sanjana Tunk"}
            image={SanjanaTunk}
          />
        </div>
        <div className="h-auto max-w-full rounded-lg">
          <TestimonialCard
            text="It was great experience to work in Suvidha Foundation. They conduct daily meetings to guide how to work , provide ease in work."
            person={"Divya Malfoy"}
            image={divyaMalfoy}
          />
        </div>
        <div className="h-auto max-w-full rounded-lg">
          <TestimonialCard
            text="Amazing experience, it was fun being a part of such a great Ngo, I learned a lot of things under guidance of my senior"
            image={unknownImage}
            person={"Sarika Jain"}
          />
        </div>
        <div className="h-auto max-w-full rounded-lg">
          <TestimonialCard
            text="Thank you for giving the opportunity. Did this internship which was a bit different and unique from others"
            person={"Maya Sahani"}
            image={mayaSahani}
          />
        </div>
        <div className="h-auto max-w-full rounded-lg">
          <TestimonialCard
            text="It was a great experience working with your NGO. I learned to connect with the society and helped the underprivileged section of the society."
            person={"Lekha Shree HJ"}
            image={LekhaShreeHJ}
          />
        </div>
      </div>
    </>
  );
};

export default Testomonial;
