import React, { Component } from "react";

class ImageGalleryItem extends Component {
    
    state = {
        image: null,
    }
    
    componentDidMount() {
        fetch('https://pixabay.com/api/?q=cat&page=1&key=26662147-37bf5d980befc030dc3511be2&image_type=photo&orientation=horizontal&per_page=12')
            .then(res => {
                if (!res.ok) {
                    throw new Error(res.status);
                }
                return res.json();
                })
                .then(image => this.setState({ image }))
                .catch(error => {
                    'Sorry, something went wrong';
                });
    }


    render() {

        const { image } = this.state;


        return (
            <>
                {image && <li className="gallery-item">
                    <p>{image.hits.tags}</p>
                    <img src="{image.hits.webformatURL}" alt="searchingPhoto" />
                </li>}
            </>
        )
    }
}

export default ImageGalleryItem;
