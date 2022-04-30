import React, { useState, useEffect, createContext } from 'react';
import imagesData from '../data.js';
import { createClient } from 'pexels';

const client = createClient(
  '563492ad6f91700001000001d571512a469c43dbad086cb1c05a39a2'
);

export const ImagesContext = createContext();

export const ImagesProvider = (props) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function getImages() {
      const res = await client.photos.curated({ per_page: 5 });
      const filteredImgs = res.photos.map((image) => {
        return { id: image.id, url: image.src.original, isFav: false };
      });
      setImages([...filteredImgs, ...imagesData]);
    }
    getImages();
  }, []);

  return (
    <ImagesContext.Provider value={[images, setImages]}>
      {props.children}
    </ImagesContext.Provider>
  );
};
