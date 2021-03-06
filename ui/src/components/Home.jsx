/* eslint "react/prefer-stateless-function": "off" */

import React from "react";
/* Home page. It contains introduction and our project proposal. */

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <p class="fs-2 .text-primary">Welcome to Body Building Hub</p>
        <p class="fs-5">This is a project for IT5007 at NUS.</p>
        <p class="fs-3 lh-base">
          We built BBH beacuse we want to provide the best resources from
          Internet for your personal training.{" "}
        </p>
        <iframe
          src="https://docs.google.com/presentation/d/e/2PACX-1vRCqD8rqvdG8jMtm13KLHNz--1wuEM0tO5t9a24OXG19DlDzzPwIRHrniXe25lkeM0gcVtXvzaBWWLx/embed?start=false&loop=false&delayms=3000"
          frameBorder="0"
          width="960"
          height="749"
          allowFullScreen={true}
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
        ></iframe>
      </div>
    );
  }
}
