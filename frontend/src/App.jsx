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
  const [FavoritePhotos, setFavoritePhotos] = useState([]);
  // state to control the display of the modal
  const [displayModal, setDisplayModal] = useState(false);
  // state to hold the details of the selected photo
  const [modalPhoto, setModalPhoto] = useState(null);


  // function to handle liking and unliking a photo
  const toggleLike = function(photoId) {
    // check if photoId is already in FavoritePhotos
    if (FavoritePhotos.includes(photoId)) {
      const updatedFavoritePhotos = FavoritePhotos.filter(id => id !== photoId);
      setFavoritePhotos(updatedFavoritePhotos);
    } else {
      // if photoId is not in FavoritePhotos, add it
      const updatedFavoritePhotos = [...FavoritePhotos, photoId];
      setFavoritePhotos(updatedFavoritePhotos);
    }
  };

  return (
    <div className="App">
      {/* Render the HomeRoute component */}
      <HomeRoute
        photos={photos}
        topics={topics}
        FavoritePhotos={FavoritePhotos}
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
          FavoritePhotos={FavoritePhotos}
        />
      )}
    </div>
  );
};

export default App;