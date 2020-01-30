import React from "react";

export default function SinglePhoto(props) {
  const { photo, onChangeCurrentView } = props;

  return (
    <img
      className="image"
      src={photo}
      alt="pancakes"
      onClick={onChangeCurrentView}
    />
  );
}
