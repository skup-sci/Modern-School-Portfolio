import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../LanguageContext.jsx';

const GalleryGrid = ({ images = [], previewCount = 6, onViewAll }) => {
  const { lang } = useLanguage();
  const isHindi = lang === 'hi';
  
  // If no images are provided, use default images
  const defaultImages = [
    '/images/Gallery1.jpg',
    '/images/Gallery2.jpg',
    '/images/Gallery3.jpg',
    '/images/Gallery4.jpg',
    '/images/Gallery5.jpg',
    '/images/Gallery1.jpg', // Reusing some images as defaults
  ];
  
  const displayImages = images.length > 0 ? images.slice(0, previewCount) : defaultImages;
  
  return (
    <div className="my-8">
      <h2 className="text-2xl font-semibold mb-4 flex items-center">
        <svg className="w-6 h-6 text-amber-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
        </svg>
        {isHindi ? 'गैलरी प्रीव्यू' : 'Gallery Preview'}
      </h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {displayImages.map((src, idx) => (
          <div key={idx} className="relative overflow-hidden rounded-lg shadow-md group">
            <img
              src={src}
              alt={`Gallery ${idx + 1}`}
              className="rounded object-cover w-full h-32 sm:h-40 md:h-32 lg:h-40 transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 text-center">
        {onViewAll ? (
          <button
            onClick={onViewAll}
            className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 py-2 rounded-md transition duration-200 flex items-center mx-auto"
          >
            {isHindi ? 'पूरी गैलरी देखें' : 'View Full Gallery'}
            <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </button>
        ) : (
          <Link 
            to="/gallery" 
            className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 py-2 rounded-md transition duration-200 flex items-center mx-auto"
          >
            {isHindi ? 'पूरी गैलरी देखें' : 'View Full Gallery'}
            <svg className="w-5 h-5 ml-1 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </Link>
        )}
      </div>
    </div>
  );
};

export default GalleryGrid;
