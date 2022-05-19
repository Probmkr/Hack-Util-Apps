import Layout from "../../components/layout";

export default function Page() {
  return (
    <Layout pageTitle="About">
      <h1>このウェブサイトについて</h1>
      <h2>現状</h2>
      <p>このウェブサイトは、現時点では、全て Probmkr 一人の手によって作られています。</p>
      <p>また、現在はまだ作成途中です。基本的な機能すらできていません。</p>
      <h2>理想の姿</h2>
      <p>このウェブサイトは、プログラミングや<a className="mouseover-trigger link" href="https://kotobank.jp/word/%E3%83%8F%E3%83%83%E3%82%AD%E3%83%B3%E3%82%B0-7366" target="_blank" rel="noreferrer">ハッキング<span className="mouseover-box">ハッキングの定義は、”コンピュータシステムやネットワークに関する高い知識や技術を持つ人が、プログラムや通信システムの解析、改良、改造、構築などに取り組むこと”です。クラッキングと勘違いしないでください。</span></a>を勉強している方から、<br />すでに実務で使えるほど熟練している方でも使えるような便利なウェブアプリを提供するつもりです。</p>
    </Layout>
  )
}
