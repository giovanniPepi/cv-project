import React, { useState } from "react";

/* credits: https://stackoverflow.com/questions/43692479/how-to-upload-an-image-in-react-js */

const Imageuploader = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="uploadArea">
      <h5 className="photoTitleWrapper">
        Photo <h5>(optional)</h5>
      </h5>
      {selectedImage && (
        <div className="cvImgDiv">
          <img
            alt="CV"
            width={"100px"}
            className="cvImg"
            src={URL.createObjectURL(selectedImage)}
          />
          <div className="removeWrapper">
            <button
              className="formBtn"
              onClick={() => {
                setSelectedImage(null);
              }}
            >
              Remove
            </button>
          </div>
        </div>
      )}
      <input
        className="imgInpt"
        type="file"
        name="cvImg"
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
        }}
      />
    </div>
  );
};

export default Imageuploader;
