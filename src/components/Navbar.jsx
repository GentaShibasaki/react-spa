import React from "react";
import "../styles/navbar.css";
import Upload from "./Upload";
import _ from "lodash";
import { useDispatch } from "react-redux";
import { changeView } from "../components/redux";

//WIP
export default function Navbar() {
  // const { onChangeCurrentView, onUploadPhoto } = props;

  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(changeView(true));
  };

  return (
    <div className="navbar">
      <h1 onClick={onClick} className="navbar-header">
        Home
      </h1>
      <Upload />
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
