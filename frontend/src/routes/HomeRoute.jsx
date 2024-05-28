// HomeRoute.jsx
import React from 'react';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import '../styles/HomeRoute.scss';


const HomeRoute = ({
  photos,
  toggleLike,
  favoritePhotos,
  displayModal,
  modalPhoto,
  setDisplayModal,
  setModalPhoto,
  topics
}) => {
  return (
    <div className="home-route">
      <TopNavigationBar favoritePhotos={favoritePhotos} />
      {photos.length > 0 ? ( // Check if photos are available
        <PhotoList
          photos={photos}
          favoritePhotos={favoritePhotos}
          toggleLike={toggleLike}
          setDisplayModal={setDisplayModal}
          setModalPhoto={setModalPhoto}
        />
      ) : (
        <div>No photos available</div>
      )}
      {/* Display topic data */}
       {topics.length > 0 && (
        <div className="topics">
          {topics.map((topic) => ( // Add parentheses here
            <div key={topic.id} className="topic">
              {topic.name}
            </div>
          ))} {/* <-- Closing parentheses here */}
        </div>
      )}
      {displayModal && (
        <PhotoDetailsModal
          show={displayModal}
          onClose={() => setDisplayModal(false)}
          photo={modalPhoto}
        />
      )}
    </div>
  );
};

export default HomeRoute;
