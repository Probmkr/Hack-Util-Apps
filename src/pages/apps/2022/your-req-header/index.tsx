import Script from "next/script";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import json from "highlight.js/lib/languages/json";
// import "highlight.js/styles/github.css";
import { useEffect, useState } from "react";
import Layout from "../../../../components/layout";
import ClipboardIcon from "../../../../components/svgs/clipboard";
import styles from "./style.module.scss";

export default function YourReqHeader({ highlighted }) {
  return (
    <Layout pageTitle="Your Request Header">
      <h1 className={styles.after}>あなたのリクエストヘッダー</h1>
      <p>
        以下のテキストは、あなたがこのページにアクセスするときのリクエストヘッダーです。
      </p>
      <div
        className="pre hljs language-javascript"
        id="requestHeader"
        dangerouslySetInnerHTML={{ __html: highlighted }}
      ></div>
      <ClipboardIcon targetID="requestHeader" />
    </Layout>
  );
}

export function getServerSideProps(context) {
  hljs.registerLanguage("javascript", javascript);
  hljs.registerLanguage("json", json);
  const headers = JSON.stringify(context.req.headers);
  const highlighted = hljs.highlight("json", headers, true).value;
  return { props: { highlighted } };
}
