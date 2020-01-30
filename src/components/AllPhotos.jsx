import React from "react";
import _ from "lodash";

export default function AllPhotos(props) {
  const {
    Key,
    photo,
    onCallChangeViewAndSelectedPhoto,
    newSelectedPhoto
  } = props;
  //const elements = document.getElementsByClassName("column");

  return (
    <img
      className="image"
      onClick={onCallChangeViewAndSelectedPhoto(newSelectedPhoto)}
      src={photo}
      alt="pancakes"
    />
  );
}
