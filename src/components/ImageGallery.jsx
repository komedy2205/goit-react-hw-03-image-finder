import React, { Component } from "react";
import ImageGalleryItem from './ImageGalleryItem'

class ImageGallery extends Component {
    
    
    render() {
    
        return (
            <>
                <ul className="gallery">
                    <ImageGalleryItem/>
                </ul>
            </>
        )
    }
}

export default ImageGallery;