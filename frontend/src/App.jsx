// App.jsx
import React from 'react';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

const App = () => {
  const {
    state, // Now extracting the entire state object
    setDisplayModal,
    setModalPhoto,
    toggleLike,
  } = useApplicationData();

   // Ensure state is not undefined before accessing its properties
   if (!state) {
    return <div>Loading...</div>;
  }
  
  return (
    <div className="App">
      <HomeRoute
        photos={state.photoData} // Using state.photoData
        favoritePhotos={state.favoritePhotos} // Adjust accordingly if favoritePhotos is also part of the state
        setDisplayModal={setDisplayModal}
        setModalPhoto={setModalPhoto}
        toggleLike={toggleLike}
        displayModal={state.displayModal} // Assuming displayModal is a state attribute
        modalPhoto={state.modalPhoto} // Assuming modalPhoto is a state attribute
      />
      {state.displayModal && ( // Assuming displayModal is managed in state
        <PhotoDetailsModal
          show={state.displayModal} // Using state to manage display
          onClose={() => setDisplayModal(false)}
          photo={state.modalPhoto} // Assuming modalPhoto is managed in state
          toggleLike={toggleLike}
          favoritePhotos={state.favoritePhotos} // Adjust accordingly
        />
      )}
    </div>
  );
};

export default App;