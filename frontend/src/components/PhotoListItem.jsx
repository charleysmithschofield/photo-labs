// PhotoListItem.jsx
import React from 'react';
import '../styles/PhotoListItem.scss';
import PhotoFavButton from './PhotoFavButton';

console.log("Rendered PhotoListItem");

const PhotoListItem = (props) => {
  const { location, urls, user } = props.photo;

  return (
    <div className="photo-list__item">
      <PhotoFavButton />
      <img src={urls.full} alt="Photo" className="photo-list__image" />
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