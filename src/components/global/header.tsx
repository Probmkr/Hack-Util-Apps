import { NextPage } from "next";
import styles from "../../styles/components/Header.module.scss";
import HeaderContents from "./headerContents";

const Header: NextPage<{
  title: string;
}> = ({ title }) => {
  return (
    <header id="header" className={styles.header}>
      <HeaderContents title={title} />
    </header>
  );
};

export default Header;
