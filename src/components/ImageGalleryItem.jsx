import React from "react";

const ImageGalleryItem = ({option}) => {
    
        return (
        <li>
            {option.map((type) => (
                <img src={type.webformalURL} alt="" key={type.id}/>
            ))}
            </li>
        )
    };

export default ImageGalleryItem;
