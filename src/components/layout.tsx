import Head from "next/head";
import Script from "next/script";
import { useEffect } from "react";
import Header from "./header";
import Footer from "./footer";
import DarkModeButton from "./darkModeButton";
import Sidebar from "./sidebar";
import styles from "../styles/components/Layout.module.scss";
import { initialTheme } from "../lib/themeControl";
import Vars from "../env/vars";
import { NextPage } from "next";

const Layout: NextPage<{
  children?: React.ReactNode;
  home?: boolean;
  pageTitle?: string;
  noHeader?: boolean;
  noFooter?: boolean;
  noDarkModeButton?: boolean;
}> = ({
  children,
  home = false,
  pageTitle = null,
  noHeader = false,
  noFooter = false,
  noDarkModeButton = false,
}) => {
  useEffect(() => {
    initialTheme();
  });

  return (
    <>
      <div id="container" className={`${styles.container} flex flex-column`}>
        <Script
          src="https://unpkg.com/hotkeys-js/dist/hotkeys.min.js"
          strategy="afterInteractive"
        ></Script>
        <Head>
          <title>
            {home ? Vars.siteTitle : pageTitle + " | Hack Util Apps"}
          </title>
          <meta name="description" content="A web app created by Probm." />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {noHeader ? null : <Header title={pageTitle} />}
        <Sidebar />
        <div className={styles.mainContainer}>
          {noDarkModeButton ? null : <DarkModeButton />}
          <main className={styles.main}>{children}</main>
        </div>
        {noFooter ? null : <Footer />}
      </div>
    </>
  );
};

export default Layout;
