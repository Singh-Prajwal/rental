// src/components/details/ImageGallery.tsx
import React from 'react';

interface ImageGalleryProps {
  images: string[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  if (!images || images.length === 0) {
    return <div className="h-96 bg-gray-200 rounded-xl"></div>;
  }
  
  const [mainImage, ...otherImages] = images;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-h-[500px] overflow-hidden rounded-xl">
      {/* Main Image */}
      <div className="h-full">
        <img src={mainImage} alt="Main view of the property" className="h-full w-full object-cover cursor-pointer" />
      </div>
      {/* Other Images */}
      <div className="hidden md:grid grid-cols-2 gap-2">
        {otherImages.slice(0, 4).map((img, index) => (
          <div key={index} className="h-full">
            <img src={img} alt={`View ${index + 2}`} className="h-full w-full object-cover cursor-pointer" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;