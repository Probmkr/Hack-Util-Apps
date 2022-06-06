import React from "react";
import Router from "next/router";
import nookies from "nookies";
import cookie from "cookie";
import Layout from "../../components/layout";
import styles from "../../styles/pages/Form.module.scss";
import checkIsLoggedIn from "../../lib/checkLoggedIn";
import { GetServerSideProps, GetServerSidePropsContext } from "next";

export default class AdminPage extends React.Component<
  { isLoggedIn: boolean },
  {
    appList: [];
    isLoginFailed: boolean;
    errorName: string;
    isLoggedIn: boolean;
    triedLogin: boolean;
  }
> {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      appList: [],
      isLoginFailed: false,
      errorName: "",
      isLoggedIn: props.isLoggedIn,
      triedLogin: false,
    };
  }

  async handleSubmit(event) {
    event.preventDefault();

    if (this.state.triedLogin) {
      return false;
    }

    this.setState({ triedLogin: true });

    const data = {
      user: event.target.name.value,
      password: event.target.password.value,
    };

    const JSONData = JSON.stringify(data);

    const endpoint = "/api/admin/login";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONData,
    };

    const response = await fetch(endpoint, options);
    const result = await response.json();
    this.setState((state) => ({
      isLoginFailed: !result.isLoginSucceeded,
      isLoggedIn: result.isLoginSucceeded,
      errorName: result.error,
      triedLogin: false,
    }));
  }

  componentDidMount(): void {
    if (this.state.isLoggedIn) {
      Router.push("/admin/dashboard");
    }
  }

  componentDidUpdate(): void {
    if (this.state.isLoggedIn) {
      Router.push("/admin/dashboard");
    }
  }

  render() {
    if (this.state.isLoggedIn) {
      return (
        <Layout pageTitle="Admin">
          <h1>Login Succeeded</h1>
          <p>Please wait for redirection.</p>
        </Layout>
      );
    } else {
      return (
        <Layout pageTitle="Admin">
          <h1>Admin</h1>
          <p>Please login.</p>
          <form
            className={styles.form}
            action="/api/admin/login"
            method="post"
            onSubmit={this.handleSubmit}
          >
            <div className={styles.input}>
              <label htmlFor="name">user name:</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className={styles.input}>
              <label htmlFor="password">password:</label>
              <input type="password" name="password" id="password" />
            </div>
            <div className={styles.input}>
              <button type="submit">Login</button>
            </div>
          </form>
          {this.state.isLoggedIn && <p>Login Succeeded.</p>}
          {this.state.isLoginFailed && <p>{this.state.errorName}</p>}
          {this.state.triedLogin && <p>Please wait 5 seconds.</p>}
        </Layout>
      );
    }
  }
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const cookies = nookies.get(context);
  const result = await checkIsLoggedIn(cookies.AdamLT);
  const isLoggedIn = result.isLoggedIn;
  if (isLoggedIn) {
    return {
      props: {
        isLoggedIn: true,
      },
    };
  } else {
    context.res.setHeader("Set-Cookie", [
      cookie.serialize("AdamLT", "", {
        expires: new Date(0),
        path: "/",
      }),
    ]);
    return {
      props: {
        isLoggedIn: false,
      },
    };
  }
};
