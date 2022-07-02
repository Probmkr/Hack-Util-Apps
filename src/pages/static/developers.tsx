import { NextPage } from "next";
import Image from "next/image";
import Layout from "../../components/layout/layout";
import Developers from "../../env/developers";
import styles from "../../styles/pages/Developers.module.scss";
import SocialIcons from "../../components/svgs/socialIcon";

const iconSize = 80;

const DevelopersPage: NextPage<{}, {}> = () => {
  const developers = getDevelopersDOM();
  return (
    <Layout pageTitle="Developers">
      <h1 className={styles.h1}>開発者一覧</h1>
      <div className={styles.developers}>{developers}</div>
    </Layout>
  );
};

const getDevelopersDOM = () => {
  const developers = Developers.map((developer) => (
    <div key={developer.code} className={styles.developerCard}>
      <div className={styles.header}>
        <div className={styles.icon}>
          <Image
            width={iconSize}
            height={iconSize}
            src={developer.icon}
            alt={`${developer.name}'s icon image`}
          />
        </div>
        <div className={styles.content}>
          <div className={styles.name}>{developer.name}</div>
          <div className={styles.description}>{developer.description}</div>
        </div>
      </div>
      <div className={styles.SNSIcons}>
        {Object.keys(developer.SNSIcons).map((key) => {
          if (developer.SNSIcons[key]) {
            console.log(key);
            console.log(SocialIcons[key]);
            return (
              <div className={styles.SNSIcon}>
                <a
                  key={key}
                  href={developer.SNSIcons[key]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {SocialIcons[key]}
                </a>
              </div>
            );
          }
        })}
      </div>
      <div className={styles.body}>
        {developer.skills ? (
          <>
            <hr />
            <span className={styles.title}>Skills</span>
            <div className={styles.skills}>
              <ul className={styles.skillList}>
                {developer.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          </>
        ) : null}
        {developer.otherLinks ? (
          <>
            <hr />
            <span className={styles.title}>Links</span>
            <div className={styles.links}>
              {developer.otherLinks.map((link) => (
                <div key={link.url} className={styles.link}>
                  <span>{link.title}:</span>
                  <br />
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={link.description || link.title}
                  >
                    {link.url}
                  </a>
                </div>
              ))}
            </div>
          </>
        ) : null}
      </div>
    </div>
  ));
  return developers;
};

export default DevelopersPage;
