import React, { useContext, useState } from "react";
import ImageGallery from "./ImageGallery";
import { CurrentImage } from "../context/CurrentImage.js";
import { createClient } from "pexels";
import { ImagesContext } from "../context/ImagesContext.js";

const client = createClient(
  "563492ad6f91700001000001d571512a469c43dbad086cb1c05a39a2"
);

const Dashboard = () => {
  const [currentImage, setCurrentImage] = useContext(CurrentImage);
  const [images, setImages] = useContext(ImagesContext);
  const [pageCount, setPageCount] = useState(1);
  const [toggle, setToggle] = useState(false);

  // handlers
  const changeCurrentImage = () => {
    async function getARandomPhoto() {
      const res = await client.photos.random();
      const data = {
        id: res.id,
        url: res.src.landscape,
        isFav: false
      };
      setCurrentImage(data);
    }
    getARandomPhoto();
  };

  const loadMore = () => {
    async function getImages() {
      const res = await client.photos.curated({ page: pageCount, per_page: 7 });
      if (res.next_page) {
        const filteredImgs = res.photos.map((image) => {
          return { id: image.id, url: image.src.original, isFav: false };
        });
        setPageCount(pageCount + 1);
        setImages([...images, ...filteredImgs]);
      } else {
        setToggle(true);
        setTimeout(() => {
          setToggle(false);
        }, 1000);
      }
    }
    getImages();
  };

  return (
    <div className="dashboard__container">
      <h2 className="title">Dashboard</h2>
      <div className="random__image__container">
        <div className="img__container">
          <img src={currentImage.url} alt="dashboard" />
        </div>
        <button className="random__img" onClick={changeCurrentImage}>
          Get Random Image{" "}
        </button>
      </div>

      <ImageGallery
        title={"Image Gallery"}
        images={images}
        setImages={setImages}
      />
      <button className="btn btn-primary-outlined" onClick={loadMore}>
        Load more
      </button>
      <p className={toggle ? "modalMessage" : "display-hide"}>
        Yo! you have reached the end!
      </p>
    </div>
  );
};

export default Dashboard;
