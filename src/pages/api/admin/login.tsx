import requestIp from "request-ip";
import mysql from "mysql";
import { NextApiRequest, NextApiResponse } from "next";
import {
  mysqlConnect,
  mysqlDevConnect,
  develop,
  developError,
} from "../../../env/config.json";
import { connect } from "http2";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const body = req.body;
  const badIP = "Bad IP";
  const ip = requestIp.getClientIp(req);
  const ipReg = /.+192\.168\.3\.[0-9]{1,3}.+/;
  if (!ipReg.test(ip)) {
    return res.status(400).json({ isLoginSucceeded: false, error: badIP });
  }
  const loginFailed = "Login failed.";
  const connection = mysql.createConnection(
    develop ? mysqlDevConnect : mysqlConnect
  );

  const errorMessage = "SQLError";
  connection.query(
    "select * from sql_admin_users where username = ? and password = md5(?)",
    [body.user, body.password],
    (error, results, fields) => {
      if (error) {
        if (developError) {
          return res.status(500).json({ isLoginSucceeded: false, error: error.message });
        } else {
          return res.status(500).json({ isLoginSucceeded: false, error: errorMessage });
        }
      }
      if (results.length === 0) {
        return res.status(200).json({ isLoginSucceeded: false, error: loginFailed });
      }
      return res.status(200).json({ isLoginSucceeded: true });
    }
  )
}
