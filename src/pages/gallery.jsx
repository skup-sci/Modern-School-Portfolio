import React from 'react';
import GalleryGrid from '../components/GalleryGrid';

const Gallery = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6 text-center">Gallery</h1>
      <GalleryGrid />
    </section>
  );
};

export default Gallery;
