/* eslint "react/prefer-stateless-function": "off" */

import React from "react";
import graphQLFetch from "./graphQLFetch.js";
import SearchBar from "./SearchBar.jsx";

/* A component to display video lists. And also send search queries about videos to Backend. */

export default class VideoList extends React.Component {
  constructor() {
    super();
    this.searchVids = this.searchVids.bind(this);
    this.state = {
      vids: [],
    };
  }

  async searchVids(text) {
    if (!text || text == null || text.length == 0) {
      this.loadData();
      return;
    }
    const query = `query {
      searchDB(vType:"${this.props.type}", text: "${text}") {
        id vId vName added vComments {cId body username userId parentId created}
      }
    }`;

    const data = await graphQLFetch(query);
    if (data) {
      this.setState({ vids: data.searchDB });
    }
  }

  async loadData() {
    const query = `query {
      vidList(vType:"${this.props.type}") {
        id vId vName added vComments {cId body username userId parentId created}
      }
    }`;

    const data = await graphQLFetch(query);
    if (data) {
      this.setState({ vids: data.vidList });
    }
  }

  componentDidMount() {
    this.loadData();
  }

  render() {
    return (
      <div>
        <SearchBar searchVids={this.searchVids} />

        <br />

        {this.state.vids.map((video) => {
          return (
            <div className="video container" key={video.id}>
              <h2>{video.vName}</h2>
              <iframe
                width="800"
                height="450"
                src={`https://www.youtube.com/embed/${video.vId}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          );
        })}
      </div>
    );
  }
}
