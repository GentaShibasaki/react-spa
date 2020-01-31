import React, { useState, useEffect } from "react";
import "../styles/styles.css";
import Navbar from "./Navbar";
import AllPhotos from "./AllPhotos";
import SinglePhoto from "./SinglePhoto";
import { listObjects, getSingleObject, saveObject } from "../utils/index";
import { useSelector, useDispatch } from "react-redux";
import { changeView, addAllPhotos } from "./redux";

export default function App() {
  const view = useSelector(state => state.currentView);
  const photos = useSelector(state => state.photos);
  const singlePhoto = useSelector(state => state.selectedPhoto);
  const dispatch = useDispatch();
  const [photoView, setPhotoView] = useState("");
  const onButtonClick = () => {
    dispatch(changeView(photoView));
  };

  //WIP

  return (
    <div className="App">
      <Navbar />
      <section id="photos">
        {view === "AllPhotos" ? (
          photos.map(photo => <AllPhotos />)
        ) : (
          <SinglePhoto />
        )}
      </section>
    </div>
  );
}
