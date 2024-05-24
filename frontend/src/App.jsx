import React from 'react';
import TopicList from './components/TopicList';
import PhotoList from './components/PhotoList';
import './App.scss';

const App = () => {
  return (
    <div className="App">
      <TopicList /> {/* No need to pass topics as prop anymore */}
      <PhotoList />
    </div>
  );
};

export default App;
