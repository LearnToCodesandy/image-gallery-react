import React, { useState, useEffect, createContext } from 'react';
import imagesData from '../data.js';

export const ImagesContext = createContext();

export const ImagesProvider = (props) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages(imagesData);
  }, []);

  return (
    <ImagesContext.Provider value={[images, setImages]}>
      {props.children}
    </ImagesContext.Provider>
  );
};
