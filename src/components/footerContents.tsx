import styles from "../styles/Footer.module.scss";
import Link from "next/link";
import changeThemeTo from "../lib/themeControl";

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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={styles.WebsiteIcon}
            viewBox="0 0 16 16"
          >
            <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287V1.077zM4.249 3.539c.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05c.362.184.763.349 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5h2.49zm1.4-2.741a12.344 12.344 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332zM8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.612 13.612 0 0 1 7.5 10.91V8.5H4.51zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741H8.5zm-3.282 3.696c.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.963 6.963 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872A12.63 12.63 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008h2.49zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343a7.765 7.765 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z" />
          </svg>
        </UserIconLink>
        <UserIconLink className={styles.BLOG} href="https://blog.probmkr.com">
          <svg
            className={styles.Blog}
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title />
            <g
              data-name="blog blogger blogspot post web"
              id="blog_blogger_blogspot_post_web"
            >
              <path d="M26,12H24V8a5,5,0,0,0-5-5H8A5,5,0,0,0,3,8V20a1,1,0,0,0,2,0V8A3,3,0,0,1,8,5H19a3,3,0,0,1,3,3v5a1,1,0,0,0,1,1h3a1,1,0,0,1,1,1v9a3,3,0,0,1-3,3H8a3,3,0,0,1-3-3,1,1,0,0,0-2,0,5,5,0,0,0,5,5H24a5,5,0,0,0,5-5V15A3,3,0,0,0,26,12Z" />
              <path d="M11.5,14h4a2.5,2.5,0,0,0,0-5h-4a2.5,2.5,0,0,0,0,5Zm0-3h4a.5.5,0,0,1,0,1h-4a.5.5,0,0,1,0-1Z" />
              <path d="M11.5,23h9a2.5,2.5,0,0,0,0-5h-9a2.5,2.5,0,0,0,0,5Zm0-3h9a.5.5,0,0,1,0,1h-9a.5.5,0,0,1,0-1Z" />
            </g>
          </svg>
        </UserIconLink>
        <UserIconLink
          className={styles.SNSGithub}
          href="https://github.com/Probmkr"
        >
          <svg
            className={styles.SNSGithubIcon}
            enableBackground="new 0 0 32 32"
            id="Layer_1"
            version="1.0"
            viewBox="0 0 32 32"
            xmlSpace="preserve"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <path
              clipRule="evenodd"
              d="M16.003,0C7.17,0,0.008,7.162,0.008,15.997  c0,7.067,4.582,13.063,10.94,15.179c0.8,0.146,1.052-0.328,1.052-0.752c0-0.38,0.008-1.442,0-2.777  c-4.449,0.967-5.371-2.107-5.371-2.107c-0.727-1.848-1.775-2.34-1.775-2.34c-1.452-0.992,0.109-0.973,0.109-0.973  c1.605,0.113,2.451,1.649,2.451,1.649c1.427,2.443,3.743,1.737,4.654,1.329c0.146-1.034,0.56-1.739,1.017-2.139  c-3.552-0.404-7.286-1.776-7.286-7.906c0-1.747,0.623-3.174,1.646-4.292C7.28,10.464,6.73,8.837,7.602,6.634  c0,0,1.343-0.43,4.398,1.641c1.276-0.355,2.645-0.532,4.005-0.538c1.359,0.006,2.727,0.183,4.005,0.538  c3.055-2.07,4.396-1.641,4.396-1.641c0.872,2.203,0.323,3.83,0.159,4.234c1.023,1.118,1.644,2.545,1.644,4.292  c0,6.146-3.74,7.498-7.304,7.893C19.479,23.548,20,24.508,20,26c0,2,0,3.902,0,4.428c0,0.428,0.258,0.901,1.07,0.746  C27.422,29.055,32,23.062,32,15.997C32,7.162,24.838,0,16.003,0z"
              fillRule="evenodd"
            />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
          </svg>
        </UserIconLink>
        <UserIconLink
          className={styles.SNSTwitter}
          href="https://twitter.com/probmkrnew"
        >
          <svg
            className={styles.SNSTwitterIcon}
            height="100%"
            version="1.1"
            viewBox="0 0 512 512"
            xmlSpace="preserve"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect height="400" width="400" x="56" y="56" />
            <path d="M161.014,464.013c193.208,0 298.885,-160.071 298.885,-298.885c0,-4.546 0,-9.072 -0.307,-13.578c20.558,-14.871 38.305,-33.282 52.408,-54.374c-19.171,8.495 -39.51,14.065 -60.334,16.527c21.924,-13.124 38.343,-33.782 46.182,-58.102c-20.619,12.235 -43.18,20.859 -66.703,25.498c-19.862,-21.121 -47.602,-33.112 -76.593,-33.112c-57.682,0 -105.145,47.464 -105.145,105.144c0,8.002 0.914,15.979 2.722,23.773c-84.418,-4.231 -163.18,-44.161 -216.494,-109.752c-27.724,47.726 -13.379,109.576 32.522,140.226c-16.715,-0.495 -33.071,-5.005 -47.677,-13.148l0,1.331c0.014,49.814 35.447,93.111 84.275,102.974c-15.464,4.217 -31.693,4.833 -47.431,1.802c13.727,42.685 53.311,72.108 98.14,72.95c-37.19,29.227 -83.157,45.103 -130.458,45.056c-8.358,-0.016 -16.708,-0.522 -25.006,-1.516c48.034,30.825 103.94,47.18 161.014,47.104" />
          </svg>
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
