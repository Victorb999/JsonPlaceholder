import { useTheme } from "../../context/ThemeContext";
import styles from "./styles.module.scss";

export default function ThemeSelector() {
  const { toogleTheme } = useTheme();
  return (
    <div className={styles.themeSelector}>
      <div className={styles.tagget}>
        <input
          onClick={toogleTheme}
          type="checkbox"
          name="checkbox"
          id="checkbox"
          className={styles.checkbox}
        />
        <label htmlFor="checkbox" className={styles.label}>
          <div className={styles.sun}>
            <span role="img" aria-label="sun">
              🌞
            </span>
          </div>
          <div className={styles.moon}>
            <span role="img" aria-label="moon">
              🌙
            </span>
          </div>
          <div className={styles.ball}></div>
        </label>
      </div>
    </div>
  );
}
