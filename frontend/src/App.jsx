// App.jsx
import React from 'react';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

const App = () => {
  const {
    state,
    setDisplayModal,
    setModalPhoto,
    toggleLike,
    fetchPhotosByTopic
  } = useApplicationData();

  return (
    <div className="App">
      {state.photoData.length > 0 ? (
        <HomeRoute
          photos={state.photoData}
          favoritePhotos={state.favoritePhotos}
          setDisplayModal={setDisplayModal}
          setModalPhoto={setModalPhoto}
          toggleLike={toggleLike}
          displayModal={state.displayModal}
          modalPhoto={state.modalPhoto}
          topics={state.topicData}
          onTopicClick={fetchPhotosByTopic}
        />
      ) : (
        <div>Loading photos...</div>
      )}
      {state.displayModal && (
        <PhotoDetailsModal
          show={state.displayModal}
          onClose={() => setDisplayModal(false)}
          photo={state.modalPhoto}
          toggleLike={toggleLike}
          favoritePhotos={state.favoritePhotos}
        />
      )}
    </div>
  );
};

export default App;
