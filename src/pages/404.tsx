import Layout from "../components/layout/layout";
import Image from "next/image";
import styles from "../styles/errorPages/404.module.scss";

export default function My404() {
  return (
    <Layout pageTitle="404">
      <h1>404</h1>
      <Image src="/images/ProbmkrIcon.svg" alt="404 Icon" width={200} height={200} className={styles.image}></Image>
      <p>おいそこの君。 URL 直で入力しただろw</p>
      <p>自分をあまり過信するなよww</p>
      <p>（なお、管理者は自分のミスの可能性もあるとは考えないようだ。）</p>
    </Layout>
  );
}
