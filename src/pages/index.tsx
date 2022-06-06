import styles from "../styles/pages/Home.module.scss";
import Layout from "../components/layout";
import Vars from "../env/vars";
import Link from "next/link";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Layout home pageTitle="Welcome!" noFooter={false}>
      <h1>
        <span className={styles.logo}>
          <span className={styles.nobr}>{Vars.siteTitle}</span> へようこそ!
        </span>
      </h1>
      <p>初めての方は...</p>
      <p>
        <Link href="/static/about">このサイトについて</Link>をお読みください。
      </p>
    </Layout>
  );
}

export default Home;
