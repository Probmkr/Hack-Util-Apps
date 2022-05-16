import styles from "../styles/Footer.module.scss";
import Link from "next/link";
import { changeThemeTo } from "./functions";

export default function FooterContents() {
  return (
    <div className={styles.footerContents}>
      <FooterTop />
      <FooterBottom />
    </div>
  );
}

function FooterTop() {
  return (
    <div className={styles.footerTop}>
      <FooterTopLeft />
      <FooterTopRight />
    </div>
  );
}

function FooterTopLeft() {
  return (
    <div className={styles.footerLeft}>
      {/* aaa
      <br />
      aaa
      <br />
      aaa
      <br />
      aaa
      <br />
      aaa
      <br />
      aaa
      <br />
      aaa
      <br />
      aaa
      <br />
      aaa
      <br />
      aaa
      <br /> */}
    </div>
  );
}

function FooterTopRight() {
  return <div className={styles.footerRight}></div>;
}

function FooterBottom() {
  return (
    <div className={styles.footerBottom}>
      <div className={styles.copyright}>
        <span><span className="cursor-pointer" onClick={() => {changeThemeTo("communism-mode")}}>©</span> 2022 Probmkr All Rights Reserved.</span>
      </div>
    </div>
  );
}


// vim: ft=typescript
