// PhotoListItem.jsx
import React from 'react';
import '../styles/PhotoListItem.scss'
import PhotoFavButton from './PhotoFavButton';

console.log("Rendered PhotoListItem");

const PhotoListItem = (props) => {
  const { location, imageSource, username, profile } = props.photo;
  
  return (
    <div className="photo-list__item">
      <PhotoFavButton />
    <img src={imageSource} alt="Photo" className="photo-list__image" />
    <div className="photo-list__user-details">
      <img src={profile} alt="profile-photo" className="photo-list__user-profile" />
      <div className="photo-list__user-info">
        <div>
          <span className="photo-list__username">{username}</span>
        </div>
        <div>
          <span className="photo-list__user-location">{location.city}, {location.country}</span>
        </div>
      </div>
    </div>
  </div>
  );
}

export default PhotoListItem;