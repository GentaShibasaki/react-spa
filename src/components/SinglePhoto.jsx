import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { checkPropTypes } from "prop-types";
import { changeView } from "./redux";

//WIP

export default function SinglePhoto() {
  const selectedPhoto = useSelector(state => state.selectedPhoto);
  const dispatch = useDispatch();

  const onClickPhoto = () => {
    dispatch(changeView(true));
  };

  return (
    <img
      src={selectedPhoto}
      alt="pancakes"
      onClick={onClickPhoto}
      className="singlePhoto"
    />
  );
}
