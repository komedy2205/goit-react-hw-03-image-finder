import React from 'react';
import ImageGalleryItem from "./ImageGalleryItem";

function ImageGallery({images}) {
  return (
    <ul className="gallery">
        {images.map((type) => (
          <ImageGalleryItem key={type.id} smallURL={type.webformatURL}/>
        ))}
    </ul>
  );
}

export default ImageGallery;