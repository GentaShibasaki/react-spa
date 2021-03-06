import React, { useEffect } from "react";
import "../styles/styles.css";
import Navbar from "./Navbar";
import AllPhotos from "./AllPhotos";
import SinglePhoto from "./SinglePhoto";
import { listObjects, getSingleObject } from "../utils/index";
import { useSelector, useDispatch } from "react-redux";
import { setAllPhotos } from "./redux";

export default function App() {
  const view = useSelector(state => state.currentView);

  const dispatch = useDispatch();

  //initial fire by using use effect
  useEffect(() => {
    getPhotos();
  }, []);

  const getPhotos = async () => {
    const photoObjects = await listObjects(30);
    const photoBase64Strings = await Promise.all(
      photoObjects.map(async (photoObject, index) => {
        let tmp = await getSingleObject(photoObject.Key);
        return `data:image/png;base64, ${tmp}`;
      })
    );
    dispatch(setAllPhotos(photoBase64Strings));
    console.log();
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
