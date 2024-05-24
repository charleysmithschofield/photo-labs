// HomeRoute.jsx
import React from 'react';
import { useState } from 'react';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import TopicList from 'components/TopicList';
import photos from '../mocks/photos';
import topics from '../mocks/topics';

import '../styles/HomeRoute.scss';


const HomeRoute = (props) => {

  //Set inital state of liked photos to empty array
  const [likedPhotos, setLikedPhotos] = useState([]);

  //Function to check if photoID is already present in likedPhotos state, if not, add the photoID
  const toggleLike = function(photoId) {
    if (likedPhotos.includes(photoId)) {
      const updatedLikedPhotos = likedPhotos.filter(id => id !== photoId);
      setLikedPhotos(updatedLikedPhotos);
    } else {
      const updatedLikedPhotos = [...likedPhotos, photoId];
      setLikedPhotos(updatedLikedPhotos);
    }
  };

  return (
    <div className="home-route">
      <TopNavigationBar topics={props.topics} />
      <PhotoList photos={props.photos} likedPhotos={likedPhotos} toggleLike={toggleLike}/>
    </div>
  );
};

export default HomeRoute;
