import QR_Code from "../assets/QR-Codes.jpg";
const Help = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="md:w-1/2 p-8 mt-8 flex flex-col justify-center items-center gap-4">
          <h1 className="text-4xl text-center md:text-3xl font-bold text-gray-800 sm:text-2xl ">
            Help us by
            <span className=" text-4xl text-green-800"> Supporting </span> us
          </h1>

          <div className="flex flex-col gap-3 justify-center text-xl ">
            <span className="text-2xl text-orange-500 font-bold">
              For Indian Donors
            </span>

            <span>Bank Of Baroda</span>

            <span>City: Nagpur</span>

            <span>Contact No: +91 8010996763</span>

            <span>Account Name: Suvidha Mahila Mandal</span>

            <span>Suvidha Account No: 97840100027609</span>
            <span>IFSC Code: BARB0DBKPAR</span>
          </div>
        </div>
        <img src={QR_Code} alt="Qr code" className="md:w-1/2 p-4" />
      </div>
    </section>
  );
};

export default Help;
