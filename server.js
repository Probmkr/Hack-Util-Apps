const express = require("express");
const next = require("next");
const https = require("https");
const fs = require("fs");
require("dotenv").config();

const envHTTPS = process.env.HTTPS === "true";
const isProduction = process.env.NODE_ENV === "production";
const DevHTTPPort = (isProduction && 3080) || parseInt(process.env.DEV_HTTP_PORT, 10) || 3001;
const DevHTTPSPort = (isProduction && 3443) || parseInt(process.env.DEV_HTTPS_PORT, 10) || 3002;
const HTTPPort =
  (isProduction && process.env.HTTP_PORT) || DevHTTPPort;
const HTTPSPort =
  (isProduction && process.env.HTTPS_PORT) || DevHTTPSPort;
const customPort = parseInt(process.env.PORT, 10);
const port = customPort || (envHTTPS && HTTPSPort) || HTTPPort;
const host = "0.0.0.0";

const app = next({
  dev: !isProduction,
});
const handle = app.getRequestHandler();

(async () => {
  await app.prepare();
  const expressApp = express();

  expressApp.get("*", (req, res) => handle(req, res));

  const hasCertificates =
    fs.existsSync("./certificates/fullchain.pem") &&
    fs.existsSync("./certificates/privkey.pem");
  console.log(hasCertificates);
  const useHTTPS = envHTTPS && hasCertificates;

  if (useHTTPS) {
    const certFilePath = process.env.CERT_FILE_PATH || "./certificates/fullchain.pem";
    const certKeyFilePath = process.env.CERT_KEY_FILE_PATH || "./certificates/privkey.pem";

    const options = {
      cert: fs.readFileSync("./certificates/fullchain.pem"),
      key: fs.readFileSync("./certificates/privkey.pem"),
    };
    const server = https.createServer(options, expressApp);
    const redirectServer = express();
    redirectServer.get("*", (req, res) => {
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
