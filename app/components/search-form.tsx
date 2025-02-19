import styles from "@/app/styles/page.module.css";
import { useGitHub } from "@/app/context/github-context";

export default function SearchForm() {
  const { state, dispatch, handleSearch } = useGitHub();

  return (
    <form onSubmit={handleSearch} className={styles.form}>
      <input
        type="text"
        placeholder="Enter GitHub Username"
        value={state.username}
        onChange={(e) =>
          dispatch({ type: "SET_USERNAME", payload: e.target.value })
        }
        className={styles.input}
      />
      <button type="submit" className={styles.button}>
        Search
      </button>
    </form>
  );
}
