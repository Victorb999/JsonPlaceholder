import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <Link to="/">
        <h1>{"{}"} JSON Placeholder</h1>
      </Link>
      <ul>
        <li>
          <Link to="/posts">
            <h2>Posts</h2>
          </Link>
        </li>
        <li>
          <Link to="/todos">
            <h2>To-Do</h2>
          </Link>
        </li>
        <li>
          <Link to="/albums">
            <h2>Albums</h2>
          </Link>
        </li>
      </ul>
    </header>
  );
}
