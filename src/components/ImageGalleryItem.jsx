import React from "react";
import {Item, Image} from '../styles'

const ImageGalleryItem = ({ webformatURL, largeImageURL, selectImage }) => {
    
 
    return (
    <Item onClick={() => selectImage(largeImageURL)}>
      <Image src={webformatURL} alt="" />
    </Item>
  );
    };

export default ImageGalleryItem;

