import { useReducer, useEffect } from "react";

// Define action types for useReducer
export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_MODAL: 'DISPLAY_MODAL',
  SET_MODAL_PHOTO: 'SET_MODAL_PHOTO',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA'
};

// Reducer function to manage state based on action types 
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
    case ACTIONS.SET_PHOTO_DATA:
      return { ...state, photoData: action.payload };
    case ACTIONS.SET_TOPIC_DATA:
      return { ...state, topicData: action.payload };
    default:
      return state;
  }
}

// Initial state for the reducer
const initialState = {
  favoritePhotos: [],
  selectedPhoto: null,
  displayModal: false,
  modalPhoto: null,
  photoData: [],
  topicData: [],
};

// Custom hook to manage state and actions
const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Function to set display modal state
  const setDisplayModal = (display) => {
    dispatch({ type: ACTIONS.DISPLAY_MODAL, payload: { display } });
  };

  // Function to set photo to be displayed in the modal
  const setModalPhoto = (photo) => {
    dispatch({ type: ACTIONS.SET_MODAL_PHOTO, payload: { photo } });
  };

  // Function to toggle the favorite icon
  const toggleLike = (id) => {
    if (state.favoritePhotos.includes(id)) {
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: { id } });
    } else {
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: { id } });
    }
  };

  // useEffect hook to fetch data when the
  useEffect(() => {
    const fetchPhotoData = async () => {
      try {
        const response = await fetch("/api/photos");
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('photo data', data);
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data });
      } catch (error) {
        console.error("Error fetching photo data:", error);
      }
    };

    // Function to fetch topic data from the API
    const fetchTopicData = async () => {
      try {
        const response = await fetch("/api/topics");
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('topic data', data);
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data });
      } catch (error) {
        console.error("Error fetching topic data:", error);
      }
    };

    fetchPhotoData();
    fetchTopicData();
  }, []);

  return {
    state,
    setDisplayModal,
    setModalPhoto,
    toggleLike,
  };
};

export default useApplicationData;
