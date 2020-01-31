import React, { useEffect } from "react";
import "../styles/styles.css";
import Navbar from "./Navbar";
import AllPhotos from "./AllPhotos";
import SinglePhoto from "./SinglePhoto";
import { listObjects, getSingleObject, saveObject } from "../utils/index";
import { useSelector, useDispatch } from "react-redux";
import { changeView, setAllPhotos, setOnePhoto, store } from "./redux";

export default function App() {
  const view = useSelector(state => state.currentView);
  const dispatch = useDispatch();
  const [photoView, setPhotoView] = useState("");
  const onButtonClick = () => {
    dispatch(changeView(true));
  };

  const photos = useSelector(state => state.photos);
  const getPhotos = async () => {
    const photoObjects = await listObjects(90);
    const photoBase64Strings = await Promise.all(
      photoObjects.map(async photoObject => {
        let tmp = await getSingleObject(photoObject.Key);
        return `data:image/png;base64, ${tmp}`;
      })
    );
    dispatch(setAllPhotos(photoBase64Strings));
  };
  useEffect(() => {
    getPhotos();
  });

  const singlePhoto = useSelector(state => state.selectedPhoto);
  const selectOnePhoto = photo => {
    dispatch(changeView(false));
    dispatch(setOnePhoto(photo));
  };
  //WIP

  return (
    <div className="App">
      <div>
        <Navbar />
      </div>
      <section id="photos">
        {view ? (
          photos.map(photo => <AllPhotos selectOnePhoto={selectOnePhoto} />)
        ) : (
          <SinglePhoto onButtonClick={onButtonClick} />
        )}
      </section>
    </div>
  );
}
