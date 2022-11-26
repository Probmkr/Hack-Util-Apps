const express = require("express");
const next = require("next");
const https = require("https");
const fs = require("fs");
require("dotenv").config();

// env about server
const envHTTPS = process.env.HTTPS === "true";
const isProduction = process.env.NODE_ENV === "production";
const DevHTTPPort = parseInt(process.env.DEV_HTTP_PORT, 10) || 3001;
const DevHTTPSPort = parseInt(process.env.DEV_HTTPS_PORT, 10) || 3002;
const ProductHTTPPort = parseInt(process.env.HTTP_PORT, 10) || 3080;
const ProductHTTPSPort = parseInt(process.env.HTTPS_PORT, 10) || 3443;
const HTTPPort = (isProduction && ProductHTTPPort) || DevHTTPPort;
const HTTPSPort = (isProduction && ProductHTTPSPort) || DevHTTPSPort;
const customPort = parseInt(process.env.PORT, 10);
const port = customPort || (envHTTPS && HTTPSPort) || HTTPPort;
const host = "0.0.0.0";

// env about config
const CreateConfig = process.env.AUTO_CREATE_CONFIG;
if (CreateConfig) {
  (async () => {
    const SQLHost = process.env.MYSQL_HOST;
    const SQLUser = process.env.MYSQL_USER;
    const SQLPass = process.env.MYSQL_PASS;
    const SQLDB = process.env.MYSQL_DB;
    const DevSQLHost = process.env.DEV_MYSQL_HOST;
    const DevSQLUser = process.env.DEV_MYSQL_USER;
    const DevSQLPass = process.env.DEV_MYSQL_PASS;
    const DevSQLDB = process.env.DEV_MYSQL_DB;
    const UseDevelop = process.env.USE_DEVELOP;
    const DevelopError = process.env.DEVELOP_SHOW_ERROR;

    const configText = `\
import { MyConfig } from './config.d';

const Config: MyConfig = {

  mysqlConnect: {
    host: "${SQLHost}",
    user: "${SQLUser}",
    password: "${SQLPass}",
    database: "${SQLDB}",
  },
  mysqlDevConnect: {
    host: "${DevSQLHost}",
    user: "${DevSQLUser}",
    password: "${DevSQLPass}",
    database: "${DevSQLDB}",
  },
  develop: ${Boolean(UseDevelop)},
  developError: ${Boolean(DevelopError)},
};

export default Config;
`;
    fs.writeFileSync("src/env/config.tsx", configText, "utf-8")
    console.log("Config file has been written.")
  })();
}

// setup Next.js app
const app = next({
  dev: !isProduction,
});
const nextHandler = app.getRequestHandler();

// start server
(async () => {
  await app.prepare();
  const expressApp = express();

  expressApp.all("*", (req, res) => nextHandler(req, res));

  const hasCertificates =
    fs.existsSync("./certificates/fullchain.pem") &&
    fs.existsSync("./certificates/privkey.pem");
  console.log(hasCertificates);
  const useHTTPS = envHTTPS && hasCertificates;

  if (useHTTPS) {
    const certFilePath =
      process.env.CERT_FILE_PATH || "./certificates/fullchain.pem";
    const certKeyFilePath =
      process.env.KEY_FILE_PATH || "./certificates/privkey.pem";

    const options = {
      cert: fs.readFileSync("./certificates/fullchain.pem"),
      key: fs.readFileSync("./certificates/privkey.pem"),
    };
    const server = https.createServer(options, expressApp);
    const redirectServer = express();
    redirectServer.all("*", (req, res) => {
      res.redirect(`https://${req.headers.host}${req.url}`);
    });
    redirectServer.listen(HTTPPort, () => {
      console.log(
        `Redirect server listening on port ${HTTPPort} for non-HTTPS requests`
      );
    });
    server.listen(port, host, (err) => {
      if (err) throw err;
      console.log(`> Ready on https://${host}:${port}`);
    });
  } else {
    expressApp.listen(port, host, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://${host}:${port}`);
    });
  }
})();
