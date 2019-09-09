import React, { Component } from "react";
import ChatContainer from "../ChatContainer";

import "./styles.css";
import postsData from "../../data/dataJS.js";

class SectionChats extends Component {
  static defaultProps = {
    classSection: "section-chats"
  };

  state = {
    posts: []
  };

  componentDidMount() {
    this.setState({ posts: postsData });
  }

  render() {
    return (
      <section className={this.props.classSection}>
        {this.state.posts.map((p, i) => (
          <ChatContainer key={p.id} post={p} />
        ))}
      </section>
    );
  }
}

export default SectionChats;
