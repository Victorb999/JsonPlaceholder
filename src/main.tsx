import Router from "./router/Router";

import styles from "./styles/app.module.scss";
import { useTheme } from "./context/ThemeContext";

export default function Main() {
  const { darkTheme } = useTheme();
  return (
    <div className={styles.wrapper}>
      <main className={darkTheme ? "dark" : "light"}>
        <Router />
      </main>
    </div>
  );
}
