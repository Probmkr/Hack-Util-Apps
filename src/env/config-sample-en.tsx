/////////////// WARNING: ///////////////
// Don't modify this file directly.
// Copy this file to `src/env/config.tsx`
// and modify the copy.
/////////////////////////////////////////

// type of Config Object
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

// Config Object
const Config: MyConfig = {
  // Set your site host with http:// or https://
  siteHost: "http://localhost",
  // Set your site FDQN without http:// or https://
  siteFDQN: "localhost",
  // This setting will not be used now.
  certDir: "Your HTTPS certificate directory",
  mysqlConnect: {
    // Set your MySQL connection settings.
    host: "localhost",
    user: "user",
    password: "pass",
    database: "user",
  },
  mysqlDevConnect: {
    // Set your MySQL connection settings for develop mode.
    // This setting will be used when you set develop as true.
    host: "localhost",
    user: "user",
    password: "pass",
    database: "user",
  },
  // Set develop mode.
  // If develop is true, mysqlDevConnect will be used instead of mysqlConnect.
  develop: false,
  // If developError is true,
  // error message will be displayed with detail instead of SQL Error.
  developError: false,
};

export default Config;
