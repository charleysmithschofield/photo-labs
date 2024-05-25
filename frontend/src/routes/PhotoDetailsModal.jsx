// PhotoDetailsModal.jsx
import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

// destructure props to get show, onClose and photo
const PhotoDetailsModal = ({ show, onClose, photo }) => {
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
    </div>
  )
};

export default PhotoDetailsModal;