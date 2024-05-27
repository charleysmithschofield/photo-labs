// PhotoList.jsx
import React from 'react';
import PhotoListItem from './PhotoListItem';
import '../styles/PhotoList.scss';

const PhotoList = ({ photos, toggleLike, favoritePhotos, setDisplayModal, setModalPhoto }) => {
  console.log('photos:', photos); // Add this line to check photos

  const handleImageClick = (photo) => {
    setModalPhoto(photo);
    setDisplayModal(true);
  };

  return (
    <ul className="photo-list">
      {photos && photos.map(photo => (
        <PhotoListItem
          key={photo.id}
          photo={photo}
          toggleLike={toggleLike}
          favoritePhotos={favoritePhotos}
          onImageClick={() => handleImageClick(photo)}
        />
      ))}
    </ul>
  );
};

export default PhotoList;
