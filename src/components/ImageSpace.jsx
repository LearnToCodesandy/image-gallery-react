import React, { useContext } from "react";
import { CurrentImage } from "../context/CurrentImage";
import { ImagesContext } from "../context/ImagesContext";
import { FavoritesContext } from "../context/FavoritesContext";
import { useNavigate } from "react-router-dom";

const ImageSpace = () => {
  const [images, setImages] = useContext(ImagesContext);
  const [img, setImg] = useContext(CurrentImage);
  const navigate = useNavigate();

  const [favs, setFavs] = useContext(FavoritesContext);

  // handlers
  const deleteSpace = (id) => {
    const deleted__images = images.filter((image) => id !== image.id && image);
    setImages(deleted__images);
    const re__filter = deleted__images.filter((image) => image.isFav && image);
    setFavs([...re__filter]);
    navigate("/", { replace: true });
  };
  const addToFav = (id) => {
    const filtered__ims = images.filter((ims) => {
      if (ims.id === id) {
        ims.isFav = !ims.isFav;
      }
      return ims;
    });
    const re__filter = filtered__ims.filter((image) => image.isFav && image);
    setFavs([...re__filter]);
    navigate("/favorites", { replace: true });
  };

  return (
    <div className="image__space">
      <img src={img.url} alt="not found!" />
      <div className="image__actions">
        <span className="btn" onClick={() => deleteSpace(img.id)}>
          Delete
        </span>
        <span className="btn" onClick={() => addToFav(img.id)}>
          {img.isFav ? "Remove from favorites" : "Add to favorites"}
        </span>
      </div>
    </div>
  );
};

export default ImageSpace;
