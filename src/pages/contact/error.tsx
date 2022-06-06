import Layout from "../../components/layout";
import styles from "../../styles/pages/contact/Error.module.scss";
import { useRouter } from "next/router";

export default function ContactFailure() {
  const router = useRouter();
  const query = router.query;

  return (
    <Layout pageTitle="Contact">
      <h1>送信失敗</h1>
      <p>あなたのお問合せはなんらかの理由で失敗しました。</p>
      <div className={styles.justifyLeft}>
        <p>エラー内容：</p>
        <p>Status Code:</p>
          <pre>{query.status}</pre>
        <p>Error Message:</p>
          <pre>{query.error}</pre>
      </div>
    </Layout>
  );
}
