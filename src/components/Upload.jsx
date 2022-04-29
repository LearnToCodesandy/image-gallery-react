import React from 'react';

const Upload = () => {
  return (
    <>
      <h3 className="title">Upload</h3>
      <form className="upload__form">
        <div className="form__item">
          <label htmlFor="url">Image Url</label>
          <input
            type="url"
            name="url"
            id="url"
            placeholder="https://images.unsplash.com/photo-1461696114087-397271a7aedc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          />
        </div>

        <div className="form__item">
          <label htmlFor="submit__btn">
            <svg
              clip-rule="evenodd"
              fill-rule="evenodd"
              stroke-linejoin="round"
              stroke-miterlimit="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m12.002 2c5.518 0 9.998 4.48 9.998 9.998 0 5.517-4.48 9.997-9.998 9.997-5.517 0-9.997-4.48-9.997-9.997 0-5.518 4.48-9.998 9.997-9.998zm-.747 9.25h-3.5c-.414 0-.75.336-.75.75s.336.75.75.75h3.5v3.5c0 .414.336.75.75.75s.75-.336.75-.75v-3.5h3.5c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-3.5v-3.5c0-.414-.336-.75-.75-.75s-.75.336-.75.75z"
                fill-rule="nonzero"
              />
            </svg>
          </label>
          <input type="submit" value="submit__btn" className="display-hide" />
        </div>
      </form>
    </>
  );
};

export default Upload;
