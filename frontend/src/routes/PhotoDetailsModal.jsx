// PhotoDetailsModal.jsx
import React from 'react';
import PhotoList from 'components/PhotoList';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from 'components/PhotoFavButton';

import '../styles/PhotoDetailsModal.scss'

// destructure props to get show, onClose and photo
const PhotoDetailsModal = ({ show, onClose, photo, toggleLike, likedPhotos }) => {
  // if show is false, return null to not render the modal
  if (!show) {
    return null;
  }

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
        <img src={photo.urls.full} className="photo-details-modal__image"/>
        {/* Add header above similar photos */}
        <h2>Similar Photos</h2>
      </div>
    </div>
  )
};


export default PhotoDetailsModal;