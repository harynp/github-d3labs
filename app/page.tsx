"use client";

import { useGitHub } from "@/app/context/github-context";
import styles from "@/app/styles/page.module.css";
import UserList from "@/app/components/user-list";
import RepoList from "@/app/components/repo-list";
import SearchForm from "@/app/components/search-form";

export default function GitHubUser() {
  const { state } = useGitHub();

  return (
    <div className={styles.container}>
      <h1>Search GitHub Users</h1>
      <SearchForm />

      {state.loading && <p className={styles.loading}>Loading...</p>}
      {state.error && <p className={styles.error}>{state.error}</p>}

      <UserList users={state.users} />
      <RepoList repos={state.repos} />
    </div>
  );
}
