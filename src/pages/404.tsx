import Layout from "../components/layout/layout";
import Image from "next/image";
import styles from "../styles/errorPages/404.module.scss";

interface AnnoyingPhrases {
  first: string;
  second: string;
  third: string;
}

const annoyingPhrases: AnnoyingPhrases[] = [
  {
    first: "このページは存在しません。",
    second: "指定された URL が正しくない場合に表示されます。",
    third:
      "もし、リンク先が間違っていた場合は<a href=\"/contact\">コンタクトフォーム</a>にて連絡してくださると嬉しいです。",
  },
  {
    first: "おいそこの君。 URL 直で入力しただろw",
    second: "自分をあまり過信するなよww",
    third: "（なお、管理者は自分のミスの可能性もあるとは考えないようだ。）",
  },
  {
    first: "おいそこの君、イキって URL 直で入力しただろw",
    second: "世の中そんな甘くないんだなはっはっはwww",
    third:
      "（え？制作者がミスったんじゃないかって？そんなの知らねえさはっはっは）",
  },
  {
    first: "URL 間違ってるぜ。",
    second: "まあ、そんな時もあるさ。",
    third: "もし俺（制作者）がミスってたらすまんな。",
  },
];

export default function My404() {
  const sending =
    // annoyingPhrases[Math.floor(Math.random() * annoyingPhrases.length)];
    annoyingPhrases[0];
  return (
    <Layout pageTitle="404">
      <h1>404</h1>
      <Image
        src="/images/ProbmkrIcon.svg"
        alt="404 Icon"
        width={200}
        height={200}
        className={styles.image}
      ></Image>
      <p dangerouslySetInnerHTML={{ __html: sending.first }}></p>
      <p dangerouslySetInnerHTML={{ __html: sending.second }}></p>
      <p dangerouslySetInnerHTML={{ __html: sending.third }}></p>
    </Layout>
  );
}
