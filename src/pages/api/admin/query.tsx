import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import adminCheckIsLoggedIn from "../../../lib/auth/adminCheckLogin";
import cookie from "cookie";
import mysql from "mysql2/promise";
import Config from "../../../env/config";

const getContacts = async (): Promise<{
  success: boolean;
  error: string;
  contacts: any;
}> => {
  const connection = await mysql.createConnection(
    Config.develop ? Config.mysqlDevConnect : Config.mysqlConnect
  );
  try {
    const [rows, fields] = await connection.query("select name, email, category_code, subject, message from contacts inner join contact_categories using(category_id)");
    return { success: true, error: "", contacts: rows };
  } catch (err) {
    return { success: false, error: err.message, contacts: [] };
  }
};

const handler: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const result = await adminCheckIsLoggedIn(req.cookies.AdamLT);
  if (result.sqlError) {
    res.status(500).json({ succeeded: false, error: result.error });
  } else if (!result.sqlError && !result.isLoggedIn) {
    res.setHeader(
      "Set-Cookie",
      cookie.serialize("AdamLT", "", {
        expires: new Date(0),
        path: "/",
      })
    );
    res.status(400).json({ succeeded: false, error: "Please login." });
  }
  const body = req.body;
  const task = body.task;

  try {
    if (task === "getContacts") {
      const contacts = await getContacts();
      if (contacts.success) {
        res.status(200).json({ succeeded: false, contacts: contacts.contacts });
      } else {
        res.status(500).json({ succeeded: false, error: "SQL Error." });
      }
    } else {
      res.status(500).json({ succeeded: false, error: "Unknown task." });
    }
  } catch (err) {
    res.status(500).json({ succeeded: false, error: err.message });
  }
};

export default handler;
