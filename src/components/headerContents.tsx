import styles from "../styles/Header.module.scss";
import sidebarStyles from "../styles/Sidebar.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function HeaderContents(props) {
  return (
    <div className={styles.headerContents}>
      <HeaderLeft />
      <HeaderMiddle title={props.title} />
      <HeaderRight />
    </div>
  );
}

function HeaderLeft() {
  return (
    <div className={styles.headerLeft}>
      <SideBarToggleButton />
      <Title />
    </div>
  );
}

function HeaderMiddle(props) {
  return (
    <div className={styles.headerMiddle}>
      <HeaderTitle title={props.title} />
    </div>
  );
}

function HeaderRight() {
  return (
    <div className={styles.headerRight}>
      <UserIcon />
    </div>
  );
}

function HeaderTitle(props) {
  return (
    <a href="#">
      <div title="Go To Top" className={styles.headerTitle}>
        <span>{props.title}</span>
      </div>
    </a>
  );
}

function SideBarToggleButton() {
  return (
    <div>
      <div
        id="sidebarToggleButton"
        className={styles.sidebarToggleButton}
        onClick={sidebarToggleButtonClicked}
        title="Toggle Sidebar"
      >
        <div className={styles.sidebarToggleButtonArea}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}

function Title() {
  return <></>;
}

function UserIcon() {
  return (
    <div className={styles.userIcon}>
      {/* <Image
        className={styles.userIconImg}
        src="/default-user-icon.svg"
        width={36}
        height={36}
        alt="user"
      /> */}
      <svg
        className={styles.userIconImg}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        // width="36"
        // height="36"
        stroke="white"
        viewBox="0 0 600 600"
        strokeWidth="30"
        fill="none"
      >
        <title>Login</title>

        <circle cx="300" cy="300" r="265" />
        <circle cx="300" cy="230" r="115" />
        <path
          d="M106.81863443903,481.4 a205,205 1 0,1 386.36273112194,0"
          strokeLinecap="butt"
        />
      </svg>
      {/* <span>not implemented yet</span> */}
    </div>
  );
}

function sidebarToggleButtonClicked() {
  const self = document.getElementById("sidebarToggleButton");
  self.classList.toggle(styles.active);
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle(sidebarStyles.open);
}
