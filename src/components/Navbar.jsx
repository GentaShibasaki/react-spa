import React, { useRef } from "react";
import "../styles/navbar.css";
import Upload from "./Upload";
import _ from "lodash";
//WIP
export default function Navbar(props) {
  const { currentView, onChangeCurrentView, onUploadPhoto } = props;
  const inputEl = useRef(null);

  const onChangeCurrentViewFunction = () => {
    onChangeCurrentView();
  };

  return (
    <div className="navbar">
      <input ref={inputEl} type="button" id="switchView" name="newPhoto" />
      <button onClick={onChangeCurrentViewFunction} className="switchButton">
        Home
      </button>
      <Upload onUploadPhoto={onUploadPhoto} />
    </div>
  );
}

//display the word "home"
//"home will be a link"
//to AllPhotos
//if link is clicked, currentView"s state is changed to AllPhotos
//<label for="file_upload">Upload</label>
//<input type="file" id="file_upload" name="file_upload" />
/* <a onClick={onChangeCurrentViewFunction}>Home</a> */
