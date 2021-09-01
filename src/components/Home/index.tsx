import styles from "./styles.module.scss";
import { BrowserRouter as Router, Link } from "react-router-dom";

function Home() {
  return (
    <Router>
      <div className={styles.home}>
        <h1>Welcome to JSON Placeholder data</h1>
        <p>Click to see posts,todos or albums</p>
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
      </div>
    </Router>
  );
}
export default Home;
