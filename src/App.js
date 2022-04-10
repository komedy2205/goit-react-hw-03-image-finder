import React, { Component } from 'react';
// import Searchbar from './components/Searchbar';
// import ImageGallery from './components/ImageGallery'
// import ImageGalleryItem from './components/ImageGalleryItem';
// import Loader from './components/Loader';
// import Button from './components/Button';
// import Modal from './components/Modal';
// import GlobalStyle from './styles';
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
// import { Rings } from  'react-loader-spinner'

class imageFinder extends Component {
  state = {
    image: null,
  }
  
  componentDidMount() {
    fetch('https://pixabay.com/api/?q=cat&page=1&key=26662147-37bf5d980befc030dc3511be2&image_type=photo&orientation=horizontal&per_page=12')
      .then(res => res.json())
      .then(console.log);
  }

  // deleteContact = (contactId) => {
  //   this.setState(prevState => ({
  //     contacts: prevState.contacts.filter(contact => contact.id !== contactId),
  //   }));
  // };

  // addContact = (name, number) => {
  //   const contact = {
  //     id: nanoid(),
  //     name,
  //     number,
  //   };

  //   for (const contact of this.state.contacts) {
  //     if (name === contact.name) {
  //       alert(`${name} is allready in contacts`)
  //       return
  //     }
  //   }
    
  //   this.setState(prevState => ({
  //     contacts: [contact, ...prevState.contacts],
  //   }));
        
  // };

  // formSubmitHandler = ({name,number}) => {
  //   this.addContact(name,number);
  // };

  // changeFilter = (e) => {
  //   this.setState({ filter: e.currentTarget.value });
  // };

  // getRealContacts = () => {
  //   const {contacts, filter } = this.state;
    
  //   const normalizedFilter = filter.toLowerCase();
  //   return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter),
  //   );

    
  // }

  render() {

    const { image } = this.state;

    return (
      // <GlobalStyle>
      //   <>
      //     <Searchbar/>
      //     <ImageGallery/>
      //     <ImageGalleryItem/>
      //     <Loader/>
      //     <Button/>
      //     <Modal/>
      //   </>
      // </GlobalStyle>
      <div>
        {image && (<div>'Картинка'</div>)}
      </div>
    )
  }
}

export default imageFinder;
