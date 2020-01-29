import React from "react";
import "../styles/navbar.css";
import Upload from "./Upload";
import _ from "lodash";

export default function Navbar(props) {
  const { currentView, onChangeCurrentView, onUploadPhoto } = props;

  return (
    <div className="navbar">
      <a href={onChangeCurrentView}>Home</a>
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
