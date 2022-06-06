import mysql from "mysql2/promise";
import cookie from "cookie";
import Vars from "../env/vars";
import Config from "../env/config";

interface IsLoggedIn {
  isLoggedIn: boolean;
  sqlError: boolean;
  error: string;
}

export default async function checkIsLoggedIn(loginToken) {
  if (
    loginToken === undefined ||
    loginToken.length !== Vars.lengthOfLoginToken
  ) {
    return {
      isLoggedIn: false,
      sqlError: false,
      error: "Please login.",
    } as IsLoggedIn;
  }
  const connection = await mysql.createConnection(
    Config.develop ? Config.mysqlDevConnect : Config.mysqlConnect
  );
  const SQLErrorMessage = "SQLError";
  try {
    const SQL = "select * from sql_admin_sessions where session_token = ?";
    const [rows, fields] = await connection.query(SQL, [loginToken]);
    if (Array.isArray(rows) && rows.length === 0) {
      return {
        isLoggedIn: false,
        sqlError: false,
        error: "Please login.",
      } as IsLoggedIn;
    } else if (Array.isArray(rows) && rows.length > 0) {
      return {
        isLoggedIn: true,
        sqlError: false,
        error: "",
      } as IsLoggedIn;
    }
  } catch (e) {
    if (Config.developError) {
      return {
        isLoggedIn: false,
        sqlError: true,
        error: e.message,
      } as IsLoggedIn;
    } else {
      return {
        isLoggedIn: false,
        sqlError: true,
        error: SQLErrorMessage,
      } as IsLoggedIn;
    }
  } finally {
    await connection.end();
  }
}
