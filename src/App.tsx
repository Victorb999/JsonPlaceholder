import "./styles/global.scss";
import Posts from "./components/Posts";
import Header from "./components/Header";

import styles from "./styles/app.module.scss";

export default function App() {
  return (
    <div className={styles.wrapper}>
      <main>
        <Header />
        <Posts />
      </main>
    </div>
  );
}
