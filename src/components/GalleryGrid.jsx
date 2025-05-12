import React from 'react';

const GalleryGrid = ({ images = [], previewCount = 6, onViewAll }) => {
  const previewImages = images.slice(0, previewCount);
  return (
    <div className="my-8">
      <h2 className="text-2xl font-semibold mb-4">Gallery Preview</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {previewImages.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Gallery ${idx + 1}`}
            className="rounded shadow object-cover w-full h-32 sm:h-40 md:h-32 lg:h-40"
          />
        ))}
      </div>
      {onViewAll && (
        <div className="mt-4 text-center">
          <button
            onClick={onViewAll}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-2 rounded"
          >
            View Full Gallery
          </button>
        </div>
      )}
    </div>
  );
};

export default GalleryGrid;
