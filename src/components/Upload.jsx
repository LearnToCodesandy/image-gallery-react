import React, { useContext, useState } from "react";
import { ImagesContext } from "../context/ImagesContext";

const Upload = () => {
  // context
  const [images, setImages] = useContext(ImagesContext);
  const [toggleMess, setToggleMess] = useState(false);

  // handlers
  const addImage = (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const data = {
      isFav: false,
      id: Math.floor(Math.random() * 1000000000 + 1),
      url: fd.get("url")
    };
    const latestImages = [...images, data];
    setImages(latestImages);
    setToggleMess(true);
    setTimeout(() => setToggleMess(false), 1500);
    e.target.reset();
  };
  return (
    <>
      <h3 className="title">Upload</h3>
      <form className="upload__form" onSubmit={addImage}>
        <div className="form__item">
          <label htmlFor="url">Image Url</label>
          <input
            type="url"
            name="url"
            id="url"
            placeholder="https://images.unsplash.com/photo-1461696114087-397271a7aedc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          />
        </div>

        <input type="submit" value="add image" className="btn btn-danger" />
      </form>
      <p className={toggleMess ? "modalMessage" : "display-hide"}>
        Image added successfully!
      </p>
    </>
  );
};

export default Upload;
