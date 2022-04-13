import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';

export const App = () => {
  return (
    <>
      <Searchbar searchSubmit={ (imageName) => {console.log(imageName)}}/>
      <ImageGallery/>
    </>
  );
};
