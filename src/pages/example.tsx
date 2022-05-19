import styles from "../styles/ColorTest.module.scss";
import Layout from "../components/layout";
import Link from "next/link";
import { removeClasses } from "../lib/functions";
import { grayScaleColors } from "../env/vars.json";

let nowBGColor: number = 0;

export default function ColorTest() {
  const colorsBoxes = [];
  grayScaleColors.forEach((color) => {
    colorsBoxes.push(
      <div
        key={color}
        onClick={() => {
          changeBackgroundColorTo(color);
        }}
        className={`${styles.colorTestBox} ${color} button`}
      >
        <span className={styles.colorWhite}>{color}</span>
        <span className={styles.colorBlack}>{color}</span>
      </div>
    );
  });

  return (
    <Layout pageTitle="Color Test">
      <Link href="/">go to top</Link>
      <h1>This page is a color test page.</h1>
      <div className="flex flex-column center width-max">
        <h2>Gray Scale</h2>
        <div className="flex flex-column center">
          <button onClick={changeBackgroundColor}>
            Change background color
          </button>
          <button onClick={changeTextColor}>Change text color</button>
          <button onClick={() => {removeClasses("body", [...grayScaleColors, "light"]);}}>Reset to default</button>
        </div>
        <div className={styles.colorTestBoxContainer}>{colorsBoxes}</div>
      </div>
      <div className="flex flex-column center">
        <h2>Link Color</h2>
        <Link href="">This is a link.</Link>
      </div>
    </Layout>
  );
}

function changeBackgroundColor() {
  nowBGColor++;
  // document
  //   .querySelector("body")
  //   .classList.remove(...grayScaleColors);
  // document
  //   .querySelector("header")
  //   .classList.remove(...grayScaleColors);
  removeClasses("body", grayScaleColors);
  removeClasses("header", grayScaleColors);
  document
    .querySelector("body")
    .classList.add(grayScaleColors[nowBGColor % grayScaleColors.length]);
  document
    .querySelector("header")
    .classList.add(grayScaleColors[nowBGColor % grayScaleColors.length]);
}

function changeBackgroundColorTo(color: string) {
  removeClasses("body", grayScaleColors);
  document.querySelector("body").classList.add(color);
}

function changeTextColor() {
  document.querySelector("body").classList.toggle("light");
}
