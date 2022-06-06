import styles from "../styles/components/DarkModeButton.module.scss";
import { darkModeTheme } from "../lib/themeControl";

export default function DarkModeButton() {
  return <div id="darkModeButton" className={styles.darkModeButton} onClick={darkModeTheme}></div>;
}
