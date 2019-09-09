import React from "react";
import Comment from "../Comment";
import "./style.css";

const ChatContainer = props => {
  const { post } = props;
  const { author } = post;

  return (
    <article className="chat">
      <header className="chat-header">
        <img
          className="chat-img-profile"
          src={author.avatar}
          alt={`Photo of ${author.name}`}
        />
        <h3 className="author-name">{author.name}</h3>
        <p className="chat-date">{post.date}</p>
      </header>
      <p className="chat-content">{post.content}</p>
      {post.comments.map(com => (
        <Comment key={com.id} content={com} />
      ))}
    </article>
  );
};

export default ChatContainer;
