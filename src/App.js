import React, { useEffect, useContext } from 'react';
import Wrapper from './components/Wrapper';
import { ImagesContext } from './context/ImagesContext';
import imagesData from './data.js';

import { createClient } from 'pexels';
import './style.css';

const client = createClient(
  '563492ad6f91700001000001d571512a469c43dbad086cb1c05a39a2'
);
export default function App() {
  const userLogin = true;

  const [images, setImages] = useContext(ImagesContext);

  useEffect(() => {
    async function getImages() {
      const res = await client.photos.curated({ per_page: 5 });
      const filteredImgs = res.photos.map((image) => {
        return { id: image.id, url: image.src.original, isFav: false };
      });
      setImages([...filteredImgs, ...imagesData]);
    }
    window.addEventListener('scroll', (e) => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        console.log('reached the end!');
        // getImages();
      }
    });
  }, []);

  return <div className="container">{userLogin ? <Wrapper /> : ''}</div>;
}
