import React, { useContext } from "react";
import GoogleLogin from "react-google-login";
import { loginBBH } from "../utils/loginBBH.jsx";
import { UserContext } from "./UserContext.jsx";
/* Login function defination */

export default function Login() {
  const { user, setUser } = useContext(UserContext);
  const responseGoogle = async (response) => {
    const newLogin = await loginBBH(response.profileObj);
    setUser(newLogin);
		/* Session Control */
		if (newLogin) {
			sessionStorage.setItem('trace', JSON.stringify(newLogin));
		}
  };

  return (
    <div>
      <GoogleLogin
        clientId="85683286916-fv4bkb0hrqqelrefj9ic1g6s327qj147.apps.googleusercontent.com"
        buttonText="Log In with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
}
