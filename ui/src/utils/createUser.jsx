import graphQLFetch from "../components/graphQLFetch";

export const createUser = async (user) => {
  const query = `mutation createUser($user: UserInput!) {
    createUser(user: $user) {
      id username firstname lastname
    }
  }`;
  const response = await graphQLFetch(query, { user });
  if (response.createUser) {
    return {
      id: response.createUser.id,
      username: response.createUser.username,
      firstname: response.createUser.firstname,
      lastname: response.createUser.lastname,
    };
  }
};
