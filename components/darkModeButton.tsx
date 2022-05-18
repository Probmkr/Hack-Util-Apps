import styles from "../styles/DarkModeButton.module.scss";
import { darkModeTheme } from "./themeControl";

export default function DarkModeButton() {
  return <div className={styles.darkModeButton} onClick={darkModeTheme}></div>;
}
