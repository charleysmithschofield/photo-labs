// PhotoList.jsx
import React from 'react';
import PhotoListItem from './PhotoListItem';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

import '../styles/PhotoList.scss'


const PhotoList = ({ photos, toggleLike, likedPhotos, setDisplayModal }) => {

  // handle image click
  const handleImageClick = () => {
    setDisplayModal(true);
  }
  return (
    <ul className="photo-list">
      {photos.map(photo => {
        return (
          <PhotoListItem
            key={photo.id}
            photo={photo}
            toggleLike={toggleLike} 
            likedPhotos={likedPhotos} 
            onImageClick={handleImageClick}
          />
        );
      })}
    </ul>
  );
};


export default PhotoList