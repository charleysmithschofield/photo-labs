// useApplicationData.js (Custom Hook)

import { useState } from "react";

const useApplicationData = () => {

  // state to hold Favorite photos
  const [favoritePhotos, setFavorite] = useState([]);
  // state to control the display of the modal
  const [displayModal, setDisplayModal] = useState(false);
  // state to hold the details of the selected photo
  const [modalPhoto, setModalPhoto] = useState(null);


  // function to handle liking and unliking a photo
  const toggleLike = function(photoId) {
    // check if photoId is already in favoritePhotos
    if (favoritePhotos.includes(photoId)) {
      const updatedfavoritePhotos = favoritePhotos.filter(id => id !== photoId);
      setFavorite(updatedfavoritePhotos);
    } else {
      // if photoId is not in favoritePhotos, add it
      const updatedfavoritePhotos = [...favoritePhotos, photoId];
      setFavorite(updatedfavoritePhotos);
    }
  };

  return {
    favoritePhotos,
    displayModal,
    modalPhoto,
    setDisplayModal,
    setModalPhoto,
    toggleLike
  };
};

export default useApplicationData;