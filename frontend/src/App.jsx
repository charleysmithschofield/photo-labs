// App.jsx
import React from 'react';
import { useState } from 'react';
import HomeRoute from 'routes/HomeRoute';
import photos from './mocks/photos';
import topics from './mocks/topics';
import './App.scss';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';


const App = () => {
  // state to hold liked photos
  const [likedPhotos, setLikedPhotos] = useState([]);
  // state to control the display of the modal
  const [displayModal, setDisplayModal] = useState(false);
  // state to hold the details of the selected photo
  const [modalPhoto, setModalPhoto] = useState(null);


  return (
    <div className="App">
      {/* Render the HomeRoute component */}
      <HomeRoute
        photos={photos}
        topics={topics}
        likedPhotos={likedPhotos}
        setLikedPhotos={setLikedPhotos}
        setDisplayModal={setDisplayModal}
        setModalPhoto={setModalPhoto} // Pass setModalPhoto function to HomeRoute
      />
      {/* Conditional rendering of modal */}
      {displayModal && (
        <PhotoDetailsModal
          show={displayModal}
          onClose={() => setDisplayModal(false)} // Function to close the modal
          photo={modalPhoto} // Pass the selected photo to the modal
        />
      )}
    </div>
  );
};

export default App;