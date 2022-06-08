# hack-util-apps (test-ver)

これは、プログラミング・ハッキング（サイバーセキュリティ）の勉強を助長しようと作り始めたウェブアプリ集です。
今はまだ作成段階にあります。

また、このレポジトリの全てのソースコードについては、このアプリを改善するためにのみ使用を許諾します。

それ以外の使用につきましては、開発者の私に直接お問い合わせいただき、私が許可した場合にのみ認めます。

## ウェブサイト

テスト環境：
http://apps.probmkr.com:3001/

本番環境：
https://apps.probmkr.com/

## テスト環境の作り方（書き途中）

このウェブサービスは多くの人が構築するようなものではありません。

ですが、このアプリに貢献したく、テスト環境を作るときにはこちらを参考にしてください。

### ステップ１（下準備）

まず、レポジトリをクローンします。

```shell
git clone https://github.com/Probmkr/test_next_project.git
```

（公開鍵の場合: `git clone git@github.com:Probmkr/test_next_project.git`）

次に、レポジトリのディレクトリに `cd` します。

```shell
cd Hack-Util-Apps
```

必要なパッケージをインストールします。（`yarn` を採用しておりますので、 `npm` は使わないでください。）

```shell
yarn install
```

### ステップ２（設定ファイル）

この開発環境を正しく動かすには一つ（あるいは二つ）の設定ファイルを正確に記す必要があります。

#### config.tsx

まず、一番大事なのは `src/env/config.tsx` です。このファイルは最初は存在しないので、

```bash
cd src/env/
cp config-sample.tsx config.tsx
```

を実行して `config.tsx` としてコピーする必要があります。

次に、 `config.tsx` のファイル内を編集します。

基本はコメントにかかれている通りなのでそれに沿って設定してください。

#### .env

こちらは、設定しなくても動きますが、主にポートの設定をしますのでパソコンの状態によっては設定の必要が出てきます。

こちらも最初は存在しないので、 `.env.sample` を `.env` にコピーしてお使いください。

```shell
cd path/to/this/repo
cp .env.sample .env
```

また、こちらもファイル内のコメントに書いてある通りなのでそちらをお読みください。

もしも何を言ってるのかわからない場合は `server.js` を見てもらえればわかるかもしれません。

### データベース

データベースについては、本番環境用と開発環境用の二つがあります。

この二つは `src/env/config.tsx` の設定によって使い分けたり使い分けなかったりすることができます。

データベースの初期設定関連の SQL 文は全て `sql/` ディレクトリにあります。

コマンドラインで `sql/combine.sh` または `sql/dev_combine.sh` を実行すれば最新の `all.sql` または `dev_all.sql` が生成されます。  
（普通なら二つとも最新のはずですが）

この二つは本番環境と開発環境とで使い分けてください。

この二つをデータベースで実行すればすべてが整います。

ただし、元から環境があった場合にはすべてがリセットされます。

### SSL 対応

SSL の対応したテスト環境を作るにはもっと労力が必要になります。

まず、SSL 証明書を用意します。必要なのは、 cert と key となる証明書です。（Let's encrypt の場合は、 cert は `fullchain.pem`, key は `privkey.pem` です。）

次に、それらを `certificates/` の中に配置してください。ここで注意するのは、もしも拡張子が `.pem` でない場合は gitignore されないということです。その時は自分で `.gitignore` を編集しても構いません。それも一緒にマージします。

配置したら、 `.env` に `CERT_FILE_PATH` （cert として扱われます。）と `KEY_FILE_PATH` （key として扱われます。）を設定してください。

もしも `certificates/fullchain.pem` と `certificates/privkey.pem` になっていない場合は設定する必要はありません。

注：私は あまりソフトウェア開発などの経験が多くないため、これらに間違いがある可能性があります。もしも見つけたらほうこうくしてもらえると嬉しいです。
