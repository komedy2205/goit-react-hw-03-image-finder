import React, { Component } from "react";
import ImageGalleryItem from "./ImageGalleryItem";

class ImageGallery extends Component {
    state = {
        imageData: {},
    }
    

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.imageName !== this.props.imageName) {

      fetch(`https://pixabay.com/api/?q=${this.props.imageName}&page=1&key=26662147-37bf5d980befc030dc3511be2&image_type=photo&orientation=horizontal&per_page=12`)
      
        .then(res => {
          if (!res.ok) {
            throw Error(res.statusText)
          }
          return res.json();
        })
          .then(image => this.setState({ imageData: image.hits }))
          .catch(this.showError);
    }
    }
    
    showError() {
        alert('Something went wrong');
    }
    
    render() {

        const { imageData } = this.state;
        
        return (
            <ul className="gallery">
                <ImageGalleryItem option={imageData} />
            </ul>
        )
    }
}

export default ImageGallery;