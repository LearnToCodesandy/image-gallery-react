import React, { useState, useEffect, createContext } from 'react';
import { createClient } from 'pexels';

export const CurrentImage = createContext();
const client = createClient(
  '563492ad6f91700001000001d571512a469c43dbad086cb1c05a39a2'
);

export const CurrentProvider = (props) => {
  const [currentImage, setCurrentImage] = useState({
    id: 12345,
    url: 'https://images.pexels.com/photos/11143927/pexels-photo-11143927.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    isFav: false,
  });

  useEffect(() => {
    async function getARandomPhoto() {
      const res = await client.photos.random();
      const data = {
        id: res.id,
        url: res.src.landscape,
        isFav: false,
      };
      setCurrentImage(data);
    }
    getARandomPhoto();
  }, []);

  return (
    <CurrentImage.Provider value={[currentImage, setCurrentImage]}>
      {props.children}
    </CurrentImage.Provider>
  );
};
