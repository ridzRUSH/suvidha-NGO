const TestomonialCard = ({ text, person, image }) => {
  return (
    <>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <img className="rounded-t-lg" src={image} alt={person} />

        <div className="p-5">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {text}
          </h5>

          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {person}
          </p>
        </div>
      </div>
    </>
  );
};

export default TestomonialCard;
