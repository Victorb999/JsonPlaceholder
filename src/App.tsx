import Router from "./router/Router";
import "./styles/global.scss";
import styles from "./styles/app.module.scss";

export default function App() {
  return (
    <div className={styles.wrapper}>
      <main>
        <Router />
      </main>
    </div>
  );
}
