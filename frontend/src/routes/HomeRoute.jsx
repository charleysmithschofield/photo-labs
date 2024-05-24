// HomeRoute.jsx
import React from 'react';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

import '../styles/HomeRoute.scss';

const HomeRoute = () => {
  return (
    <div className="home-route">
      <TopNavigationBar />
      <div>
        <PhotoList />
      </div>
    </div>
  );
};

export default HomeRoute;
