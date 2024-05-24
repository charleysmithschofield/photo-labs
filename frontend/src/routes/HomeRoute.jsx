import React, { useState } from 'react';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import photos from '../mocks/photos';
import topics from '../mocks/topics';
import '../styles/HomeRoute.scss';

const HomeRoute = () => {
  const [likedPhotos, setLikedPhotos] = useState([]); // Initialize likedPhotos as an empty array
  const [displayModal, setDisplayModal] = useState(false);

  const toggleLike = function(photoId) {
    if (likedPhotos.includes(photoId)) {
      const updatedLikedPhotos = likedPhotos.filter(id => id !== photoId);
      setLikedPhotos(updatedLikedPhotos);
    } else {
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
        setDisplayModal={setDisplayModal} // Make sure to pass down setDisplayModal to PhotoList
      />
      {displayModal && <PhotoDetailsModal show={displayModal} onClose={() => setDisplayModal(false)} />}
    </div>
  );
};

export default HomeRoute;