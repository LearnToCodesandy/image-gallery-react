import React from 'react';
import { Link } from 'react-router-dom';

const ImageCard = ({ image__url, image__id }) => {
  return (
    <div className="image__card">
      <Link to="/images/:id">
        <img src={image__url} />
      </Link>
      <span className="display-hide">{image__id}</span>
    </div>
  );
};

export default ImageCard;
