import React from "react";
import { useSelector } from "react-redux";

//WIP

export default function SinglePhoto() {
  return (
    <img
      className="image"
      src={photo}
      alt="pancakes"
      onClick={onChangeCurrentView}
    />
  );
}
