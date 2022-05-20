import Layout from "../../components/layout";
import { siteTitle } from "../../env/vars.json";

export default function Page() {
  return (
    <Layout pageTitle="Contact">
      <h1>送信完了</h1>
      <p>この都度は、お問い合わせありがとうございました。</p>
      <p>
        返信につきましては、メールアドレスが正しければ最短二日で返信いたします。
      </p>
      <p>では、引き続き <span className="site-title">{siteTitle}</span> をお楽しみください。</p>
    </Layout>
  );
}
