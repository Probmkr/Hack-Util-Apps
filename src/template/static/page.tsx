import { NextPage } from "next";
import Layout from "../../components/layout/layout";

const TemplatePage: NextPage<{}, {}> = () => {
  return (
    <Layout pageTitle="page title">
      <p>page content</p>
    </Layout>
  );
};

export default TemplatePage;
