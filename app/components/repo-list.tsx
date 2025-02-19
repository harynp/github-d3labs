import Link from "next/link";
import styles from "@/app/styles/page.module.css";
import ReadmeViewer from "./global/readme-viewer";
import { RepoListProps } from "@/app/types/repo-list";

export default function RepoList({ repos }: RepoListProps) {
  if (repos.length === 0) return null;

  return (
    <div>
      <h2 className={styles.titleRepo}>Repositories</h2>
      <ul className={styles.repoList}>
        {repos.map((repo) => (
          <>
            <li key={repo.id} className={styles.repoItem}>
              <Link href={repo.html_url} target="_blank">
                {repo.name}
              </Link>
            </li>
            <li>
              <ReadmeViewer content={repo.readme} />
            </li>
          </>
        ))}
      </ul>
    </div>
  );
}
