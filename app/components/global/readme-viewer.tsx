import ReactMarkdown from "react-markdown";
import styles from "@/app/styles/readme-viewer.module.css";

export default function ReadmeViewer({ content }: { content?: string }) {
  return (
    <div className={styles.readmeContainer}>
      <ReactMarkdown>{content ?? "No README available."}</ReactMarkdown>
    </div>
  );
}
