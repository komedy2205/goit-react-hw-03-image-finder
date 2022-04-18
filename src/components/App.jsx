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
    
    fetch(`https://pixabay.com/api/?q=${this.state.imageName}&page=1&key=26662147-37bf5d980befc030dc3511be2&image_type=photo&orientation=horizontal&per_page=12`)
      
        .then(res => {
          if (!res.ok) {
            throw Error(res.statusText)
          }
          return res.json();
        })
        .then(this.showData).catch(this.showError);
        
  }

  showError() {
    alert('Something went wrong');
  }

  showData(data) {
    console.log(data.hits);
    
    const imageItem = data.hits.map(el =>
      `<li>
      <img src="${el.webformatURL}}" alt="" />
      </li>`
      );
      
    return imageItem;
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
