import styles from "../styles/ColorTest.module.scss";
import Layout from "../components/layout";
import Link from "next/link";

const colors = [
  "bg-true-white",
  "bg-light",
  "bg-gray-1",
  "bg-gray-2",
  "bg-gray-3",
  "bg-gray-310",
  "bg-gray-320",
  "bg-gray-330",
  "bg-gray-340",
  "bg-gray-350",
  "bg-gray-4",
  "bg-gray-5",
  "bg-dark",
  "bg-true-black",
];
let nowBGColor: number = 0;

export default function ColorTest() {
  const colorsBoxes = [];
  colors.forEach((color) => {
    console.log(color);
    colorsBoxes.push(
      <div key={color} onClick={() => {changeBackgroundColorTo(color)}} className={`${styles.colorTestBox} ${color} button`}>
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
        </div>
        <div className={styles.colorTestBoxContainer}>
          {colorsBoxes}
        </div>
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
  document
    .querySelector("body")
    .classList.remove(...colors);
  document
    .querySelector("header")
    .classList.remove(...colors);
  document.querySelector("body").classList.add(colors[nowBGColor % colors.length]);
  document.querySelector("header").classList.add(colors[nowBGColor % colors.length]);
}

function changeBackgroundColorTo(color: string) {
  document.querySelector("body").classList.remove(...colors);
  document.querySelector("body").classList.add(color);
}

function changeTextColor() {
  document.querySelector("body").classList.toggle("light");
}
