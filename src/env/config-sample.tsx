require("dotenv").config();

interface MyConfig {
  siteHost: string;
  siteFDQN: string;
  certDir: string;
  mysqlConnect: {
    host: string;
    user: string;
    password: string;
    database: string;
  };
  mysqlDevConnect: {
    host: string;
    user: string;
    password: string;
    database: string;
  };
  develop: boolean;
  developError: boolean;
}

// I reccomand using this config for siteHost
// この設定方法を siteHost 用に使うのをお勧めします。
//
// const isHTTPS = process.env.HTTPS === "true";
// {
//   siteHost: `http${isHTTPS ? "s" : ""}://${process.env.HOST}`,
// }

const Config: MyConfig = {
  siteHost: "http://example.com",
  siteFDQN: "example.com",
  certDir: "Your HTTPS certificate directory",
  mysqlConnect: {
    host: "localhost",
    user: "user",
    password: "pass",
    database: "user",
  },
  mysqlDevConnect: {
    host: "localhost",
    user: "user",
    password: "pass",
    database: "user",
  },
  develop: false,
  developError: false,
};

export default Config;
