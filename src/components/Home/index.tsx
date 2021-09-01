import styles from "./styles.module.scss";
import { BrowserRouter as Router, Link } from "react-router-dom";

function Home() {
  return (
    <div className={styles.home}>
      <h1>Welcome to JSON Placeholder data</h1>
      <p>Click to see posts, todos or albums</p>
      <ul>
        <li>
          <a href="/posts">
            <h2>Posts</h2>
          </a>
        </li>
        <li>
          <a href="/todos">
            <h2>ToDos</h2>
          </a>
        </li>
        <li>
          <a href="/albums">
            <h2>Albums</h2>
          </a>
        </li>
      </ul>
    </div>
  );
}
export default Home;
