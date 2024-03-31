import colabimg1 from "../assets/colab-1.jpg";
import colabimg2 from "../assets/collab-2.jpg";

const Collaboraation = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div>
          <h1 className="text-4xl text-center md:text-3xl font-bold text-gray-800 sm:text-2xl mb-2 ">
            Our collaboration
            <span className="text-5xl text-green-800"> Partners</span>
          </h1>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center ">
          <img
            className="grayscale mb-4 md:mb-0 "
            src={colabimg1}
            alt="colaboration 1"
          />
          <img className="grayscale" src={colabimg2} alt="colaboration 2" />
        </div>
      </div>
    </div>
  );
};
export default Collaboraation;
