// TopNavigationBar.jsx
import React, { useState } from 'react';
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss';

const TopNavigation = ({ topics, favoritePhotos, onTopicClick, toggleDarkMode }) => {
  const isFavPhotoExist = favoritePhotos && favoritePhotos.length !== 0;
  const [isDarkMode, setIsDarkMode] = useState(false); // State to track dark mode status

  const handleDarkModeToggle = () => {
    setIsDarkMode(prevDarkMode => !prevDarkMode); // Toggle dark mode state
    if (toggleDarkMode) {
      toggleDarkMode(); // Call toggleDarkMode function from props if available
    }
  };

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <div className="topic-list-container">
        <TopicList topics={topics} onTopicClick={onTopicClick} />
      </div>
        <button className="dark-mode-button" onClick={handleDarkModeToggle}>
          {isDarkMode ? "🌕" : "🌑"} {/* Display button text based on dark mode state */}
        </button>
      <FavBadge isFavPhotoExist={isFavPhotoExist} />
    </div>
  );
};

export default TopNavigation;
