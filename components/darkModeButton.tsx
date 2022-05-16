import styles from "../styles/DarkModeButton.module.scss";
import { darkModeTheme } from "./functions";

export default function DarkModeButton() {
  return <div className={styles.darkModeButton} onClick={darkModeTheme}></div>;
}
