// PhotoFavButton.jsx
import React, { useCallback, useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  // Set initial state to un-liked
  const [like, setLike] = useState(false);

  // Set state to opposite of the previous state when icon is clicked
  const handleClick = () => {
    setLike(prevLike => !prevLike);
  };


  return (
    // Clickable area for the favorite icon
    <div className={"photo-list__fav-icon"} onClick={handleClick}>
      {/* Actual favorite icon */}
      <div className={"photo-list__fav-icon-svg"}>
        <FavIcon selected={like} /> {/* Passes the like state as a prop to FavIcon */}
      </div>
    </div>
  );
}

export default PhotoFavButton;