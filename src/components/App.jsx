import React, { useState, useEffect } from "react";
import "../styles/styles.css";
import Navbar from "./Navbar";
import AllPhotos from "./AllPhotos";
import SinglePhoto from "./SinglePhoto";
import { listObjects, getSingleObject, saveObject } from "../utils/index";

export default function App() {
  // const { currentView, photos, selectedPhoto } = props;
  const [currentView, setCurrentView] = useState("AllPhotos");
  const [photos, setPhotos] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState("");

  const callChangeViewAndSelectedPhoto = newSelectedPhoto => {
    changeCurrentView();
    changeSelectedPhoto(newSelectedPhoto);
  };
  const changeCurrentView = e => {
    if (setCurrentView === "AllPhotos") {
      setCurrentView("SinglePhoto");
    } else {
      setCurrentView("AllPhotos");
    }
  };

  const changeSelectedPhoto = newSelectedPhoto => {
    setSelectedPhoto(newSelectedPhoto);
  };

  const fileFunction = e => {
    let files = e.target.files;
    let output = [];
    output.push(files);
  };

  const uploadPhoto = async newPhoto => {
    await saveObject(newPhoto);
    console.log(newPhoto);
    const photoObjects = await listObjects(1);
    console.log(newPhoto);
    let photoBase64Strings = await Promise.all(
      photoObjects.map(async photoObject => {
        let tmp = await getSingleObject(photoObject.Key);
        return `data:image/png;base64, ${tmp}`;
      })
    );
    console.log(newPhoto);
    setPhotos([photoBase64Strings, ...photos]);
  };

  const getPhotos = async () => {
    const photoObjects = await listObjects(90);
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
      <section id="photos">
        {currentView === "AllPhotos" ? (
          photos.map(photo => (
            <AllPhotos
              Key={photo}
              photo={photo}
              onCallChangeViewAndSelectedPhoto={callChangeViewAndSelectedPhoto}
            />
          ))
        ) : (
          <SinglePhoto
            photo={selectedPhoto}
            onChangeCurrentView={changeCurrentView}
          />
        )}
      </section>
    </div>
  );
}
