import React, { useRef } from "react";
import _ from "lodash";
import "../styles/upload.css";
import { saveObject } from "../utils/index";

export default function Upload() {
  const inputEl = useRef();

  const onClickUpload = () => {
    inputEl.current.click();
  };

  const upload = e => {
    saveObject(inputEl.current.files[0]);
  };

  return (
    <div className="file-upload">
      <input
        ref={inputEl}
        type="file"
        id="onUploadPhoto"
        name="newPhoto"
        onChange={e => upload(e)}
      />
      <button onClick={onClickUpload} className="button">
        Upload
      </button>
    </div>
  );
}
