import Router from "./router/Router";

import styles from "./styles/app.module.scss";
import { useTheme } from "./context/ThemeContext";

export default function Main() {
  const { darkTheme } = useTheme();
  return (
    <div className={styles.wrapper}>
      <main className={darkTheme ? "light" : "dark"}>
        <Router />
      </main>
    </div>
  );
}
