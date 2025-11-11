import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { galleryImages } from '../assets/assets';

const Gallery = () => {
  return (
    <div className="flex flex-col items-center pt-28 md:pt-35 px-4 md:px-16 lg:px-24 pb-20">
      <h1 className="font-playfair text-4xl md:text-[40px] font-bold text-center mb-12">
        Our Gallery
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-full max-w-6xl">
        {galleryImages.map((image) => (
          <div
            key={image.id}
            className="flex flex-col items-center text-center cursor-pointer"
          >
            <div className="relative w-full h-64 overflow-hidden rounded-xl shadow-lg">
              <LazyLoadImage
                src={image.src}
                alt={image.caption}
                effect="blur"
                className="w-full h-full object-cover transition-transform duration-300"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
