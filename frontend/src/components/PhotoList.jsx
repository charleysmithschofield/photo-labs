import React from 'react';
import PhotoListItem from './PhotoListItem';

import '../styles/PhotoList.scss';

const PhotoList = ({ photos, toggleLike, likedPhotos, setDisplayModal }) => {
  const handleImageClick = () => {
    setDisplayModal(true);
  };

  return (
    <ul className="photo-list">
      {photos.map(photo => (
        <PhotoListItem
          key={photo.id}
          photo={photo}
          toggleLike={toggleLike}
          likedPhotos={likedPhotos}
          onImageClick={handleImageClick}
        />
      ))}
    </ul>
  );
};

export default PhotoList;
