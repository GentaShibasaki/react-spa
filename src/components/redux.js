import { createStore } from "redux";
//WIP
const initialState = {
  currentView: true,
  photos: [],
  selectedPhoto: ""
};

export const changeView = input => ({
  type: "SET_CURRENT_VIEW",
  input
});

export const setAllPhotos = photosData => ({
  type: "SET_ALL_PHOTOS",
  photosData
});

export const setOnePhoto = photoData => ({
  type: "SET_ONE_PHOTO",
  photoData
});

export const addOnePhoto = photoData => ({
  type: "ADD_ONE_PHOTO",
  photoData
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CURRENT_VIEW":
      return { ...state, currentView: action.input };
    case "SET_ALL_PHOTOS":
      return { ...state, photos: action.photosData };
    case "SET_ONE_PHOTO":
      return { ...state, selectedPhoto: action.photoData };
    case "ADD_ONE_PHOTO":
      state.photos.push(...action.photoData);
      return state;
    default:
      return state;
  }
};

export const store = createStore(reducer);
