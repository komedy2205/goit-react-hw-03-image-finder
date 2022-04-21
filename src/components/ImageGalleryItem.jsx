import React from "react";

const ImageGalleryItem = ({ smallURL }) => {
    
    return (
        <li>
            <img src={smallURL} alt="card" />
        </li>
                       
        )
    };

export default ImageGalleryItem;
