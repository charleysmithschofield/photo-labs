// HomeRoute.jsx
import React from 'react';
// import { useState } from 'react';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import photos from '../mocks/photos';
import topics from '../mocks/topics';
import '../styles/HomeRoute.scss';

const HomeRoute = ({ toggleLike, likedPhotos, displayModal, modalPhoto, setDisplayModal, setModalPhoto }) => {
  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} likedPhotos={likedPhotos} />
      <PhotoList
        photos={photos}
        likedPhotos={likedPhotos}
        toggleLike={toggleLike}
        setDisplayModal={setDisplayModal}
        setModalPhoto={setModalPhoto}
      />
      {/* Conditionally render the modal if displayModal is true */}
      {displayModal && (
        <PhotoDetailsModal
          show={displayModal}
          onClose={() => setDisplayModal(false)}
          photo={modalPhoto}
          toggleLike={toggleLike}
        />
      )}
    </div>
  );
};

export default HomeRoute;