import image1 from "../assets/img-1.jpg";
import image2 from "../assets/img-2.jpg";
import image3 from "../assets/img-3.jpg";
import About from "./About.component";
import Certification from "./Certification.component";
import Collaboraation from "./Collaboration.component";
import Features from "./Features.component";
import Footer from "./Footer.component";
import ApplyForInternship from "./Internship.page";
import TeamComponent from "./Team.component";
import Testomonial from "./Testomonials.page";
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <>
      <div className="">
        <div className="">
          <section className="h-screen">
            {/* Hero Section */}
            <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:gap-8 justify-between items-center">
                  <div className="md:w-1/2 py-12 flex flex-col gap-4 mb-30">
                    <span>
                      <h1 className="text-4xl text-center md:text-3xl font-bold text-gray-800 sm:text-2xl">
                        Empowering
                        <span className=" text-5xl text-green-800">
                          {" "}
                          women
                        </span>{" "}
                        today
                      </h1>
                      <h1 className="text-4xl md:text-3xl font-bold text-gray-800 sm:text-2xl text-center">
                        for a brighter tomorrow{" "}
                        <span className=" text-5xl text-green-800">!</span>
                      </h1>
                    </span>

                    <p className=" mt-2 text-normal text-center">
                      Suvidha Mahila Mandal is a non-profit organization working
                      to impart education among the financially challenged
                      sections to help them realize parity in education and
                      strength of little minds in building a promising future
                    </p>

                    <span className="flex justify-center">
                      <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                          Donate Now
                        </span>
                      </button>
                      <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                          Watch Video
                        </span>
                      </button>
                    </span>
                  </div>

                  <div className="md:w-1/2 relative">
                    <img
                      className="h-60 w-auto rounded-sm "
                      src={image2}
                      alt="group image"
                    />
                    <img
                      className="absolute rounded-sm top-[74%] left-[40%] h-40 w-auto z-10"
                      src={image1}
                      alt="group of children"
                    />
                    <img
                      className="absolute rounded-sm -left-8 -bottom-27 h-[300px] w-auto"
                      src={image3}
                      alt="group of children"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="pt-[400px] sm:pt-[300px] md:pt-[100px]">
            <Collaboraation />
          </section>
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Certification />
          </section>
          <section className=" mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Testomonial />
          </section>
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <TeamComponent />
          </section>
          <ApplyForInternship />
          <section>
            <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <Features />
              </div>
            </div>
          </section>
          <About />
          <section>
            <Footer />
          </section>
        </div>
      </div>
    </>
  );
};

export default HomePage;
