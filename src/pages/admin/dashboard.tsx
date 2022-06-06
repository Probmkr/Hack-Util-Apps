import Layout from "../../components/layout";
import parseCookie from "../../lib/parseCookie";
import nookies from "nookies";
import cookie from "cookie";
import React from "react";
import mysql from "mysql";
import Config from "../../env/config";
import checkIsLoggedIn from "../../lib/checkLoggedIn";
import { GetServerSideProps, GetServerSidePropsResult } from "next";

export default class AdminDashboard extends React.Component<
  { cookies: Object },
  {}
> {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Layout pageTitle="Dashboard">
        <h1>Dashboard</h1>
        <p>
          This is the admin dashboard. You can use this page to manage your
          application.
        </p>
      </Layout>
    );
  }
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const cookies = nookies.get(context);
  const result = await checkIsLoggedIn(cookies.AdamLT);
  const isLoggedIn = await result.isLoggedIn;
  if (!isLoggedIn) {
    context.res.setHeader(
      "Set-Cookie",
      cookie.serialize("AdamLT", "", {
        expires: new Date(0),
        path: "/",
      })
    );
    return {
      redirect: {
        permanent: false,
        destination: "/admin",
      },
    };
  } else {
    return {
      props: {},
    };
  }
};
