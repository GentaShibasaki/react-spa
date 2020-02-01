import React, { useRef } from "react";
import _ from "lodash";
import "../styles/upload.css";
import { saveObject, listObjects } from "../utils/index";

const ALL_PHOTO_KEY = "allPhoto";

export default function Upload() {
  const inputEl = useRef();

  const onClickUpload = () => {
    inputEl.current.click();
  };

  const upload = async e => {
    saveObject(inputEl.current.files[0]);
    // const allPhotos = await listObjects();
    // localStorage.setItem(ALL_PHOTO_KEY, JSON.stringify(allPhotos));
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
