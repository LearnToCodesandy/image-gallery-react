import React, { useContext } from 'react';
import { CurrentImage } from '../context/CurrentImage';

const ImageSpace = () => {
  const [img, setImg] = useContext(CurrentImage);
  return (
    <div className="image__space">
      <img src={img.url} alt="not found!" />
      <div className="image__actions">
        <span className="btn">Delete</span>
        <span className="btn">Add to favorites</span>
      </div>
    </div>
  );
};

export default ImageSpace;
