// HomeRoute.jsx
import React from 'react';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import '../styles/HomeRoute.scss';



const HomeRoute = ({ toggleLike, favoritePhotos, displayModal, modalPhoto, setDisplayModal, setModalPhoto }) => {


  return (
    <div className="home-route">
      <TopNavigationBar favoritePhotos={favoritePhotos} />
      {/* Pass photoData to PhotoList as photos prop */}
      <PhotoList
        photos={state.photoData}
        favoritePhotos={favoritePhotos}
        toggleLike={toggleLike}
        setDisplayModal={setDisplayModal}
        setModalPhoto={setModalPhoto}
      />
      {/* Conditionally render the modal if displayModal is true */}
      {displayModal && (
        <PhotoDetailsModal
          show={displayModal}
          onClose={() => setDisplayModal(false)} // Function to close the modal
          photo={modalPhoto} // Pass the selected photo to the modal
        />
      )}
    </div>
  );
};

export default HomeRoute;
