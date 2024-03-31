import AheliGosh from "../assets/persons/AheliGosh.jpg";
import AnanyaTriphati from "../assets/persons/AnanyaTriphati.jpg";
import divyaMalfoy from "../assets/persons/divyaMalfoy.jpg";
import KushiJain from "../assets/persons/KushiJain.jpg";
import LekhaShreeHJ from "../assets/persons/LekhaShreeHJ.jpg";
import mayaSahani from "../assets/persons/mayaSahani.jpg";
import SanjanaTunk from "../assets/persons/SanjanaTunk.jpg";
import TestomonialCard from "./TestomonialCard.component";

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
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        <div className="grid gap-4">
          <div>
            <div className="h-auto max-w-full rounded-lg">
              <TestomonialCard
                text="I'm glad to have worked with the Suvidha Foundation because I am passionate about their message and what they 
                , glad to be a part of NGo

                "
                person={"Aheli Gosh"}
                image={AheliGosh}
              />
            </div>
          </div>
          <div>
            <div className="h-auto max-w-full rounded-lg">
              <TestomonialCard
                text="
                Regular meetings really helped in systematic learning as well as working and also helped in amnaging lots of time
               

                "
                person={"Ananya Triphati"}
                image={AnanyaTriphati}
              />
            </div>
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <div className="h-auto max-w-full rounded-lg">
              <TestomonialCard
                text=" 
                Had great learning. Fruitful experience. 
                That the Outside is for Everyone! My passion is to support my community in getting outside
               "
                person={"Kushi Jain"}
                image={KushiJain}
              />
            </div>
            <div className="h-auto max-w-full rounded-lg mt-2">
              <TestomonialCard
                text=" 
                Great experience , i earned a lot by working in such a great NGO
               "
                person={"SanjanaTunk"}
                image={SanjanaTunk}
              />
            </div>
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <div className="h-auto max-w-full rounded-lg">
              <TestomonialCard
                text=" 
                It was great experience to work in suvidha foundation, team work is very good. They conduct daily meetings to guide how to work,which they make our work more easy."
                image={divyaMalfoy}
              />
            </div>
          </div>
          <div className="h-auto">
            <div className=" max-w-full rounded-lg bg-slate-100"></div>
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <div className="h-auto max-w-full rounded-lg">
              <TestomonialCard
                text="
                Thank you for giving the opportunity. Did this intership which was a bit different and unique from others 
            "
                person={"Maya Sahani"}
                image={mayaSahani}
              />
            </div>
          </div>
          <div>
            <div className="h-auto max-w-full rounded-lg">
              <TestomonialCard
                text="
                It was a great experience working with your NGO. I  learned to connect with the society and helped the underprivileged section of the society.
               "
                person={"Lekha Shree HJ"}
                image={LekhaShreeHJ}
              />
            </div>
          </div>
        </div>
      </div>{" "}
    </>
  );
};

export default Testomonial;
