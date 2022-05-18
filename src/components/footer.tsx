import styles from "../styles/Footer.module.scss";
import FooterContents from "./footerContents";

export default function Footer() {
  return (
    <footer id="footer" className={styles.footer}>
      <FooterContents />
    </footer>
  );
}
