/* eslint "react/prefer-stateless-function": "off" */

import React from "react";
import graphQLFetch from "./graphQLFetch.js";

export default class VideoList extends React.Component {
  constructor() {
    super();
    this.state = {
      vids: [],
    };
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
        {/* <h3>{this.state.vids.map((vid) => vid.vName)}</h3> */}
        {this.state.vids.map((video) => {
          return (
            <div className="video container">
              <h2>{video.vName}</h2>
              <iframe
                width="800"
                height="450"
                src={`https://www.youtube.com/embed/${video.vId}`}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          );
        })}
      </div>
    );
  }
}
