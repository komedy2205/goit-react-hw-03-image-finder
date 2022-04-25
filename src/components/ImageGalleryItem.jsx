import React from "react";
import {ImageListItem} from '../styles'

const ImageGalleryItem = ({ images, onSelect }) => {
    
    return (
        <>
            {images.map((type) => (
                <ImageListItem key={type.id} onClick={() => onSelect(type.largeImageURL)}>
                    <img src={type.largeImageURL} alt={type.tags} />
                </ImageListItem>
        ))}
        </>
                       
        )
    };

export default ImageGalleryItem;
