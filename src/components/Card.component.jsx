const Card = ({ title, text }) => {
  return (
    <>
      <div className="block max-w-sm p-6 bg-green-400 border border-green-200 rounded-lg shadow hover:bg-green-500 dark:bg-green-800 dark:border-green-700 dark:hover:bg-green-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-green-900 dark:text-white">
          {title}
        </h5>
        <p className="font-normal text-green-700 dark:text-green-400">{text}</p>
      </div>
    </>
  );
};

export default Card;
