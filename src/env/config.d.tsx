/////////////////////////// 警告 ///////////////////////////////////
// このファイルは絶対に編集しないでください。
// 自分の設定を書くときは、こちらのファイルを `src/env/config.tsx` にコピーし、
// そのコピーを編集してください。
////////////////////////////////////////////////////////////////////

// Config オブジェクトの型定義
export interface MyConfig {

  certDir: string;
  mysqlConnect: {
    host: string;
    user: string;
    password: string;
    database: string;
  };
  mysqlDevConnect: {
    host: string;
    user: string;
    password: string;
    database: string;
  };
  develop: boolean;
  developError: boolean;
}
