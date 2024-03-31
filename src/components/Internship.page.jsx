import computerImage from "../assets/computerImage.jpg";
const ApplyForInternship = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
      <h1 className="text-4xl text-center md:text-3xl font-bold text-gray-800 sm:text-2xl mb-4 ">
        Apply for
        <span className=" text-5xl text-green-800">internship</span>
      </h1>

      <div className="flex flex-col md:flex-row gap-4">
        <img
          src={computerImage}
          alt="computer image"
          className=" rounded-xl md:rounded-none md:rounded-s-xl md:w-1/2"
        />
        <div className=" md:w-1/2  flex justify-center items-center flex-col gap-4 ">
          <h1 className=" text-4xl font-extrabold leading-none tracking-tight  md:text-4xl lg:text-4xl text-slate-700 mb-6 mt-6">
            We invest in the{" "}
            <span className="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">
              world’s potential
            </span>
          </h1>
          <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
            Seize the opportunity to gain invaluable experience and jumpstart
            your career with an internship that propels you towards success.
            <br />
            The Suvidha Foundation Internship Program is a unique opportunity
            for students and recent graduates to gain experience and contribute
            to the work of Suvidha Foundation. Along with undertaking tasks
            related to their specific skills, we encourage interns to develop a
            reputable professional portfolio.
          </p>
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Apply for Internship
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ApplyForInternship;
