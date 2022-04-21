import React from 'react';
// import ImageGalleryItem from "./ImageGalleryItem";

function ImageGallery(images) {
  return (
    <ul className="gallery">
      <li>
            {images.map((type) => (
                <img src={type.webformalURL} alt="" key={type.id}/>
            ))}
            </li>
    </ul>
  );
}

export default ImageGallery;