import { NextPage } from "next";
import styles from "../styles/components/Sidebar.module.scss";
import SidebarContents from "./sidebarContents";

const Sidebar: NextPage = () => {
  return (
    <div id="sidebar" className={styles.sidebar}>
      <SidebarContents />
    </div>
  );
}

export default Sidebar;
