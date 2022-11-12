/////////////////////////// 警告 ///////////////////////////////////
// このファイルは絶対に編集しないでください。
// 自分の設定を書くときは、こちらのファイルを `src/env/config.tsx` にコピーし、
// そのコピーを編集してください。
////////////////////////////////////////////////////////////////////

// Config オブジェクトの型定義
import { MyConfig } from './config.d';

// Config オブジェクト本体
const Config: MyConfig = {
  // 証明書のディレクトリを指定します。今は使われていません。
  certDir: "Your HTTPS certificate directory",
  mysqlConnect: {
    // MySQL の接続設定を書いてください。
    host: "localhost",
    user: "user",
    password: "pass",
    database: "hua",
  },
  mysqlDevConnect: {
    // 開発環境ようの MySQL の接続設定を書いてください。
    // この設定は develop が true になっているときに使われます。
    host: "localhost",
    user: "user",
    password: "pass",
    database: "hua_dev",
  },
  // develop が true になっているときに mysqlDevConnect が
  // mysqlConnect の代わりに使われます。
  develop: false,
  // develop が true になっているときにエラー表示が SQL Error ではなく
  // 詳細まで表示するようになります。
  developError: false,
};

export default Config;
