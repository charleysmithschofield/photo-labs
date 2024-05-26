import React, { useState } from 'react';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import photos from '../mocks/photos';
import topics from '../mocks/topics';
import '../styles/HomeRoute.scss';

const HomeRoute = ({ toggleLike, favoritePhotos, displayModal, modalPhoto, setDisplayModal, setModalPhoto }) => {
  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} favoritePhotos={favoritePhotos} />
      <PhotoList
        photos={photos}
        favoritePhotos={favoritePhotos}
        toggleLike={toggleLike}
        setDisplayModal={setDisplayModal}
        setModalPhoto={setModalPhoto}
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