import styles from "../../styles/components/Footer.module.scss";
import Link from "next/link";
import changeThemeTo from "../../lib/dom/themeControl";
import SocialIcons from "../svgs/socialIcon";

const FooterContents = () => {
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

function FooterTopRight() {
  return <div className={styles.footerTopRight}></div>;
}

function FooterTopLeft() {
  return (
    <div className={styles.footerTopLeft}>
      <FooterSNSIconNav />
    </div>
  );
}

function FooterBottom() {
  return (
    <div className={styles.footerBottom}>
      <FooterCopyright />
    </div>
  );
}

function FooterSNSIconNav() {
  return (
    <nav className={styles.SNSIconNav}>
      <ul className={styles.SNSIconList}>
        <UserIconLink className={styles.Website} href="https://www.probmkr.com">
          {SocialIcons["website"]}
        </UserIconLink>
        <UserIconLink className={styles.BLOG} href="https://blog.probmkr.com">
          {SocialIcons["blog"]}
        </UserIconLink>
        <UserIconLink
          className={styles.SNSGithub}
          href="https://github.com/Probmkr"
        >
          {SocialIcons["github"]}
        </UserIconLink>
      </ul>
    </nav>
  );
}

function UserIconLink({ children, href, className }) {
  return (
    <li className={className}>
      <a href={href} target="_blank" rel="noreferrer">
        {children}
      </a>
    </li>
  );
}

function FooterCopyright() {
  return (
    <div className={styles.copyright}>
      <span>
        <span
          className="cursor-pointer"
          onClick={() => {
            // changeThemeTo("communism-mode");
            changeThemeTo("communism-mode");
          }}
        >
          ©
        </span>{" "}
        {new Date().getFullYear()} Probmkr All Rights Reserved.
      </span>
    </div>
  );
}

// vim: ft=typescript

export default FooterContents;
