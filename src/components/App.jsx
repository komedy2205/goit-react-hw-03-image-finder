import React, { Component } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';

export class App extends Component {
  state = {
    imageName: '',
    images: [],
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.imageName !== this.state.imageName) {
      this.getImages()
        .then(image =>
          this.setState(prevState => ({
            images: [...prevState.images, ...image.hits],
          }))
        )
        .catch(this.showError);
    }
  };

  getImages = () => {
    let page = 1;

    return fetch(
      `https://pixabay.com/api/?q=${this.state.imageName}&page=${page}&key=26662147-37bf5d980befc030dc3511be2&image_type=photo&orientation=horizontal&per_page=5`)
      .then(res => {
      if (!res.ok) {
        throw Error(res.statusText);
      }
      return res.json();
    });
  };

  handleFormChange = data => {
    this.setState({
      imageName: data,
      images: [],
    });
  };

  render() {

    const { images } = this.state;
    
    
    return (
      <>
        <Searchbar onSubmit={this.handleFormChange} />
        <ImageGallery images={images} />
        {images !== [] && <Button/>}
      </>
    );
  }
}