// PhotoListItem.jsx
import React from 'react';
import '../styles/PhotoListItem.scss';
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = ({ photo, toggleLike, favoritePhotos = [], onImageClick }) => {
  const { location, urls, user } = photo;

  // Check if the current photo is present in the favoritePhotos array
  const isFavorite = favoritePhotos.includes(photo.id);
  
  return (
    <div className="photo-list__item">
      {/* Pass toggleLike function and favoritePhotos array to PhotoFavButton */}
      <PhotoFavButton
        toggleLike={toggleLike}
        favoritePhotos={favoritePhotos}
        photoId={photo.id} // Pass photoId to identify the current photo
      />
      {/* Add onClick event handler for modal */}
      <img src={urls.full} alt="Photo" className="photo-list__image" onClick={onImageClick} />
      <div className="photo-list__user-details">
        <img src={user.profile} alt="profile-photo" className="photo-list__user-profile" />
        <div className="photo-list__user-info">
          <div>
            <span className="photo-list__username">{user.username}</span>
          </div>
          <div className="photo-list__user-location">
            <span> {location.city}</span>
            <span> {location.country}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
