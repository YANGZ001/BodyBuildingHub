import graphQLFetch from "../components/graphQLFetch";

export const checkUserExists = async (username) => {
  const query = `query {
        searchUser(username:"${username}") {
          id
        }
      }`;
  const response = await graphQLFetch(query);
  return response.searchUser ? true : false;
};
