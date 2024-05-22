// PhotoListItem.jsx
import React from 'react';

// import Sass stylesheet
import '../styles/PhotoListItem.scss'

console.log("Rendered PhotoListItem");


const PhotoListItem = (props) => {
  const { location, imageSource, username, profile } = props.photo;
  
  return (
    <div className="photo-list__item">
      <img src={imageSource} alt="Photo" className="photo-list__image" />
      <div className="photo-list__user-details">
        <img src={profile} alt="profile-photo" className="photo-list__user-profile" />
      </div>
      <div className="photo-list__user-info">
        <div>
          <span className="photo-list__user-info">{username}</span>
        </div>
        <div>
          <span className="photo-list__user-location">{location.city}, {location.country}</span>
        </div>
      </div>
    </div>
  );
}

export default PhotoListItem;