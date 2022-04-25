import React from 'react';
import {ImageList, ImageListItemImage} from '../styles'

function ImageGallery({images}) {
  return (
    <ImageList >
        {images.map((type) => (
          <ImageListItemImage key={type.id}>
            <img src={type.webformatURL} alt={type.tags}   height="240px" />
          </ImageListItemImage>
        ))}
    </ImageList>
  );
}

export default ImageGallery;