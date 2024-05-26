// App.jsx
import React from 'react';
import { useState } from 'react';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import photos from './mocks/photos';
import topics from './mocks/topics';
import './App.scss';


const App = () => {
  // state to hold liked photos
  const [likedPhotos, setLikedPhotos] = useState([]);
  // state to control the display of the modal
  const [displayModal, setDisplayModal] = useState(false);
  // state to hold the details of the selected photo
  const [modalPhoto, setModalPhoto] = useState(null);


  // function to handle liking and unliking a photo
  const toggleLike = function(photoId) {
    // check if photoId is already in likedPhotos
    if (likedPhotos.includes(photoId)) {
      const updatedLikedPhotos = likedPhotos.filter(id => id !== photoId);
      setLikedPhotos(updatedLikedPhotos);
    } else {
      // if photoId is not in likedPhotos, add it
      const updatedLikedPhotos = [...likedPhotos, photoId];
      setLikedPhotos(updatedLikedPhotos);
    }
  };

  return (
    <div className="App">
      {/* Render the HomeRoute component */}
      <HomeRoute
        photos={photos}
        topics={topics}
        likedPhotos={likedPhotos}
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
          likedPhotos={likedPhotos}
        />
      )}
    </div>
  );
};

export default App;