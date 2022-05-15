import styles from "../styles/DarkModeButton.module.scss";

export default function DarkModeButton() {
  return <div className={styles.darkModeButton} onClick={DarkMode}></div>;
}

function DarkMode() {
  document.querySelector("body").classList.toggle("dark-mode");
}
