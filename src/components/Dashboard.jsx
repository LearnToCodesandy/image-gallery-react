import React, { useContext } from 'react';
import ImageGallery from './ImageGallery';
import { CurrentImage } from '../context/CurrentImage.js';

const Dashboard = () => {
  const [currentImage, setCurrentImage] = useContext(CurrentImage);
  return (
    <div className="dashboard__container">
      <h2 className="title">Dashboard</h2>
      <div className="random__image__container">
        <div className="img__container">
          {console.log(currentImage)}
          <img src={currentImage.url} alt="image for dashboard " />
        </div>
        <button className="random__img">Get Random Image </button>
      </div>

      <ImageGallery title={'Image Gallery'} />
    </div>
  );
};

export default Dashboard;
