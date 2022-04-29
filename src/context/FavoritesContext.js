import React, { useEffect, useState, createContext } from 'react';
import imagesData from '../data.js';
export const FavoritesContext = createContext();

export const FavoritesProvider = (props) => {
  const [favs, setFavs] = useState([]);

  useEffect(() => {
    const imgs = imagesData.filter((image) => {
      if (image.isFav) {
        return image;
      }
    });
    setFavs(imgs);
  }, []);

  return (
    <FavoritesContext.Provider value={[favs, setFavs]}>
      {props.children}
    </FavoritesContext.Provider>
  );
};
