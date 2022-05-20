import Link from "next/link";
import styles from "../styles/Sidebar.module.scss";
import { sidebarContents } from "../env/vars.json";
import { useRouter } from "next/router";
const staticPagesData: object = sidebarContents.StaticPages;

export default function SidebarContents() {
  return (
    <div className={styles.sidebarContents}>
      <SidebarLogo />
      <hr />
      <StaticPages />
      <hr />
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
  const router = useRouter();
  const staticPages = Object.keys(staticPagesData).map((key) => {
    const page = staticPagesData[key];
    const isThisPage = router.pathname === page.url;
    return (
      <li key={key} className={isThisPage ? styles.selected : null}>
        <Link href={isThisPage ? "#" : page.url}>
          <a>{page.title}</a>
        </Link>
      </li>
    );
  });
  return (
    <div className={styles.staticPages}>
      <SBNav>{staticPages}</SBNav>
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
