import Shobha_Motghare from "../assets/persons/Shobha_Motghare.jpeg";
import Bharti_Shendre from "../assets/persons/Bharti_Shendre.jpg";
import Nilima_Kalambe from "../assets/persons/Nilima_Kalambe.jpg";
import Payal_Badhe from "../assets/persons/Payal_Badhe.jpg";
import { Link } from "react-router-dom";
const TeamComponent = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl text-center md:text-3xl font-bold text-gray-800 sm:text-2xl mb-4 ">
          Our
          <span className=" text-5xl text-green-800"> team</span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
            <img
              className="w-full h-56 object-cover object-center"
              src={Shobha_Motghare}
              alt="Member 1"
            />
            <div className="p-4 flex flex-col justify-center items-center">
              <h2 className="text-lg font-semibold mb-2">Shobha Motghare</h2>
              <span className="flex gap-8">
                <p className="text-gray-700">Secretary</p>
                <Link to="#">
                  <button
                    type="button"
                    data-twe-ripple-init
                    data-twe-ripple-color="light"
                    className="mb-2 inline-block rounded bg-[#0077b5] px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                  >
                    <span className="[&>svg]:h-4 [&>svg]:w-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 448 512"
                      >
                        <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                      </svg>
                    </span>
                  </button>
                </Link>
              </span>
            </div>
          </div>

          <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
            <img
              className="w-full h-56 object-cover object-center"
              src={Payal_Badhe}
              alt="Member 2"
            />
            <div className="p-4 flex flex-col justify-center items-center">
              <h2 className="text-lg font-semibold mb-2">Payal Badhe</h2>
              <span className="flex gap-8">
                <p className="text-gray-700">President </p>
                <Link to="#">
                  <button
                    type="button"
                    data-twe-ripple-init
                    data-twe-ripple-color="light"
                    className="mb-2 inline-block rounded bg-[#0077b5] px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                  >
                    <span className="[&>svg]:h-4 [&>svg]:w-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 448 512"
                      >
                        <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                      </svg>
                    </span>
                  </button>
                </Link>
              </span>
            </div>
          </div>

          <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
            <img
              className="w-full h-56 object-cover object-center"
              src={Bharti_Shendre}
              alt="Member 3"
            />
            <div className="p-4 flex flex-col  justify-center items-center">
              <h2 className="text-lg font-semibold mb-2">Bharti Shendre</h2>
              <span className="flex gap-8">
                {" "}
                <p className="text-gray-700">Treasurer</p>
                <Link to="#">
                  <button
                    type="button"
                    data-twe-ripple-init
                    data-twe-ripple-color="light"
                    className="mb-2 inline-block rounded bg-[#0077b5] px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                  >
                    <span className="[&>svg]:h-4 [&>svg]:w-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 448 512"
                      >
                        <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                      </svg>
                    </span>
                  </button>
                </Link>
              </span>
            </div>
          </div>

          <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
            <img
              className="w-full h-56 object-cover object-center"
              src={Nilima_Kalambe}
              alt="Member 4"
            />
            <div className="p-4 flex justify-center items-center flex-col">
              <h2 className="text-lg font-semibold mb-2">Nilima Kalambe</h2>
              <span className="flex justify-around gap-8">
                <p className="text-gray-700">Advisor</p>
                <Link to="#">
                  <button
                    type="button"
                    data-twe-ripple-init
                    data-twe-ripple-color="light"
                    className="mb-2 inline-block rounded bg-[#0077b5] px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                  >
                    <span className="[&>svg]:h-4 [&>svg]:w-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 448 512"
                      >
                        <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                      </svg>
                    </span>
                  </button>
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default TeamComponent;
