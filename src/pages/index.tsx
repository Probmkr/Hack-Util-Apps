import styles from "../styles/Home.module.scss";
import Layout from "../components/layout";
import { siteTitle } from "../env/vars.json";
import Link from "next/link";

export default function Home() {
  return (
    <Layout home pageTitle="Welcome!" noFooter={false}>
      <h1>
        Welcome to
        <span className={styles.logo}>
          {" "}
          <span className={styles.nobr}>{siteTitle}</span>!
        </span>
      </h1>
      <p>
        <Link href="/example">color test page</Link>
      </p>
    </Layout>
  );
}
