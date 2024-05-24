// TopicList.jsx
import React from "react";
import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

// Define topics array within TopicList.jsx
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

const TopicList = () => {
  // Map through the topics array defined in this file
  const parsedTopics = topics.map((topic) => (
    <TopicListItem key={topic.id} label={topic.title} />
  ));

  return <div className="top-nav-bar__topic-list">{parsedTopics}</div>;
};

export default TopicList;
