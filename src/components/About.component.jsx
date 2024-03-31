import React, { useState } from "react";

const About = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const handleQuestionClick = (index) => {
    setActiveQuestion(index === activeQuestion ? null : index);
  };

  const questions = [
    {
      question: "About Us",
      answer:
        "Suvidha Mahila Mandal is a non-profit organization working to impart education among the financially challenged sections to help them realize parity in education and strength of little minds in building a promising future. The organization has provisions of student internships, student mentorship and the scope to volunteer. Through these programmes, the organization aims to achieve the vision of imparting innovative education that stays with the students forever and equip them for the unforeseen future. ",
    },
    {
      question: "What is our mission ?",
      answer:
        "  To Inspire Students, help them Innovate and let them Integrate to build the next generation humankind. To Run Food Donation And Awareness Campaign In Rural Region.",
    },
    {
      question: "what's our vision ?",
      answer:
        "    To build Next Generation Entrepreneur, by providing them a Skill-Based Education.  To Provide Internship, Training And Workshops and Quality Education All Over The World.. ",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">FAQ</h2>
        {questions.map((item, index) => (
          <div
            key={index}
            className="mb-4 bg-white rounded-lg overflow-hidden border border-gray-300"
          >
            <div
              className="p-4 cursor-pointer"
              onClick={() => handleQuestionClick(index)}
            >
              <h3 className="text-lg font-semibold">{item.question}</h3>
            </div>
            {activeQuestion === index && (
              <div className="p-4">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
