import React, { useRef, setState } from "react";
import _ from "lodash";
import "../styles/upload.css";

export default function Upload(props) {
  const { onUploadPhoto } = props;
  const inputEl = useRef();
  const onButtonClick = () => {
    inputEl.current.focus();
  };

  const handleChange = e => {
    // console.log(typeof e.target.value);
    //const split = e.target.value.split("\\")[2];
    // console.log(`what is ${split}`);
    onUploadPhoto(e.target.files[0]);
  };

  return (
    <div className="file-upload">
      <input
        ref={inputEl}
        type="file"
        id="onUploadPhoto"
        name="newPhoto"
        onChange={e => {
          handleChange(e);
        }}
      />
      <button onClick={onButtonClick} className="uploadButton">
        Upload
      </button>
    </div>
  );
}
