// TopicListItem.jsx
import React from "react";
import "../styles/TopicListItem.scss";


//component to display topic item
const TopicListItem = (props) => {
  
  return (
    <div className="topic-list__item">
      <span> {props.label} </span>
    </div>
  );
};

export default TopicListItem;