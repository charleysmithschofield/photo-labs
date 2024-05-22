// PhotoListItem.jsx
import React from 'react';

// import Sass stylesheet
import '../styles/PhotoListItem.scss'

console.log("Rendered PhotoListItem");


const PhotoListItem = (props) => {
  const { location, imageSource, username, profile } = props.photo;
  
  return (
    <div className="photo-list__item">
      <img src={imageSource} alt="Photo" className="starbucks-photo" />
      <div className="profile-photo">
        <img src={profile} alt="profile-photo" className="user-profile-photo" />
      </div>
      <div className="user-info">
        <div>
          <span className="username">{username}</span>
        </div>
        <div>
          <span className="location">{location.city}, {location.country}</span>
        </div>
      </div>
    </div>
  );
}

export default PhotoListItem;