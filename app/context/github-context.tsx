"use client";

import React, { createContext, useContext } from "react";
import { GitHubState, GitHubAction } from "./github-types";

export const initialState: GitHubState = {
  username: "",
  users: [],
  repos: [],
  loading: false,
  error: null,
};

interface GitHubContextType {
  state: GitHubState;
  dispatch: React.Dispatch<GitHubAction>;
  handleSearch: (e: React.FormEvent) => Promise<void>;
}

export const GitHubContext = createContext<GitHubContextType | undefined>(
  undefined
);

export const useGitHub = () => {
  const context = useContext(GitHubContext);
  if (!context)
    throw new Error("useGitHub must be used within a GitHubProvider");
  return context;
};
