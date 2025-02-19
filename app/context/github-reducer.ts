import { GitHubState, GitHubAction } from "./github-types";

export const githubReducer = (
  state: GitHubState,
  action: GitHubAction
): GitHubState => {
  switch (action.type) {
    case "SET_USERNAME":
      return { ...state, username: action.payload };
    case "SET_USERS":
      return { ...state, users: action.payload, error: null };
    case "SET_REPOS":
      return { ...state, repos: action.payload, error: null };
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    case "SET_ERROR":
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
