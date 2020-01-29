import React from "react";
import _ from "lodash";
import "../styles/upload.css";

export default function Upload(props) {
  const { onUploadPhoto } = props;
  return (
    <div className="file-upload">
      <label for="onUploadPhoto">Upload</label>
      <input type="file" id="onUploadPhoto" name="newPhoto" />
      <button className="uploadButton">Upload</button>
    </div>
  );
}

// <label for="uploadPhoto">Upload</label>

//output.push(file);
/* <output id="photos"></output>
<button id="uploadButton" onClick={onUploadPhoto(newPhoto)}> */
