import React from "react";
import _ from "lodash";
import { useSelector, useDispatch } from "react-redux";
import { changeView, setOnePhoto } from "../components/redux";

//WIP

export default function AllPhotos() {
  const onClickPhoto = photo => {
    dispatch(setOnePhoto(photo));
    dispatch(changeView(false));
  };

  const photos = useSelector(state => state.photos);
  const dispatch = useDispatch();

  return (
    <section id="photos">
      {photos.map((photo, index) => (
        <img
          className="image"
          onClick={() => onClickPhoto(photo)}
          key={index}
          src={photo}
          alt="pancakes"
        />
      ))}
    </section>
  );
}
