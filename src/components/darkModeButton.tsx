import styles from "../styles/DarkModeButton.module.scss";
import { darkModeTheme } from "../lib/themeControl";

export default function DarkModeButton() {
  return <div id="darkModeButton" className={styles.darkModeButton} onClick={darkModeTheme}></div>;
}
