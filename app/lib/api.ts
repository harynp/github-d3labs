import { GitHubUser, GitHubRepo } from "../context/github-types";

export async function fetchGitHubUsers(username: string): Promise<GitHubUser[]> {
  try {
    const response = await fetch(`https://api.github.com/search/users?q=${username}`);
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to fetch users");
    }

    const data = await response.json();
    return data.items || [];
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
}

export async function fetchGitHubRepos(username: string): Promise<GitHubRepo[]> {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos`);
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to fetch repositories");
    }

    const repos: GitHubRepo[] = await response.json();
    return await fetchReadmeForRepos(username, repos);
  } catch (error) {
    console.error("Error fetching repositories:", error);
    throw error;
  }
}

async function fetchReadmeForRepos(username: string, repos: GitHubRepo[]): Promise<GitHubRepo[]> {
  return Promise.all(
    repos.map(async (repo) => {
      try {
        const response = await fetch(`https://api.github.com/repos/${username}/${repo.name}/readme`);
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "README not found");
        }

        const data = await response.json();
        return { ...repo, readme: atob(data.content) };
      } catch (error) {
        console.warn(`README not found for ${repo.name}:`, error);
        return { ...repo, readme: "No README available" };
      }
    })
  );
}
