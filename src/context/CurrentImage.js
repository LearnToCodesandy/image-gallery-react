import React, { useState, useEffect, createContext } from 'react';
import imagesData from '../data.js';
import { createClient } from 'pexels';

export const CurrentImage = createContext();
const client = createClient(
  '563492ad6f91700001000001d571512a469c43dbad086cb1c05a39a2'
);

export const CurrentProvider = (props) => {
  const [currentImage, setCurrentImage] = useState({
    id: 12345,
    url: 'https://www.pexels.com/photo/woman-in-orange-tank-top-holding-mirror-ball-11182735/',
    isFav: false,
  });

  useEffect(() => {
    async function getARandomPhoto() {
      const res = await client.photos.random();
      const data = {
        id: res.id,
        url: res.url,
        isFav: false,
      };
      setCurrentImage(data);
    }
    getARandomPhoto();
    // setCurrentImage(imagesData[2]);
  }, []);

  return (
    <CurrentImage.Provider value={[currentImage, setCurrentImage]}>
      {props.children}
    </CurrentImage.Provider>
  );
};
