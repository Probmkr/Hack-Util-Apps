const express = require("express");
const next = require("next");
const https = require("https");
const fs = require("fs");
require("dotenv").config();

const envHTTPS = process.env.HTTPS === "true";
const DevHTTPPort = parseInt(process.env.DEV_HTTP_PORT, 10) || 3001;
const DevHTTPSPort = parseInt(process.env.DEV_HTTPS_PORT, 10) || 3002;
const isProduction = process.env.NODE_ENV === "production";
const HTTPPort =
  (isProduction && process.env.HTTP_PORT) || DevHTTPPort;
const HTTPSPort =
  (isProduction && process.env.HTTPS_PORT) || DevHTTPSPort;
const customPort = parseInt(process.env.PORT, 10);
// const port = parseInt(process.env.PORT, 10) || 3002 || isProduction || 3001;
const port = customPort || (envHTTPS && HTTPSPort) || HTTPPort;
// const host = process.env.HOST || "apps.probmkr.com";
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
    const options = {
      cert: fs.readFileSync("./certificates/fullchain.pem"),
      key: fs.readFileSync("./certificates/privkey.pem"),
    };
    const server = https.createServer(options, expressApp);
    const redirectServer = https.createServer(
      {
        SNICallback: (domain, cb) => {
          cb(null, options.cert);
        },
      },
      (req, res) => {
        res.writeHead(301, {
          Location: `https://${req.headers.host}${req.url}`,
        });
        res.end();
      }
    );
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
