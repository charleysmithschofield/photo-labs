import React, { useState } from 'react';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import photos from '../mocks/photos';
import topics from '../mocks/topics';
import '../styles/HomeRoute.scss';

const HomeRoute = () => {
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
    <div className="home-route">
      <TopNavigationBar topics={topics} likedPhotos={likedPhotos} />
      <PhotoList
        photos={photos}
        likedPhotos={likedPhotos}
        toggleLike={toggleLike}
        setDisplayModal={setDisplayModal} // Pass setDisplayModal function to PhotoList
        setModalPhoto={setModalPhoto} // Pass setModalPhoto function to PhotoList
      />
      {/* Conditionally render the modal if displayModal is true */}
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

export default HomeRoute;