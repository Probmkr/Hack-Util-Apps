import Layout from "../../components/layout";
import styles from "../../styles/contact/Contact.module.scss";
import { categories } from "../../env/contactCategories.json";
import Router from "next/router";
import Script from "next/script";
import hotkeys from "hotkeys-js";
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    hotkeys("ctrl+enter,cmd+return", (event, handler) => {
      event.preventDefault();
      document.getElementById("submit").click();
    });
  });

  return (
    <Layout pageTitle="Contact">
      <Script src="/script/contact/script.js" strategy="afterInteractive"></Script>
      <h1>コンタクトフォーム</h1>
      <p>何かあればお問い合わせください。</p>
      <p>
        問い合わせて2週間経っても返信が来ない場合は、
        <br />
        公式ディスコードサーバーに来て直接言う事もできます
      </p>
      <ul className={styles.ul}>
        例）
        <li>バグが発生する</li>
        <li>UI の改善案を提案する</li>
        <form
          className={styles.contactForm}
          action="/api/contact-form"
          method="post"
          onSubmit={handleSubmit}
        >
          <div className={styles.inputs}>
            <label className={styles.required} htmlFor="name">
              ニックネーム：
            </label>
            <input type="text" name="name" id="name" maxLength={255} required />
          </div>
          <div className={styles.inputs}>
            <label htmlFor="email">メールアドレス：</label>
            <input type="email" name="email" id="email" maxLength={255} />
          </div>
          <div className={styles.inputs}>
            <label htmlFor="subject">カテゴリ：</label>
            <select name="category" id="category">
              {categories.map((category) => {
                return (
                  <option key={category.key} value={category.key}>
                    {category.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className={styles.inputs}>
            <label className={styles.required} htmlFor="subject">
              件名：
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              maxLength={255}
              required
            />
          </div>
          <div className={styles.inputs}>
            <label className={styles.required} htmlFor="message">
              メッセージ：
              <span className={styles.messageLetterCountOuter}>
                <span
                  id="messageLetterCount"
                  className={styles.messageLetterCount}
                ></span>{" "}
                文字
              </span>
            </label>
            <textarea
              placeholder="3000文字以内で入力してください。"
              name="message"
              id="message"
              required
            ></textarea>
          </div>
          <input type="submit" id="submit" value="送信" className={styles.submit} />
        </form>
      </ul>
    </Layout>
  );
}

async function handleSubmit(event) {
  event.preventDefault();

  const data = {
    name: event.target.name.value,
    email: event.target.email.value,
    category: event.target.category.value,
    subject: event.target.subject.value,
    message: event.target.message.value,
  };

  const enterMessageUpTo3000 = data.message.length > 3000;
  if (data.message.length > 3000) {
    alert("3000文字以内で入力してください。");
    return;
  }

  const confirmMessage = "送信しますか？";
  const confirmSend = window.confirm(confirmMessage);

  if (!confirmSend) {
    return;
  }
  const nameElement = document.getElementById("name") as HTMLInputElement;
  nameElement.value = null;
  const emailElement = document.getElementById("email") as HTMLInputElement;
  emailElement.value = null;
  const categoryElement = document.getElementById(
    "category"
  ) as HTMLInputElement;
  categoryElement.value = null;
  const subjectElement = document.getElementById("subject") as HTMLInputElement;
  subjectElement.value = null;
  const messageElement = document.getElementById("message") as HTMLInputElement;
  messageElement.value = null;

  const JSONData = JSON.stringify(data);

  const endpoint = "/api/contact";

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSONData,
  };

  const response = await fetch(endpoint, options);
  const result = await response.json();
  // Router.push("/contact/complete");
  response.ok
    ? Router.push("/contact/complete")
    : Router.push(
        `/contact/error?error=${result.error}&status=${response.status}`
      );
}
