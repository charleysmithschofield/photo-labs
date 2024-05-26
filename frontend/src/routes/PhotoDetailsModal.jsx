import React, { useState } from 'react';
import PhotoList from 'components/PhotoList';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from 'components/PhotoFavButton';
import '../styles/PhotoDetailsModal.scss';

const PhotoDetailsModal = ({ show, onClose, photo, toggleLike, likedPhotos }) => {
  const [displayModal, setDisplayModal] = useState(false);
  const [modalPhoto, setModalPhoto] = useState(null);

  if (!show) {
    return null;
  }

  // Correct extraction of similar photos
  const similarPhotosArray = Object.values(photo.similar_photos || {});

  console.log('Similar Photos Array', similarPhotosArray);
  console.log('Photo details:', photo);

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={onClose}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <PhotoFavButton
        toggleLike={toggleLike}
        likedPhotos={likedPhotos}
        photoId={photo.id}
      />
      <div className="photo-details-modal__image">
        <img src={photo.urls.full} alt={photo.description} className="photo-details-modal__image" />
        <h2>Similar Photos</h2>
        <PhotoList
          photos={similarPhotosArray}
          toggleLike={toggleLike}
          likedPhotos={likedPhotos}
          setDisplayModal={setDisplayModal} 
          setModalPhoto={setModalPhoto}  
        />
      </div>
    </div>
  );
};

export default PhotoDetailsModal;