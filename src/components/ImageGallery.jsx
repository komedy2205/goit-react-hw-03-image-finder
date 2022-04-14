import React, { Component } from "react";
import ImageGalleryItem from './ImageGalleryItem'

class ImageGallery extends Component {
        
    state = {
        image: null,
    }
    
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.imageName !== this.props.imageName) {
            fetch(`https://pixabay.com/api/?q=${this.props.imageName}&page=1&key=26662147-37bf5d980befc030dc3511be2&image_type=photo&orientation=horizontal&per_page=12`)
                .then(res => res.json())
                .then(image => this.setState({image}));
        }
    }

   
    render() {

            const { image } = this.props;

        return (
            <>
                <ul className="gallery">
                    <h1>Images</h1>
                    {image &&
                        <img src="{image.hits.webformatUrl}" alt="" />}
                </ul>
            </>
        )
    }
}

export default ImageGallery;