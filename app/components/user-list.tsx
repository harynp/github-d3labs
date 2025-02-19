import Image from "next/image";
import Link from "next/link";
import styles from "@/app/styles/page.module.css";
import { UserListProps } from "@/app/types/user-list";

export default function UserList({ users }: UserListProps) {
  if (users.length === 0) return null;

  return (
    <ul className={styles.userList}>
      {users.map((user) => (
        <li key={user.id} className={styles.userItem}>
          <Image
            src={user.avatar_url}
            width={25}
            height={25}
            alt={user.login}
            className={styles.userImage}
          />
          <Link href={user.html_url} target="_blank">
            {user.login}
          </Link>
        </li>
      ))}
    </ul>
  );
}
