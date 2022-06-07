import requestIp from "request-ip";
import mysql from "mysql2/promise";
import { NextApiRequest, NextApiResponse } from "next";
import cookie from "cookie";
import Config from "../../../env/config";
import Vars from "../../../env/vars";
import md5hash from "../../../lib/auth/md5hash";
import randomString from "../../../lib/auth/randomString";
import { MysqlError } from "mysql";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  setTimeout(async () => {
    const body = req.body;
    const badIP = "Bad IP";
    const ip = requestIp.getClientIp(req);
    const ipReg = /.*192\.168\.3.*/;
    if (!ipReg.test(ip)) {
      return res
        .status(400)
        .json({ isLoginSucceeded: false, error: badIP, ip: ip });
    }
    const loginFailed = "Login failed.";

    if (!body.user || !body.password) {
      return res
        .status(400)
        .json({ isLoginSucceeded: false, error: loginFailed });
    }

    const connection = await mysql.createConnection(
      Config.develop ? Config.mysqlDevConnect : Config.mysqlConnect
    );

    const SQLErrorMessage = "SQLError";
    try {
      const checkPasswdSQL =
        "select * from sql_admin_users where username = ? and password = ?";
      await connection.connect();
      await connection.beginTransaction();
      const [rows, fields] = await connection.execute(checkPasswdSQL, [
        body.user,
        md5hash(body.password),
      ]);
      if (Array.isArray(rows) && rows.length === 0) {
        return res.status(200).json({
          isLoginSucceeded: false,
          error: loginFailed,
        });
      }

      const loginToken = randomString(Vars.lengthOfLoginToken);
      const userID = rows[0].id;
      const resetTokenSQL = "delete from sql_admin_sessions where user_id = ?";
      const insertTokenSQL =
        "insert into sql_admin_sessions (user_id, session_token, expires) values (?, ?, ?)";
      res.setHeader(
        "Set-Cookie",
        cookie.serialize("loginToken", "hahaha", {
          expires: new Date(2030, 1, 1),
          path: "/",
        })
      );
      await connection.query(resetTokenSQL, [userID]);
      await connection.query(insertTokenSQL, [
        userID,
        loginToken,
        new Date(Date.now() + 60 * 60 * 1000),
      ]);
      const cookieOptions = {
        expires: new Date(Date.now() + 60 * 60 * 1000),
        httpOnly: true,
        sameSite: "strict",
        path: "/",
      };
      await connection.commit();
      res.setHeader(
        "Set-Cookie",
        cookie.serialize("AdamLT", loginToken, cookieOptions)
      );
      return res.status(200).json({
        isLoginSucceeded: true,
      });
    } catch (e) {
      if (Config.developError) {
        return res
          .status(500)
          .json({ isLoginSucceeded: false, error: e.message });
      } else {
        return res
          .status(500)
          .json({ isLoginSucceeded: false, error: SQLErrorMessage });
      }
    } finally {
      await connection.end();
    }
  }, 0);
}
