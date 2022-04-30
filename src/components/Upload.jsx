import React, { useContext } from 'react';
import { ImagesContext } from '../context/ImagesContext';

const Upload = () => {
  // context
  const [images, setImages] = useContext(ImagesContext);

  // handlers
  const addImage = (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const data = {
      isFav: false,
      id: Math.floor(Math.random() * 1000000000 + 1),
      url: fd.get('url'),
    };
    const latestImages = [data, ...images];
    setImages(latestImages);
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
    </>
  );
};

export default Upload;
