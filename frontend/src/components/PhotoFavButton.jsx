// PhotoFavButton.jsx
import React, { useCallback, useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ photoId, toggleLike }) {

  console.log({ photoId, toggleLike });

  // Set initial state to un-Favorited photos
  const [like, setLike] = useState(false);

  // Set state to opposite of the previous state when icon is clicked
  const handleClick = () => {
    setLike(prevLike => !prevLike);
    // call toggleLike function from proprs with photoId
    toggleLike(photoId);
  };


  return (
    // Clickable area for the favorite icon
    <div className={"photo-list__fav-icon"} onClick={handleClick}>
      {/* Actual favorite icon */}
      <div className={"photo-list__fav-icon-svg"}>
        {/* Passes the like state as a prop to FavIcon */}
        <FavIcon selected={like} /> 
      </div>
    </div>
  );
}

export default PhotoFavButton;