import React, { useEffect } from "react";
import "../styles/styles.css";
import Navbar from "./Navbar";
import AllPhotos from "./AllPhotos";
import SinglePhoto from "./SinglePhoto";
import { listObjects, getSingleObject, saveObject } from "../utils/index";
import { useSelector, useDispatch } from "react-redux";
import { changeView, setAllPhotos, setOnePhoto, addOnePhoto } from "./redux";

export default function App() {
  const view = useSelector(state => state.currentView);

  const dispatch = useDispatch();

  //initial fire by using use effect
  useEffect(() => {
    getPhotos();
  }, []);

  const getPhotos = async () => {
    const photoObjects = await listObjects();
    const photoBase64Strings = await Promise.all(
      photoObjects.map(async photoObject => {
        let tmp = await getSingleObject(photoObject.Key);
        return `data:image/png;base64, ${tmp}`;
      })
    );
    dispatch(setAllPhotos(photoBase64Strings));
  };

  const changeCurrentView = photo => {
    dispatch(changeView(true));
  };

  return (
    <div className="App">
      <div>
        <Navbar />
      </div>
      {view ? <AllPhotos /> : <SinglePhoto />}
    </div>
  );
}
