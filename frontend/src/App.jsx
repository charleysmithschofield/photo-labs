// App.jsx
import React from 'react';
import { useState } from 'react';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import photos from './mocks/photos';
import topics from './mocks/topics';
import './App.scss';
import useApplicationData from 'hooks/useApplicationData';


const App = () => {

  const {
    favoritePhotos,
    displayModal,
    modalPhoto,
    setDisplayModal,
    setModalPhoto,
    toggleLike
  } = useApplicationData();

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
      {/* Conditional Rendering of Modal */}
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
console.log()

export default App;