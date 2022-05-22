import requestIp from "request-ip";
import mysql from "mysql";
import { NextApiRequest, NextApiResponse } from "next";
import {
  mysqlConnect,
  mysqlDevConnect,
  develop,
  developError,
} from "../../../env/config.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const body = req.body;
  const fillAllData = "全ての必要なデータを入力してください。";
  if (!body.name || !body.subject || !body.message) {
    return res.status(400).json({ error: fillAllData });
  }
  const enterNameUpTo255 = "名前は255文字以内で入力してください。";
  const enterEmailUpTo255 = "メールアドレスは255文字以内で入力してください。";
  const enterSubjectUpTo255 = "件名は255文字以内で入力してください。";
  const enterMessageUpTo3000 = "メッセージは3000文字以内で入力してください。";
  if (body.name.length > 255) {
    return res.status(400).json({ error: enterNameUpTo255 });
  } else if (body.email.length > 255) {
    return res.status(400).json({ error: enterEmailUpTo255 });
  } else if (body.subject.length > 255) {
    return res.status(400).json({ error: enterSubjectUpTo255 });
  } else if (body.message.length > 3000) {
    return res.status(400).json({ error: enterMessageUpTo3000 });
  }
  const emailReg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
  const enterValidEmail =
    "メールアドレスを正しく入力してください。\nメールアドレスの内容: " +
    body.email;
  if (!emailReg.test(body.email) && body.email) {
    return res.status(400).json({ error: enterValidEmail });
  }
  // const ip = requestIp.getClientIp(req);
  const ip = req.headers["x-forwarded-for"];

  const connection = mysql.createConnection(
    develop ? mysqlDevConnect : mysqlConnect
  );

  const sentMessage = "Contact Sent";
  const errorMessage = "SQLError";
  connection.query(
    "insert into contacts (name, email, category, subject, message, ip) values (?, ?, ?, ?, ?, ?)",
    [body.name, body.email, body.category, body.subject, body.message, ip],
    (error, results, fields) => {
      if (error) {
        if (developError) {
          return res.status(500).json({ error: error.message });
        } else {
          return res.status(500).json({ error: errorMessage });
        }
      }
      return res.status(200).json({ message: sentMessage });
    }
  );
  // res.status(200).json({ body });
}
