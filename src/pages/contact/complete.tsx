import Layout from "../../components/layout";
import Vars from "../../env/vars";

export default function ContactCompletePage() {
  return (
    <Layout pageTitle="Contact">
      <h1>送信完了</h1>
      <p>この都度は、お問い合わせありがとうございました。</p>
      <p>
        返信につきましては、メールアドレスが正しければ最短二日で返信いたします。
      </p>
      <p>では、引き続き <span className="site-title">{Vars.siteTitle}</span> をお楽しみください。</p>
    </Layout>
  );
}
