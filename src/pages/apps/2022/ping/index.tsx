import Layout from "../../../../components/layout";
import dynamic from "next/dynamic";
import styles from "./style.module.scss";

export default function Ping() {
  return (
    <Layout pageTitle="Ping">
      <h1>Ping</h1>
      <p>指定された URL または IP アドレスに Ping を実行します。</p>
      <div className="input-group">
        <input type="text" id="host" placeholder="archlinux.org"></input>
        <input
          type="button"
          value="実行"
        ></input>
      </div>
      <div id="results"></div>
    </Layout>
  );
}
