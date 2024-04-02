import { Link } from "react-router-dom";
import heroImage from "../assets/heroImage.png";
import ApplyForInternship from "./Internship.page";
import Collaboraation from "./Collaboration.component";
import Certification from "./Certification.component";
import Testomonial from "./Testomonials.page";
import TeamComponent from "./Team.component";
import Features from "./Features.component";
import About from "./About.component";
import Footer from "./Footer.component";

const HomePage = () => {
  return (
    <>
      <div className="">
        <div className="">
          <section className="">
            {/* Hero Section */}
            <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:gap-8 justify-between items-center">
                  <div className="md:w-1/2 py-12 flex flex-col gap-4 mb-10 md:mb-0">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 text-center">
                      Empowering
                      <span className="text-green-800"> women</span> today
                      <span className="text-3xl text-green-800">!</span>
                    </h1>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 text-center">
                      for a brighter tomorrow
                      <span className="text-green-800">!</span>
                    </h1>
                    <p className="mt-2 text-normal text-center">
                      Suvidha Mahila Mandal is a non-profit organization working
                      to impart education among the financially challenged
                      sections to help them realize parity in education and
                      strength of little minds in building a promising future
                    </p>
                    <div className="flex justify-center">
                      <button className="btn">Donate Now</button>
                      <button className="btn">Watch Video</button>
                    </div>
                  </div>
                  <div className="md:w-1/2">
                    <img
                      src={heroImage}
                      alt="this is hero image"
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <ApplyForInternship />
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Collaboraation />
          </section>
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Certification />
          </section>
          <section className="mt-10 md:mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Testomonial />
          </section>
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <TeamComponent />
          </section>
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
