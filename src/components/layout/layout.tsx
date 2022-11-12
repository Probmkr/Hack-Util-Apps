import Head from "next/head";
import Script from "next/script";
import { useEffect } from "react";
import { NextPage } from "next";
import Header from "../global/header";
import Footer from "../global/footer";
import DarkModeButton from "../global/darkModeButton";
import Sidebar from "../global/sidebar";
import styles from "../../styles/components/Layout.module.scss";
import { initialTheme } from "../../lib/dom/themeControl";
import Vars from "../../env/vars";
import { useRouter } from "next/router";

const Layout: NextPage<{
  children?: React.ReactNode;
  home?: boolean;
  pageTitle: string;
  description?: string;
  noHeader?: boolean;
  noFooter?: boolean;
  noDarkModeButton?: boolean;
  ogCustomImageURL?: string;
  ogCustomImageParam?: string;
  ogTheme?: string;
}> = ({
  children,
  home = false,
  pageTitle,
  description = Vars.defaultDescription,
  noHeader = false,
  noFooter = false,
  noDarkModeButton = false,
  ogCustomImageURL = null,
  ogCustomImageParam = null,
  ogTheme = "dark",
}) => {
  useEffect(() => {
    initialTheme();
  });
  const router = useRouter();
  const pagePath = router.basePath;
  const title = home
    ? Vars.siteTitle + " | " + Vars.defaultDescription
    : pageTitle + " | " + Vars.siteTitle;

  useEffect(() => {
    const headEle = document.head;
    const siteHost = location.protocol + "//" + location.host;
    const pageURL = location.href;
    let ogImageURLTemp;
    console.log(siteHost);
    console.log(location.href);
    if (ogCustomImageParam) {
      ogImageURLTemp =
        siteHost +
        "/api/ogp/" +
        encodeURI(ogCustomImageParam) +
        "?theme=" +
        encodeURI(ogTheme);
    } else if (ogCustomImageURL) {
      ogImageURLTemp = ogCustomImageURL;
    } else {
      ogImageURLTemp =
        siteHost +
        "/api/ogp/" +
        encodeURI(pageTitle || "ウェブアプリ集") +
        "?theme=" +
        encodeURI(ogTheme);
    }
    const ogImageEle = document.createElement("meta");
    ogImageEle.setAttribute("property", "og:image");
    ogImageEle.setAttribute("contant", ogImageURLTemp);
    headEle.appendChild(ogImageEle);
    const pageURLEle = document.createElement("meta");
    pageURLEle.setAttribute("property", "og:url");
    pageURLEle.setAttribute("content", pageURL);
    headEle.appendChild(pageURLEle);
  }, [0]);

  return (
    <>
      <div id="container" className={`${styles.container} flex flex-column`}>
        <Script
          src="https://unpkg.com/hotkeys-js/dist/hotkeys.min.js"
          strategy="afterInteractive"
        ></Script>
        <Head>
          <title>{title}</title>
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1.0"
          />
          <meta name="description" content={description} />
          {/* <meta property="og:url" content={pageURL} /> */}
          {/* <meta property="og:image" content={ogImageURL} /> */}
          <meta property="og:title" content={title} />
          <meta property="og:site_name" content={Vars.siteTitle} />
          <meta property="og:description" content={pageTitle} />
          <meta property="og:type" content="website" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:image:alt" content={title} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:site" content={Vars.twitterAccount} />
          <meta name="twitter:creator" content={Vars.twitterAccount} />
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
