import React, { useContext } from 'react';
import ImageGallery from './ImageGallery';
import { CurrentImage } from '../context/CurrentImage.js';
import { createClient } from 'pexels';
import { ImagesContext } from '../context/ImagesContext.js';

const client = createClient(
  '563492ad6f91700001000001d571512a469c43dbad086cb1c05a39a2'
);

const Dashboard = () => {
  const [currentImage, setCurrentImage] = useContext(CurrentImage);
  const [images, setImages] = useContext(ImagesContext);

  // handlers
  const changeCurrentImage = () => {
    async function getARandomPhoto() {
      const res = await client.photos.random();
      const data = {
        id: res.id,
        url: res.src.medium,
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
          <img src={currentImage.url} alt="image for dashboard " />
        </div>
        <button className="random__img" onClick={changeCurrentImage}>
          Get Random Image{' '}
        </button>
      </div>

      <ImageGallery
        title={'Image Gallery'}
        images={images}
        setImages={setImages}
      />
    </div>
  );
};

export default Dashboard;
