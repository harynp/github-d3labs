export interface GitHubUser {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
}

export interface GitHubRepo {
  id: number;
  name: string;
  html_url: string;
  readme?: string;
}

export interface GitHubState {
  username: string;
  users: GitHubUser[];
  repos: GitHubRepo[];
  loading: boolean;
  error: string | null;
}

export type GitHubAction =
  | { type: "SET_USERNAME"; payload: string }
  | { type: "SET_USERS"; payload: GitHubUser[] }
  | { type: "SET_REPOS"; payload: GitHubRepo[] }
  | { type: "SET_LOADING"; payload: boolean }
  | { type: "SET_ERROR"; payload: string | null };

  export interface GitHubContextType {
    username: string;
    setUsername: (username: string) => void;
    users: GitHubUser[];
    setUsers: (users: GitHubUser[]) => void;
    loading: boolean;
    setLoading: (loading: boolean) => void;
    error: string | null;
    setError: (error: string | null) => void;
    handleSearch: (e: React.FormEvent) => Promise<void>;
  }
