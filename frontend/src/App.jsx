// App.jsx
import React from 'react';
import { useState } from 'react';
import HomeRoute from 'routes/HomeRoute';
import photos from './mocks/photos';
import topics from './mocks/topics';
import './App.scss';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';


const App = () => {
  // Make state using useState hook
  const [likedPhotos, setLikedPhotos] = useState([]);
  const [displayModal, setDisplayModal] = useState(false);


  return (
    <div className="App">
      {/* Render the HomeRoute component */}
      <HomeRoute
       photos={photos} 
       topics={topics} 
       likedPhotos={likedPhotos} 
       setLikedPhotos={setLikedPhotos}  
       setDisplayModal={setDisplayModal} />
      {/* Conditional rendering of modal */}
      {displayModal && <PhotoDetailsModal show={displayModal} onClose={() => setDisplayModal(false)} />}

    </div>
  );
};

export default App;