import React, { Component } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Modal from './Modal';
import Loader from './Loader';
import { GlobalStyles } from 'styles';
import { Container } from '../styles';


export class App extends Component {
  state = {
    imageName: '',
    images: [],
    loading: false, 
    page: 1,
    showModal: false, 
    selectedImage: null,
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
    
    this.setState({ loading: true });

    return fetch(
      `https://pixabay.com/api/?q=${imageName}&page=${page}&key=26662147-37bf5d980befc030dc3511be2&image_type=photo&orientation=horizontal&per_page=6`)
      .then(res => {
        if (!res.ok) {
          throw Error(res.statusText);
        }
        return res.json();
      }).finally(() => this.setState({ loading: false }));
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
    this.setState({
      showModal: false,
      selectedImage: '',
    });
  };

  selectImage = largeImageURL => {
    this.setState({
      selectedImage: largeImageURL,
      showModal: true,
    });
  };

  render() {

    const { images, showModal, loading } = this.state;
    
    
    return (
      <Container>
        <Searchbar onSubmit={this.handleFormChange} />
        <ImageGallery images={images} onImgClick={this.selectImage} />
        
        {(images.length > 0) && <Button onClick={this.pageChange}></Button>}

        {loading && <Loader />}

        {showModal &&
        <Modal onClose={this.toggleModal}>
            <img src={this.state.selectedImage} alt="" />
          </Modal>}
        
        <GlobalStyles/>
      </Container>
    );
  }
}