import React from 'react';
import ImageGalleryItem from './ImageGalleryItem';
import {ImageList, Image, Item} from '../styles'

function ImageGallery({images}) {
  return (
    <ImageList >
        {images.map((type) => (
          <ImageGalleryItem key={type.id} webformatURL={type.webformatURL } largeImageURL={type.largeImageURL }>
            <Item>
              <Image src={type.webformatURL} alt={type.tags} height="240px" />
            </Item>
          </ImageGalleryItem>
        ))}
    </ImageList>
  );
}

export default ImageGallery;
