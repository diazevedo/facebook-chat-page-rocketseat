import React, { Component } from "react";
import "./styles.css";
import postsData from "../../data/posts.json";

class SectionPost extends Component {
  static defaultProps = {
    classSection: "default-class"
  };

  state = {
    posts: []
  };

  componentDidMount() {
    this.setState({ posts: postsData });
  }

  render() {
    return <section className={this.props.classSection}></section>;
  }
}

export default SectionPost;
