// TopicList.jsx
import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";


const TopicList = ({ topics }) => {
  console.log("Topics:", topics);

  const parsedTopics = topics ? topics.map((topic) => (
    <TopicListItem key={topic.id} label={topic.title} />
  )) : null;

  return <div className="top-nav-bar__topic-list">{parsedTopics}</div>;
};

export default TopicList;
