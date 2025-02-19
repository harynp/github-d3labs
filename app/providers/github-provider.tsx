"use client";

import { ReactNode, useReducer } from "react";
import { GitHubContext, initialState } from "../context/github-context";
import { githubReducer } from "../context/github-reducer";
import { fetchGitHubUsers, fetchGitHubRepos } from "@/app/lib/api";

export const GitHubProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(githubReducer, initialState);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({ type: "SET_LOADING", payload: true });
    dispatch({ type: "SET_ERROR", payload: null });

    try {
      const users = await fetchGitHubUsers(state.username);
      dispatch({ type: "SET_USERS", payload: users });

      if (users.length > 0) {
        const username = users[0].login;
        const repos = await fetchGitHubRepos(username);
        dispatch({ type: "SET_REPOS", payload: repos });
      }
    } catch (error) {
      dispatch({
        type: "SET_ERROR",
        payload: error instanceof Error ? error.message : "Unknown error",
      });
    } finally {
      dispatch({ type: "SET_LOADING", payload: false });
    }
  };

  return (
    <GitHubContext.Provider value={{ state, dispatch, handleSearch }}>
      {children}
    </GitHubContext.Provider>
  );
};
