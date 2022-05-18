import styles from "../styles/Sidebar.module.scss";
import SidebarContents from "./sidebarContents";

export default function Sidebar() {
  return (
    <div id="sidebar" className={styles.sidebar}>
      <SidebarContents />
    </div>
  );
}
