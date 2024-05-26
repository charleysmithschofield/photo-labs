// PhotoList.jsx
import React from 'react';
import PhotoListItem from './PhotoListItem';

import '../styles/PhotoList.scss';

const PhotoList = ({ photos, toggleLike, FavoritePhotos, setDisplayModal, setModalPhoto }) => {
  const handleImageClick = (photo) => {
    setDisplayModal(true);
    setModalPhoto(photo);
  };

  return (
    <ul className="photo-list">
      {photos.map(photo => (
        <PhotoListItem
          key={photo.id}
          photo={photo}
          toggleLike={toggleLike}
          FavoritePhotos={FavoritePhotos}
          onImageClick={() => handleImageClick(photo)} // Pass photo to handleImageClick
        />
      ))}
    </ul>
  );
};

export default PhotoList;