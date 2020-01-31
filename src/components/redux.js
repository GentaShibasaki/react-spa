import { createStore } from "redux";
//WIP
const initialState = {
  currentView: "AllPhotos",
  photos: [],
  selectedPhoto: ""
};

export const changeView = text => ({
  type: "ChangeCurrentView",
  text
});

export const addAllPhotos = photosData => ({
  type: "addAllPhotos",
  photosData
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ChangeCurrentView":
      console.log(state);
      state.currentView =
        action.text === "AllPhotos" ? "SinglePhoto" : "AllPhotos";
      return state;
    case "addAllPhotos":
      state.photos = action.photosData;
      return state;
    default:
      return state;
  }
};

export const store = createStore(reducer);
