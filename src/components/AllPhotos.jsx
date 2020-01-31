import React from "react";
import _ from "lodash";

//WIP

export default function AllPhotos(props) {
  const {
    Key,
    photo,
    onCallChangeViewAndSelectedPhoto,
    newSelectedPhoto
  } = props;

  return (
    <img
      className="image"
      onClick={onCallChangeViewAndSelectedPhoto(newSelectedPhoto)}
      src={photo}
      alt="pancakes"
    />
  );
}
