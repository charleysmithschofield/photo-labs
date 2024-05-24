// PhotoList.jsx
import React from 'react';
import PhotoListItem from './PhotoListItem';

import '../styles/PhotoList.scss'


const PhotoList = ({ photos, toggleLike, likedPhotos }) => {
  return (
    <ul className="photo-list">
      {photos.map(photo => {
        return (
          <PhotoListItem
            key={photo.id}
            photo={photo}
            toggleLike={toggleLike} // Pass the toggleLike function as a prop
            likedPhotos={likedPhotos} // Pass the likedPhotos array as a prop
          />
        );
      })}
    </ul>
  );
};


export default PhotoList