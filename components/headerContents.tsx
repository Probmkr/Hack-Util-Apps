import styles from "../styles/Header.module.scss";
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
    <div className={styles.headerTitle}>
      <span>{props.title}</span>
    </div>
  );
}

function SideBarToggleButton() {
  return (
    <div>
      <div
        id="sidebarToggleButton"
        className={styles.sidebarToggleButton}
        onClick={sidebarToggleButtonClicked}
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
      <Image
        className={styles.userIconImg}
        src="/default-user-icon.svg"
        width={36}
        height={36}
        alt="user"
      />
      {/* <span>not implemented yet</span> */}
    </div>
  );
}

function sidebarToggleButtonClicked() {
  console.log("sidebarToggleButtonClicked");
  const target = document.getElementById("sidebarToggleButton");
  target.classList.toggle(styles.active);
}
