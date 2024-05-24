// HomeRoute.jsx
import React from 'react';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import TopicList from 'components/TopicList';
import photos from '../mocks/photos';
import topics from '../mocks/topics';

import '../styles/HomeRoute.scss';


const HomeRoute = () => {
  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} />
      <div>
        <PhotoList photos={photos} />
        <TopicList topics={topics} />
      </div>
    </div>
  );
};

export default HomeRoute;
