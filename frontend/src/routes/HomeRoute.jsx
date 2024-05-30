// HomeRoute.jsx
import React from 'react';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import '../styles/HomeRoute.scss';

const HomeRoute = ({
  photos,
  toggleLike,
  favoritePhotos,
  displayModal,
  modalPhoto,
  setDisplayModal,
  setModalPhoto,
  topics,
  onTopicClick,
  toggleDarkMode,
}) => {
  return (
    <div className="home-route">
      <TopNavigationBar
        topics={topics}
        favoritePhotos={favoritePhotos}
        onTopicClick={onTopicClick}
        toggleDarkMode={toggleDarkMode}
      />

      {photos.length > 0 ? (
        <PhotoList
          photos={photos}
          favoritePhotos={favoritePhotos}
          toggleLike={toggleLike}
          setDisplayModal={setDisplayModal}
          setModalPhoto={setModalPhoto}
        />
      ) : (
        <div>No photos available</div>
      )}

      {displayModal && (
        <PhotoDetailsModal
          show={displayModal}
          onClose={() => setDisplayModal(false)}
          photo={modalPhoto}
        />
      )}
    </div>
  );
};

export default HomeRoute;
