import React, { Suspense } from 'react';
const ImageCard = React.lazy(() => import('./ImageCard.jsx'));

const ImageGallery = ({ title, images }) => {
  return (
    <div className="favorite__image__gallery">
      <h3 className="title">{title}</h3>
      <div id="gallery">
        {images.map((image) => (
          <Suspense fallback={<div>Loading</div>}>
            <ImageCard
              image__url={image.url}
              image__id={image.id}
              key={Math.random()}
            />
          </Suspense>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
