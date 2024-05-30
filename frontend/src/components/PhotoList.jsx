// PhotoList.jsx
import React from 'react';
import PhotoListItem from './PhotoListItem';
import '../styles/PhotoList.scss';

const PhotoList = ({ photos, toggleLike, favoritePhotos, setDisplayModal, setModalPhoto }) => {
  console.log('Props in PhotoList:', { setDisplayModal, setModalPhoto });

  const handleImageClick = (photo) => {
    console.log('handleImageClick called with:', photo);
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
          setModalPhoto={setModalPhoto}
          setDisplayModal={setDisplayModal} // Pass down functions
          onImageClick={() => handleImageClick(photo)}
        />
      ))}
    </ul>

  );
};

export default PhotoList;
