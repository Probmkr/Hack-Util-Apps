import styles from "../../styles/components/Footer.module.scss";
import FooterContents from "./footerContents";

const Footer = () => {
  return (
    <footer id="footer" className={styles.footer}>
      <FooterContents />
    </footer>
  );
}

export default Footer;
