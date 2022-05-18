import Link from "next/link";
import styles from "../styles/Sidebar.module.scss";
import { sidebarContents } from "../env/vars.json";
const staticPages: object = sidebarContents.StaticPages;

export default function SidebarContents() {
  return (
    <div className={styles.sidebarContents}>
      <SidebarLogo />
      <StaticPages />
    </div>
  );
}

function SidebarLogo() {
  return (
    <div className={styles.sidebarLogo}>
      <Link href="/">Hack Util Apps</Link>
    </div>
  );
}

function StaticPages() {
  return (
    <div className={styles.staticPages}>
      <SBNav>
        {Object.keys(staticPages).forEach((key) => {
          return (
            <li key={key}>
              <Link href={staticPages[key]}>
                <a>{key}</a>
              </Link>
            </li>
          );
        })}
      </SBNav>
    </div>
  );
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
      <ul className={styles.sidebarUl}>{children}</ul>
    </nav>
  );
}
