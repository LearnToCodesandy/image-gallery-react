import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CurrentImage } from "../context/CurrentImage";
import { ImagesContext } from "../context/ImagesContext";

const ImageCard = ({ image__url, image__id }) => {
  const [currentImage, setCurrentImage] = useContext(CurrentImage);
  const [images, setImages] = useContext(ImagesContext);
  const [id, setId] = useState(currentImage.id);

  // handler
  const handleCurrentImg = () => {
    setId(image__id);
    const filtered__img = images.filter((image) => {
      if (image.id === image__id) {
        return image;
      } else {
        return null;
      }
    });
    setCurrentImage(filtered__img[0]);
  };
  return (
    <div className="image__card">
      <Link to={"/images/" + id}>
        <img src={image__url} alt="card" onClick={handleCurrentImg} />
      </Link>
      <span className="display-hide">{image__id}</span>
    </div>
  );
};

export default ImageCard;
