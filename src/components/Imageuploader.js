import React, { useState } from "react";
import { NoPrint } from "react-easy-print";

/* credits: https://stackoverflow.com/questions/43692479/how-to-upload-an-image-in-react-js */

const Imageuploader = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="uploadArea">
      <NoPrint>
        <h4>You can upload a cover photo or leave it blank</h4>
      </NoPrint>
      {selectedImage && (
        <div>
          <img
            alt="CV"
            width={"300px"}
            className="cvImg"
            src={URL.createObjectURL(selectedImage)}
          />
          <br />
          <NoPrint>
            <button
              onClick={() => {
                setSelectedImage(null);
              }}
            >
              Remove
            </button>
          </NoPrint>
        </div>
      )}
      <br />

      <br />
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
