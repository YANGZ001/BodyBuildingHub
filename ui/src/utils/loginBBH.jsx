import { checkUserExists } from "./checkUserExists.jsx";
import graphQLFetch from "../components/graphQLFetch.js";
import { createUser } from "./createUser.jsx";

export const loginBBH = async (profileObj) => {
  const userExists = await checkUserExists(profileObj.email).then((res) => {
    if (res) {
      return true;
    } else {
      return false;
    }
  });

  if (userExists) {
    // Attempting to Log in User because User is existing User
    const query = `query {
        loginUser(username:"${profileObj.email}", password: "${
      profileObj.googleId + profileObj.givenName
    }") {
          id username firstname lastname
        }
      }`;
    const user = await graphQLFetch(query);
    if (user.loginUser) {
      return {
        id: user.loginUser.id,
        username: user.loginUser.username,
        firstname: user.loginUser.firstname,
        lastname: user.loginUser.lastname,
      };
    } else {
      // Attempted to log in but wrong password/err; return user = null
      return null;
    }
  } else {
    // Create new User in DB because User not found; First Login
    const newUserInput = {
      username: profileObj.email,
      password: profileObj.googleId + profileObj.givenName,
      firstname: profileObj.givenName,
      lastname: profileObj.familyName,
    };
    return createUser(newUserInput);
  }
};
