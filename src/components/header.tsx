import styles from "../styles/Header.module.scss";
import HeaderContents from "./headerContents";

export default function Header(props) {
  return (
    <header id="header" className={styles.header}>
      <HeaderContents title={props.title} />
    </header>
  );
}
