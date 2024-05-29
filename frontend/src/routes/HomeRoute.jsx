// HomeRoute.jsx
import React from 'react';
import TopNavigation from 'components/TopNavigationBar';
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
  onTopicClick
}) => {
  return (
    <div className="home-route">
      <TopNavigation 
        topics={topics} 
        favoritePhotos={favoritePhotos} 
        onTopicClick={onTopicClick} 
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
