import React, {Component} from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';

export class App extends Component {
  state = {
    imageName: '',
  }
  
 

  handleFormSubmit = imageName => {
    this.setState({
      imageName
    });
  }
  
  render(){
  return (
    <>
      <Searchbar searchSubmit={ this.handleFormSubmit }/>
      <ImageGallery imageName={ this.state.imageName }/>
      
    </>
  );
  }
};
