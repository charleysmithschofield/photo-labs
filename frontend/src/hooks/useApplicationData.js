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
    case ACTIONS.FAV_PHOTO_ADDED:
      // Check if the photo is already in the favoritePhotos array
      if (state.favoritePhotos.includes(action.payload.id)) {
        return state; // If already favorited, return the current state
      } else {
        // If not favorited, add the photo to favoritePhotos array
        return { ...state, favoritePhotos: [...state.favoritePhotos, action.payload.id] };
      }
    case ACTIONS.FAV_PHOTO_REMOVED:
      // Remove the photo from favoritePhotos array
      return { ...state, favoritePhotos: state.favoritePhotos.filter(id => id !== action.payload.id) };
    case ACTIONS.SET_PHOTO_DATA:
      // Set photo data in state
      return { ...state, photos: action.payload.photos };
    case ACTIONS.SET_TOPIC_DATA:
      // Set topic data in state
      return { ...state, topics: action.payload.topics };
    case ACTIONS.SELECT_PHOTO:
      // Set selected photo in state
      return { ...state, selectedPhoto: action.payload.photo };
    case ACTIONS.DISPLAY_PHOTO_DETAILS:
      // Set modal display state and modal photo
      return { ...state, displayModal: action.payload.display, modalPhoto: action.payload.photo };
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
