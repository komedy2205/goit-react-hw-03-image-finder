import React from "react";

const ImageGalleryItem = ({ images }) => {
    
    return (
        <>
            {images.map((type) => (
                <li key={type.id}>
                    <img src={type.largeImageURL} alt="" />
                </li>
        ))}
        </>
                       
        )
    };

export default ImageGalleryItem;
