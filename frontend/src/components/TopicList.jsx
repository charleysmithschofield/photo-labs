// TopicList.jsx
import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

const TopicList = ({ topics, onTopicClick }) => {
  const parsedTopics = topics
    ? topics.map((topic) => (
        <TopicListItem 
          key={topic.id} 
          label={topic.title} 
          onClick={() => onTopicClick(topic.id)} 
        />
      ))
    : null;

  return <div className="topic-list">{parsedTopics}</div>;
};

export default TopicList;
