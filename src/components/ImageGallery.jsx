import React from "react";
import ImageCard from "./ImageCard";

const ImageGallery = ({ title, images }) => {
  return (
    <div className="favorite__image__gallery">
      <h3 className="title">{title}</h3>
      <div id="gallery">
        {images.map((image) => (
          <ImageCard
            image__url={image.url}
            image__id={image.id}
            key={image.id}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
