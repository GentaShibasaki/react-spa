import React from "react";
import _ from "lodash";
import Gallery from "react-photo-gallery";

export default function AllPhotos(props) {
  const { photo } = props;
  //const elements = document.getElementsByClassName("column");

  return (
    <div className="row">
      <div className="column">
        <img className="image" src={photo} alt="pancakes" />
      </div>
    </div>
  );
}
