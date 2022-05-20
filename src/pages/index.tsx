import styles from "../styles/Home.module.scss";
import Layout from "../components/layout";
import { siteTitle } from "../env/vars.json";
import Link from "next/link";

export default function Home() {
  return (
    <Layout home pageTitle="Welcome!" noFooter={false}>
      <h1>
        <span className={styles.logo}>
          <span className={styles.nobr}>{siteTitle}</span> へようこそ!
        </span>
      </h1>
      <p>初めての方は...</p>
      <p>
        <Link href="/static/about">このサイトについて</Link>をお読みください。
      </p>
    </Layout>
  );
}
