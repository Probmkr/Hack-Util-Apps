import Layout from "../../components/layout";
import Link from "next/link";

export default function Apps() {
  return (
    <Layout pageTitle="Apps">
      <h1>全アプリ一覧</h1>
      <p>今はまだ作成途中なので IP を表示する超簡単なアプリをどうぞ</p>
      <Link href="/apps/2022/your-ip">あなたの IP アドレス</Link>
      <Link href="/apps/2022/your-req-header">あなたのリクエストヘッダー</Link>
      <Link href="/apps/2022/ping">Ping を実行</Link>
    </Layout>
  );
}
