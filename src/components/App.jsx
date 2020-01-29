import React, { useState, useEffect } from "react";
import "../styles/styles.css";
import Navbar from "./Navbar";
import AllPhotos from "./AllPhotos";
import { listObjects, getSingleObject } from "../utils/index";
import "react-photo-gallery";

export default function App() {
  // const { currentView, photos, selectedPhoto } = props;
  const [currentView, setCurrentView] = useState("nothing");
  const [photos, setPhotos] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState("");

  const changeCurrentView = e => {
    e.preventDefault();
    if (currentView) {
      setCurrentView("AllPhotos");
    }
  };

  const fileFunction = e => {
    let files = e.target.files;
    let output = [];
    output.push(files);
  };

  const uploadPhoto = newPhoto => {
    setPhotos([...photos, newPhoto]);
  };

  const getPhotos = async () => {
    const photoObjects = await listObjects();
    console.log(photoObjects);
    const photoBase6Strings = await Promise.all(
      photoObjects.map(async photoObject => {
        let tmp = await getSingleObject(photoObject.Key);
        return `data:image/png;base64, ${tmp}`;
      })
    );
    setPhotos(photoBase6Strings);
  };

  useEffect(() => {
    getPhotos();
  }, []);

  return (
    <div className="app">
      <Navbar
        currentView={currentView}
        onChangeCurrentView={changeCurrentView}
        onUploadPhoto={uploadPhoto}
      />
      {photos.map(photo => (
        <AllPhotos photo={photo} />
      ))}
    </div>
  );
}
