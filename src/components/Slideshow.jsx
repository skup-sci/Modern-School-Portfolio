import React, { useState, useEffect } from 'react';

const images = [
  '/images/Gallery1.jpg',
  '/images/Gallery2.jpg',
  '/images/Gallery3.jpg',
  '/images/Gallery4.jpg',
  '/images/Gallery5.jpg',
];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-56 sm:h-72 md:h-96 rounded-lg overflow-hidden shadow-lg">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index + 1}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-gray-400'
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      <div className="absolute top-0 left-0 w-full h-full flex">
        <button 
          onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)}
          className="w-12 h-full flex items-center justify-center bg-black bg-opacity-0 hover:bg-opacity-20 transition-opacity focus:outline-none"
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="flex-grow"></div>
        <button 
          onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)}
          className="w-12 h-full flex items-center justify-center bg-black bg-opacity-0 hover:bg-opacity-20 transition-opacity focus:outline-none"
          aria-label="Next slide"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Slideshow;
