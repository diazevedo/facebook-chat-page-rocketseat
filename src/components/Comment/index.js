import React from "react";
import "./styles.css";
const Comment = ({ content }) => {
  return (
    <div className="card-comment">
      <img
        className="chat-replier-profile"
        src={content.author.avatar}
        alt={`Photo of ${content.author.name}`}
      />
      <p className="comment-content ">
        <span className="comment-author-name">{content.author.name}</span>
        {` ${content.content}`}
      </p>
    </div>
  );
};

export default Comment;
