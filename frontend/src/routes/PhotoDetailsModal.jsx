// PhotoDetailsModal.jsx
import React from 'react';
import PhotoList from 'components/PhotoList';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from 'components/PhotoFavButton';
import '../styles/PhotoDetailsModal.scss';

const PhotoDetailsModal = ({ show, onClose, photo, toggleLike, favoritePhotos }) => {
  if (!show) {
    return null;
  }

  // Convert similar photos object into an array
  const similarPhotosArray = Object.values(photo.similar_photos || {});

  const {user} = photo;
  const {location} = photo;

  console.log('Similar Photos Array', similarPhotosArray);
  console.log('Photo details:', photo);
  console.log('user', user);
  console.log('location', location);

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={onClose}>
        <img src={closeSymbol} alt="close symbol" />
      </button>

      {/* PhotoFavButton component */}
      <div className="photo-details-modal__fav-button">
        <PhotoFavButton
          toggleLike={toggleLike}
          favoritePhotos={favoritePhotos}
          photoId={photo.id}
        />
      </div>

      {/* Main photo image */}
      <div className="photo-details-modal__main-photo">
        <img src={photo.urls.full} alt={photo.description} className="photo-details-modal__image" />
      </div>


      {/* Select Photo User Info */}
      {user && (
        <div className="photo-details-modal__photographer-details">
          <img src={user.profile} alt="profile-photo" className="photo-details-modal__photographer-profile" />
          <div className="photo-details-modal__photographer-info">
            <div>
              <span className="photo-details-modal__username">{user.username}</span>
            </div>
            <div className="photo-details-modal__photographer-location">
              <span>{location.city} </span>
              <span>{location.country} </span>
            </div>
          </div>
        </div>
      )}

      {/* Similar Photos */}
      <div className="photo-details-modal__similar-photos">
        <h2>Similar Photos</h2>
        <PhotoList
          photos={similarPhotosArray}
          toggleLike={toggleLike}
          favoritePhotos={favoritePhotos}
        />
      </div>
    </div>
  );
};

export default PhotoDetailsModal; 