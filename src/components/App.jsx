import React, {Component} from 'react';
// import Searchbar from './Searchbar';
// import ImageGallery from './ImageGallery';

export class App extends Component {
  state = {
    imageName: '',
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevProps.imageName !== this.state.imageName) {
  //   }
  // }
  
  handleChangeName = event => {
        this.setState({ imageName: event.currentTarget.value.toLowerCase() });
    }

  handleSubmit = event => {
    event.preventDefault();

      if (this.state.imageName.trim() === '') {
        return alert('Введите критерий поиска изображения');
      }
    // this.onSubmit(this.state.imageName);
    this.setState({ imageName: '' });
    
      fetch(`https://pixabay.com/api/?key=26662147-37bf5d980befc030dc3511be2&q=${this.state.imageName}`)
        .then(res => res.json())
        .then(this.showData);
        
  }

  showData(data) {
    console.log(data);

    const imageItem = `<li>
      <img src="${data.hits.webformatURL}" alt="" />
    </li>`

    console.log(imageItem);
  }


  handleFormSubmit = imageName => {
    this.setState({
      imageName,
      currentPage: 1,
      error: null,
    });
  }
  
  render(){
  return (
    <>
      <header className="searchbar">
                <form className="form" onSubmit={this.handleSubmit}>
                    <input
                        className="input"
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        onChange={this.handleChangeName}
                        value={this.state.imageName}
                        />
                        
                    <button type="submit" className="button">
                        <span className="button-label">Search</span>
                    </button>

                </form>
            </header>
      <ul className="gallery">
                    <h1>Images</h1>
                    <img src="{image.hits.webformatUrl}" alt="" />
                </ul>
    </>
  );
  }
};
