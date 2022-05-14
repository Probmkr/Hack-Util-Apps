import styles from "../styles/Home.module.scss";
import Layout from "../components/layout";
import { siteTitle } from "../env/vars.json";

export default function Home() {
  return (
    <Layout pageTitle={siteTitle}>
      <h1>
        Welcome to
        <span className={styles.logo}>
          {" "}
          <span className={styles.nobr}>{siteTitle}</span>!
        </span>
      </h1>
    </Layout>
  );
}
