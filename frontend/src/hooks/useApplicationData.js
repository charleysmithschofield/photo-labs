// useApplicationData.js
// useApplicationData.js
import { useReducer } from "react";

/* Define app level actions */
export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_MODAL: 'DISPLAY_MODAL',
  SET_MODAL_PHOTO: 'SET_MODAL_PHOTO'
};

/* Reducer function to handle state changes based on dispatched actions */
function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return { ...state, favoritePhotos: [...state.favoritePhotos, action.payload.id] };
    case ACTIONS.FAV_PHOTO_REMOVED:
      return { ...state, favoritePhotos: state.favoritePhotos.filter(id => id !== action.payload.id) };
    case ACTIONS.SELECT_PHOTO:
      return { ...state, selectedPhoto: action.payload.photo };
    case ACTIONS.DISPLAY_MODAL:
      return { ...state, displayModal: action.payload.display };
    case ACTIONS.SET_MODAL_PHOTO:
      return { ...state, modalPhoto: action.payload.photo };
    default:
      // Return current state for unsupported action types
      return state;
  }
}

// Initial state of the application
const initialState = {
  favoritePhotos: [],
  photos: [],
  topics: [],
  selectedPhoto: null,
  displayModal: false,
  modalPhoto: null
};

/* Custom hook to manage application state using useReducer */
const useApplicationData = () => {
  // useReducer hook to manage state based on actions
  const [state, dispatch] = useReducer(reducer, initialState);

  /* Helper functions to dispatch actions with appropriate payloads */

  const setDisplayModal = (display) => {
    dispatch(createDisplayModalAction(display));
  };

  const setModalPhoto = (photo) => {
    dispatch(createSetModalPhotoAction(photo));
  };

  const toggleLike = (id) => {
    if (state.favoritePhotos.includes(id)) {
      dispatch(createFavPhotoRemovedAction(id));
    } else {
      dispatch(createFavPhotoAddedAction(id));
    }
  };

  // Action creators to create payloads for dispatching actions
  const createFavPhotoAddedAction = (id) => ({ type: ACTIONS.FAV_PHOTO_ADDED, payload: { id } });
  const createFavPhotoRemovedAction = (id) => ({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: { id } });
  const createDisplayModalAction = (display) => ({ type: ACTIONS.DISPLAY_MODAL, payload: { display } });
  const createSetModalPhotoAction = (photo) => ({ type: ACTIONS.SET_MODAL_PHOTO, payload: { photo } });

  // Return state and action dispatchers for use in components
  return {
    favoritePhotos: state.favoritePhotos,
    displayModal: state.displayModal,
    modalPhoto: state.modalPhoto,
    setDisplayModal,
    setModalPhoto,
    toggleLike
  };
};

export default useApplicationData;