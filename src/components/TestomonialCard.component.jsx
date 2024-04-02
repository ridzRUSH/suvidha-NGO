const TestimonialCard = ({ text, person, image }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 md:h-[316px]">
      <div className="flex items-center justify-center p-4">
        <img
          className="rounded-full w-20 h-20 object-cover"
          src={image}
          alt={person}
        />
      </div>
      <div className="p-4">
        <h5 className="text-lg font-semibold text-gray-900 dark:text-white">
          {text}
        </h5>
        <p className="text-sm text-gray-700 dark:text-gray-400">{person}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
