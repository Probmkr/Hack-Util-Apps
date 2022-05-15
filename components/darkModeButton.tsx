import styles from "../styles/DarkModeButton.module.scss";
import { DarkMode } from "./functions";

export default function DarkModeButton() {
  return <div className={styles.darkModeButton} onClick={DarkMode}></div>;
}
