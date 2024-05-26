// useApplicationData.js (Custom Hook)

import { useReducer } from "react";

/* insert app levels actions below */
export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
}

function reducer(state, action) {
  switch (action.type) {
    case FAV_PHOTO_ADDED:
    // Check if the photo is already in the favoritePhotos array
    if (state.favoritePhotos.includes(action.payload.id)) {
      return state; // if already favorited, return the current state
    } else {
      // If not already favorited, add the phot to the favoritePhotos array
      return {...state, favoritePhotos: state.favoritePhotos.filter(id => id !== action.payload.id) };
    }
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
};

const useApplicationData = () => {
  // Initial state
  const initialState = {
    favoritePhotos: [],
    displayModal: false,
    modalPhoto: null
  };

  // useReducer hook
  const [state, dispatch] = useReducer(reducer, initialState);

  return {
    ...state,
    favoritePhotos,
    displayModal,
    modalPhoto,
    setDisplayModal,
    setModalPhoto,
    toggleLike
  };
};

export default useApplicationData;
