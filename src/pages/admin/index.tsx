import React from "react";
import Layout from "../../components/layout";
import Cookies from "js-cookie";
import styles from "../../styles/Form.module.scss";

export default class AdminPage extends React.Component<
  { isLogin },
  { appList: [], isLoginFailed: boolean, errorName: string, isLogin: boolean }
> {
  constructor(props) {
    super(props);
    this.state = {
      appList: [],
      isLoginFailed: false,
      errorName: "",
      isLogin: props.isLogin,
    };
  }

  render() {
    if (this.state.isLogin) {
      return (
        <Layout pageTitle="Admin">
          <h1>Admin</h1>
          <p>This is admin page.</p>
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
            onSubmit={handleSubmit}
          >
            <div className={styles.input}>
              <label htmlFor="name">
                user name:
              </label>
              <input type="text" name="name" id="name" />
            </div>
            <div className={styles.input}>
              <label htmlFor="password">
                password:
              </label>
              <input type="password" name="password" id="password" />
            </div>
            <div className={styles.input}>
              <button type="submit">Login</button>
            </div>
          </form>
        </Layout>
      );
    }
  }
}

export function getServerSideProps() {
  const cookies = Cookies.get("token");
  if (cookies) {
    return {
      props: {
        isLogin: true,
      },
    };
  } else {
    return {
      props: {
        isLogin: false,
      },
    };
  }
}

async function handleSubmit(event) {
  event.preventDefault();

  const data = {
    name: event.target.name.value,
    password: event.target.password.value,
  }

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
}
