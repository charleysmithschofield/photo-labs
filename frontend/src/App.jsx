// App.jsx
import React from 'react';
import { useState } from 'react';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import photos from './mocks/photos';
import topics from './mocks/topics';
import './App.scss';


const App = () => {
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

  return (
    <div className="App">
      {/* Render the HomeRoute component */}
      <HomeRoute
        photos={photos}
        topics={topics}
        favoritePhotos={favoritePhotos}
        setDisplayModal={setDisplayModal}
        setModalPhoto={setModalPhoto}
        toggleLike={toggleLike}
      />
      {/* Conditional rendering of modal */}
      {displayModal && (
        <PhotoDetailsModal
          show={displayModal}
          onClose={() => setDisplayModal(false)}
          photo={modalPhoto} 
          toggleLike={toggleLike} 
          favoritePhotos={favoritePhotos}
        />
      )}
    </div>
  );
};

export default App;