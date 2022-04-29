import React, { useContext } from 'react';
import ImageGallery from './ImageGallery';
import { CurrentImage } from '../context/CurrentImage.js';
import { createClient } from 'pexels';

const client = createClient(
  '563492ad6f91700001000001d571512a469c43dbad086cb1c05a39a2'
);

const Dashboard = () => {
  const [currentImage, setCurrentImage] = useContext(CurrentImage);

  // handlers
  const changeCurrentImage = () => {
    async function getARandomPhoto() {
      const res = await client.photos.random();
      const data = {
        id: res.id,
        url: res.src.landscape,
        isFav: false,
      };
      setCurrentImage(data);
    }
    getARandomPhoto();
  };
  return (
    <div className="dashboard__container">
      <h2 className="title">Dashboard</h2>
      <div className="random__image__container">
        <div className="img__container">
          {console.log(currentImage)}
          <img src={currentImage.url} alt="image for dashboard " />
        </div>
        <button className="random__img" onClick={changeCurrentImage}>
          Get Random Image{' '}
        </button>
      </div>

      <ImageGallery title={'Image Gallery'} />
    </div>
  );
};

export default Dashboard;
