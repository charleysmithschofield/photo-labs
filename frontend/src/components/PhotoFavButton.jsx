// PhotoFavButton.jsx
import React from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ photoId, toggleLike, favoritePhotos }) {
  // Ensure favoritePhotos is defined before accessing its properties
  const isFavorite = favoritePhotos && favoritePhotos.includes(photoId);

  // Handle click event to toggle the favorite status
  const handleClick = () => {
    toggleLike(photoId);
  };

  return (
    // Clickable area for the favorite icon
    <div className={"photo-list__fav-icon"} onClick={handleClick}>
      {/* Actual favorite icon */}
      <div className={"photo-list__fav-icon-svg"}>
        {/* Passes the favorite state as a prop to FavIcon */}
        <FavIcon selected={isFavorite} />
      </div>
    </div>
  );
}

export default PhotoFavButton;
