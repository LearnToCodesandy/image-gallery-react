import React, { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import ImageCard from "./ImageCard";

const Favorites = () => {
  const [favs, setFavs] = useContext(FavoritesContext);

  return (
    <div className="favorite__image__gallery">
      <h3 className="title">Favorites</h3>
      <div id="gallery">
        {favs.map((image) => (
          <ImageCard
            image__url={image.url}
            image__id={image.id}
            key={Math.random()}
          />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
