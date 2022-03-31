/* eslint "react/prefer-stateless-function": "off" */

import React from "react";

const dummyTrainVideoData = JSON.parse(`{
  "kind": "youtube#playlistItemListResponse",
  "etag": "G0vqK4rbE2B273HGISiYh78PGmY",
  "nextPageToken": "EAAaBlBUOkNBVQ",
  "items": [
    {
      "kind": "youtube#playlistItem",
      "etag": "bGnxilU2Q0bGLEeBCxemBUUQfQQ",
      "id": "UExSUzJERTRQMzlFYzBBdFU1Rm5kTkJTcFQ3UFhwcFpsNS4yODlGNEE0NkRGMEEzMEQy",
      "contentDetails": {
        "videoId": "lXwm62SiLQ8",
        "videoPublishedAt": "2017-02-11T23:41:30Z"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "8bzNJU4kBGnAFpHPWJSG_rz__o8",
      "id": "UExSUzJERTRQMzlFYzBBdFU1Rm5kTkJTcFQ3UFhwcFpsNS41NkI0NEY2RDEwNTU3Q0M2",
      "contentDetails": {
        "videoId": "jyFMBf-SrHs",
        "videoPublishedAt": "2017-02-19T01:30:22Z"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "1Zni5i7wMWJq0iLo4n9Cr1Pq_FY",
      "id": "UExSUzJERTRQMzlFYzBBdFU1Rm5kTkJTcFQ3UFhwcFpsNS4wMTcyMDhGQUE4NTIzM0Y5",
      "contentDetails": {
        "videoId": "x0f2sfsh7ns",
        "videoPublishedAt": "2017-02-04T23:29:59Z"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "q2FALK9L63hNFxg59UOpUafiCUw",
      "id": "UExSUzJERTRQMzlFYzBBdFU1Rm5kTkJTcFQ3UFhwcFpsNS41MjE1MkI0OTQ2QzJGNzNG",
      "contentDetails": {
        "videoId": "nK3BNozPEx4",
        "videoPublishedAt": "2017-01-28T22:58:03Z"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "eKjzsMNRBwhMav3ePHihGuTOdMA",
      "id": "UExSUzJERTRQMzlFYzBBdFU1Rm5kTkJTcFQ3UFhwcFpsNS4wOTA3OTZBNzVEMTUzOTMy",
      "contentDetails": {
        "videoId": "P01H0XpNpk0",
        "videoPublishedAt": "2017-02-26T00:43:06Z"
      }
    }
  ],
  "pageInfo": {
    "totalResults": 13,
    "resultsPerPage": 5
  }
}`);

export default class VideoList extends React.Component {
  render() {
    return (
      <div>
        {dummyTrainVideoData.items
          .map((key) => key.contentDetails)
          .map((key) => {
            return (
              <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${key.videoId}`}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            );
          })}
      </div>
    );
  }
}
