import React, { Component } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';

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
    return fetch(
      `https://pixabay.com/api/?q=${this.state.imageName}&page=1&key=26662147-37bf5d980befc030dc3511be2&image_type=photo&orientation=horizontal&per_page=12`
    ).then(res => {
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
    return (
      <>
        <Searchbar onSubmit={this.handleFormChange} />
        <ImageGallery images={this.state.images} />
      </>
    );
  }
}