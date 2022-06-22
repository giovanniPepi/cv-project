import React, { useState } from "react";
import { NoPrint } from "react-easy-print";

/* credits: https://stackoverflow.com/questions/43692479/how-to-upload-an-image-in-react-js */

const Imageuploader = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="uploadArea">
      <NoPrint>
        <h5 className="photoTitleWrapper">
          Photo <h5>(optional)</h5>
        </h5>
      </NoPrint>
      {selectedImage && (
        <div className="cvImgDiv">
          <img
            alt="CV"
            width={"100px"}
            className="cvImg"
            src={URL.createObjectURL(selectedImage)}
          />
          <NoPrint>
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
