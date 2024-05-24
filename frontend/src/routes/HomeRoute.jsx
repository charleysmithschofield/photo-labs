// HomeRoute.jsx
import React from 'react';

import { useState } from 'react';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import TopicList from 'components/TopicList';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import photos from '../mocks/photos';
import topics from '../mocks/topics';

import '../styles/HomeRoute.scss';


const HomeRoute = (props) => {

  // Define state variables for liked photos and modal display
  const [likedPhotos, setLikedPhotos] = useState([]);
  const [displayModal, setDisplayModal] = useState(false);


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
      <TopNavigationBar topics={props.topics} likedPhotos={likedPhotos} />
      <PhotoList 
        photos={props.photos} 
        likedPhotos={likedPhotos} 
        toggleLike={toggleLike} 
        setDisplayModal={setDisplayModal} 
        />
        {displayModal && <PhotoDetailsModal />}
    </div>
  );
};

export default HomeRoute;
