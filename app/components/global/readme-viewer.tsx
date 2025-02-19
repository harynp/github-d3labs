import ReactMarkdown from "react-markdown";
import styles from "@/app/styles/readme-viewer.module.css";
import rehypeRaw from "rehype-raw";

export default function ReadmeViewer({ content }: { content?: string }) {
  return (
    <div className={styles.readmeWrapper}>
      <div className={styles.readmeContainer}>
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>
          {content ?? "No README available."}
        </ReactMarkdown>
      </div>
    </div>
  );
}
