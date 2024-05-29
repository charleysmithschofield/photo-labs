// TopNavigationBar.jsx
import React from 'react';
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss';

const TopNavigation = ({ topics, favoritePhotos, onTopicClick }) => {
  const isFavPhotoExist = favoritePhotos && favoritePhotos.length !== 0;

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <div className="topic-list-container">
        <TopicList topics={topics} onTopicClick={onTopicClick} />
      </div>
      <FavBadge isFavPhotoExist={isFavPhotoExist} />
    </div>
  );
};

export default TopNavigation;
