import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  NextPage,
} from "next";
import React from "react";
import { useRouter } from "next/router";
import Layout from "../../../../components/layout/layout";

const DynamicPage: NextPage = () => {
  const router = useRouter();
  return (
    <Layout pageTitle="Dynamic OGP Test">
      <div>
        <h1>{router.query.dynamic}</h1>
      </div>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [...Array(10)].map((_, index) => ({
    params: {
      dynamic: `${index}`,
    },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  return {
    props: {},
  };
};

export default DynamicPage;
