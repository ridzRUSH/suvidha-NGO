import React, { useEffect, useRef } from "react";
import image1 from "../assets/img-1.jpg";
import image2 from "../assets/img-2.jpg";

const HorizontalGallery = () => {
  const galleryRef = useRef(null);

  useEffect(() => {
    // Automatically scroll the gallery horizontally
    const intervalId = setInterval(() => {
      if (galleryRef.current) {
        galleryRef.current.scrollLeft += galleryRef.current.offsetWidth; // Scroll by the width of one image
      }
    }, 2000); // Adjust scrolling interval as needed

    // Cleanup function to clear the interval when component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      id="controls-carousel"
      className="relative w-full"
      data-carousel="static"
    >
      {/* Carousel wrapper */}
      <div
        className="relative h-56 overflow-hidden rounded-lg md:h-96"
        ref={galleryRef}
      >
        {/* Item 1 */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src={image1}
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="Image 1"
          />
        </div>
        {/* Item 2 */}
        <div
          className="hidden duration-700 ease-in-out"
          data-carousel-item="active"
        >
          <img
            src={image2}
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="Image 2"
          />
        </div>
        {/* Add more items as needed */}
      </div>
      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default HorizontalGallery;
