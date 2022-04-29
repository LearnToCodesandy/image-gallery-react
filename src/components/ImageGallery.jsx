import React, { useContext } from 'react';
import ImageCard from './ImageCard';
import { ImagesContext } from '../context/ImagesContext.js';

const ImageGallery = ({ title }) => {
  const [images, setImages] = useContext(ImagesContext);

  return (
    <div className="favorite__image__gallery">
      <h3 className="title">{title}</h3>
      <div id="gallery">
        {images.map((image) => (
          <ImageCard
            image__url={image.url}
            image__id={Math.random()}
            key={Math.random()}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
