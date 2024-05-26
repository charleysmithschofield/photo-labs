import { useReducer } from "react";

/* Define app level actions */
export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_MODAL: 'DISPLAY_MODAL',
  SET_MODAL_PHOTO: 'SET_MODAL_PHOTO'
}

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      if (state.favoritePhotos.includes(action.payload.id)) {
        return state; 
      } else {
        return { ...state, favoritePhotos: [...state.favoritePhotos, action.payload.id] };
      }
    case ACTIONS.FAV_PHOTO_REMOVED:
      return { ...state, favoritePhotos: state.favoritePhotos.filter(id => id !== action.payload.id) };
    case ACTIONS.SELECT_PHOTO:
      return { ...state, selectedPhoto: action.payload.photo };
    case ACTIONS.DISPLAY_MODAL:
      return { ...state, displayModal: action.payload.display };
    case ACTIONS.SET_MODAL_PHOTO:
      return { ...state, modalPhoto: action.payload.photo };
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}

const useApplicationData = () => {
  // Initial state
  const initialState = {
    favoritePhotos: [],
    photos: [],
    topics: [],
    selectedPhoto: null,
    displayModal: false,
    modalPhoto: null
  };

  // useReducer hook
  const [state, dispatch] = useReducer(reducer, initialState);
  
  // Other functions and state variables...
  return {
    state,
    dispatch,
  };
};

export default useApplicationData;
