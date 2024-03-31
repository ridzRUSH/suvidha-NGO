import Card from "./Card.component";
const Features = () => {
  return (
    <>
      <div className="flex flex-col justify-center">
        <h1 className="text-4xl text-center md:text-3xl font-bold text-gray-800 sm:text-2xl mb-2 ">
          <span className=" text-5xl text-green-800">WE </span>
          Support Sustinable Future
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2  place-items-center justify-center">
          <Card
            title="Healthy Food"
            text="By focusing on healthy food donations, our NGO aims to improve the well-being and quality of life for individuals and communities in need."
          />
          <Card
            title="Social Awareness"
            text="We provide resources, conduct awareness campaigns, and  aiming to create a healthier environment and prevent the spread of diseases"
          />
          <Card
            title="Health Care"
            text="We believe that access to healthcare is a fundamental right, and we work tirelessly to ensure that healthcare services are accessible, affordable"
          />
          <Card
            title="Primary Education"
            text="By collaborating with local communities and educators, we aim to empower children with the knowledge and skills they need for a brighter future."
          />
          <Card
            title="Social Care"
            text="Our programs encompass a range of support services, including counseling, vocational training, and advocacy, with the goal of empowering individuals "
          />
          <Card
            title="Women Empowernment"
            text="Through these programmes, the organization aims to achieve the vision of imparting innovative education that stays with the students forever  "
          />
        </div>
      </div>
    </>
  );
};

export default Features;
