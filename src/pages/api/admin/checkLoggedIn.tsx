import { NextApiRequest, NextApiResponse } from "next";
import mysql from "mysql2/promise";
import cookie from "cookie";
import Vars from "../../../env/vars";
import Config from "../../../env/config";
import adminCheckIsLoggedIn from "../../../lib/auth/adminCheckLogin";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const result = await adminCheckIsLoggedIn(req.cookies.AdamLT);
  if (result.isLoggedIn) {
    res.status(200).json({ isLoggedIn: true, error: "" });
  } else if (result.sqlError) {
    res.status(500).json({ isLoggedIn: false, error: result.error });
  } else if (!result.sqlError && !result.isLoggedIn) {
    res.setHeader(
      "Set-Cookie",
      cookie.serialize("AdamLT", "", {
        expires: new Date(0),
        path: "/",
      })
    );
    res.status(200).json({ isLoggedIn: false, error: "Please login." });
  }
}
