import React from 'react';

function ImageGallery({images}) {
  return (
    <ul className="gallery">
        {images.map((type) => (
          <li key={type.id}>
            <img src={type.webformatURL} alt={type.tags} />
          </li>
        ))}
    </ul>
  );
}

export default ImageGallery;