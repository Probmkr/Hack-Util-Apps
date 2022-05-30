import Layout from "../../../../components/layout";

export default function YourIP({ ip, headers }) {
  console.log(headers);
  return (
    <Layout pageTitle="Your IP">
      <h1>あなたの IP アドレス</h1>
      <p className="align-left">あなたが今通信で使っている IP アドレスは...</p>
      <pre>{ip}</pre>
      <p>です。</p>
    </Layout>
  );
}

export function getServerSideProps(context) {
  const ip = context.req.headers["x-forwarded-for"] || context.req.connection.remoteAddress;
  const headers = context.req.headers;
  return { props: { ip, headers } };
}
