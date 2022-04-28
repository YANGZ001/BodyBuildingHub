import React, { Component } from "react";
import GoogleLogin from "react-google-login";

export class Login extends Component {
  responseGoogle = (response) => {
    console.log(response);
    console.log(response.profileObj);
  };
  render() {
    return (
      <div>
        <GoogleLogin
          clientId="85683286916-fv4bkb0hrqqelrefj9ic1g6s327qj147.apps.googleusercontent.com"
          buttonText="Log In with Google"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
      </div>
    );
  }
}

export default Login;
