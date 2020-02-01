import React from "react";
import _ from "lodash";
import { useSelector, useDispatch } from "react-redux";
import { changeView, setOnePhoto } from "../components/redux";

//third party library
import uuidv4 from "uuid/v4";

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
      {photos.map(photo => (
        <img
          className="image"
          onClick={() => onClickPhoto(photo)}
          key={uuidv4()}
          src={photo}
          alt="pancakes"
        />
      ))}
    </section>
  );
}
