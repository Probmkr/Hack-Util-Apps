import { NextPage } from "next";
import { useEffect, useState } from "react";
import Layout from "../../components/layout/layout";
import styles from "../../styles/pages/FontTest.module.scss";

const FontTest: NextPage<{}, {}> = () => {
  useEffect(() => {
    keys.forEach((key) => {
      const target = document.querySelectorAll(`#${key}`);
      const codeEle = document.createElement("code");
    });
  });

  const elements = [];
  const keys = [];
  Object.keys(styles).forEach((key) => {
    elements.push(
      <div key={key} id={key} className={styles[key]}>
        <h3>Font test for {key}.</h3>
        <p>abcdefghijklmnopqrstuvwxyz.</p>
        <p>ABCDEFGHIJKLMNOPQRSTUVWXYZ.</p>
      </div>
    );
    keys.push(key);
  });
  return (
    <Layout pageTitle="page title">
      <h1>hello, font</h1>
      <h2>Font tests are bellow.</h2>
      {elements}
    </Layout>
  );
};

export default FontTest;
