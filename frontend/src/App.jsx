import React from 'react';
import TopicList from './components/TopicList';
import PhotoList from './components/PhotoList';
import './App.scss';

const App = () => {
  // Sample data for topics
  const topics = [
    {
      id: "1",
      slug: "topic-1",
      title: "Nature",
    },
    {
      id: "2",
      slug: "topic-2",
      title: "Travel",
    },
    {
      id: "3",
      slug: "topic-3",
      title: "People",
    },
  ];

  return (
    <div className="App">
      <TopicList topics={topics} />
      <PhotoList />
    </div>
  );
};

export default App;

