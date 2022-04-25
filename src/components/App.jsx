import React, { Component } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import ImageGalleryItem from "./ImageGalleryItem";
import Button from './Button';
import Modal from './Modal';
import { GlobalStyles } from 'styles';


export class App extends Component {
  state = {
    imageName: '',
    images: [],
    page: 1,
    showModal: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.imageName !== this.state.imageName) {
      const { imageName, page } = this.state;
      this.getImages(imageName, page)
        .then(image =>
          this.setState({
            images: [...image.hits],
            page: 1,
          })
        )
        .catch(this.showError);
    }

    if (prevState.page !== this.state.page) {
      const { imageName, page } = this.state;
      this.getImages(imageName, page)
        .then(image =>
          this.setState(prevState => ({
            images: [...prevState.images, ...image.hits],
          }))
        )
        .catch(this.showError);
    }
  };

  getImages = () => {
    const { imageName, page } = this.state;
    
    return fetch(
      `https://pixabay.com/api/?q=${imageName}&page=${page}&key=26662147-37bf5d980befc030dc3511be2&image_type=photo&orientation=horizontal&per_page=5`)
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

  pageChange = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };
  
  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {

    const { images, showModal } = this.state;
    
    
    return (
      <>
        <Searchbar onSubmit={this.handleFormChange} />
        <ImageGallery images={images} />
        {(images.length > 0) && <Button onClick={this.pageChange}></Button>}
        {showModal &&
          <Modal onClose={this.toggleModal}>
          <ImageGalleryItem images={images} />
        </Modal>}
        <GlobalStyles/>
      </>
    );
  }
}