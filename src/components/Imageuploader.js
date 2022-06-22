import React, { useState } from "react";
import { NoPrint } from "react-easy-print";

/* credits: https://stackoverflow.com/questions/43692479/how-to-upload-an-image-in-react-js */

const Imageuploader = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="uploadArea">
      <NoPrint>
        <h4>Cover photo (or leave it blank)</h4>
      </NoPrint>
      {selectedImage && (
        <div className="cvImgDiv">
          <img
            alt="CV"
            width={"300px"}
            className="cvImg"
            src={URL.createObjectURL(selectedImage)}
          />
          <NoPrint>
            <button
              className="formBtn"
              onClick={() => {
                setSelectedImage(null);
              }}
            >
              Remove
            </button>
          </NoPrint>
        </div>
      )}
      <NoPrint>
        <input
          type="file"
          name="cvImg"
          onChange={(event) => {
            console.log(event.target.files[0]);
            setSelectedImage(event.target.files[0]);
          }}
        />
      </NoPrint>
    </div>
  );
};

export default Imageuploader;
