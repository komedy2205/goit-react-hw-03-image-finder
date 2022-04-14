import React, { Component } from "react";

class ImageGalleryItem extends Component {
       



    render() {

        const { imageName } = this.props;

        return (
            <>
                <h1>ImageGalleryItem</h1>
                <li className="gallery-item">
                    <p>{imageName}</p>
                    {/* <img src={imageName.hits.webformatURL} alt="searchingPhoto" /> */}
                </li>
            </>
        )
    }
}

export default ImageGalleryItem;
