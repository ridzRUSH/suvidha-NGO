import country from "../assets/countries.png";
import forest from "../assets/gardening.png";
import intern from "../assets/maintenance.png";
import vol from "../assets/networking.png";

const Certification = () => {
  return (
    <div className=" grid grid-cols-2 gap-4 md:grid-cols-4">
      <div className="flex items-center gap-4">
        <img className="h-[60px] sm:h-[90px]" src={country} alt="country" />
        <span>
          <h3 className=" text-xl">
            <span className="text-2xl font-bold text-green-800">15</span>+
          </h3>
          <p className=" text-xl">Countries</p>
        </span>
      </div>
      <div className="flex items-center gap-4">
        <img className="h-[60px] sm:h-[90px]" src={forest} alt="forest" />
        <span>
          <h3 className=" text-xl">
            <span className="text-2xl font-bold text-green-800">54L</span>+
          </h3>
          <p className=" text-xl">Tree Planted</p>
        </span>
      </div>
      <div className="flex items-center gap-4">
        <img className="h-[60px] sm:h-[90px]" src={intern} alt="intern" />
        <span>
          <h3 className=" text-xl">
            <span className="text-2xl font-bold text-green-800">1Cr</span>+
          </h3>
          <p className=" text-xl">Internship Goal</p>
        </span>
      </div>
      <div className="flex items-center gap-4">
        <img className="h-[60px] sm:h-[90px]" src={vol} alt="voulentiers" />
        <span>
          <h3 className=" text-xl">
            <span className="text-2xl font-bold text-green-800">3L</span>+
          </h3>
          <p className=" text-xl">Volunteers</p>
        </span>
      </div>
    </div>
  );
};

export default Certification;
