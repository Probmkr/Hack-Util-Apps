import { Children } from "react";
import styles from "../styles/Footer.module.scss";

export default function SidebarContents() {
  return <div className={styles.sidebarContents}></div>;
}

function StaticPages() {
  return <div className={styles.staticPages}></div>;
}

function PopularApps() {
  return <div className={styles.popularApps}></div>;
}

function Categories() {
  return <div className={styles.categories}></div>;
}

function SBNav({ children }) {
  return (
    <nav className={styles.sidebarNav}>
      <ul className={styles.sidebarUl}>
        {children}
      </ul>
    </nav>
  )
}
