// TopicList.jsx
import React from "react";
import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const sampleDataForTopicListItem = {
  id: "1",
  slug: "topic-1",
  label: "Nature",
};


const TopicList = (props) => {
  const parsedTopics = props.topics.map((topic) => (
    <TopicListItem key={topic.id} label={topic.title} />
  ));

  return <div className="top-nav-bar__topic-list">{parsedTopics}</div>;
};

export default TopicList;
