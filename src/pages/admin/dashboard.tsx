import styles from "./Admin.module.scss";
import Layout from "../../components/layout/layout";
import parseCookie from "../../lib/parse/parseCookie";
import nookies from "nookies";
import cookie from "cookie";
import React from "react";
import adminCheckIsLoggedIn from "../../lib/auth/adminCheckLogin";
import { GetServerSideProps, GetServerSidePropsResult, NextPage } from "next";

const First: React.FC<{
  info: any;
  setInfo: React.Dispatch<React.SetStateAction<any>>;
}> = ({ info, setInfo }) => {
  // console.log("info:", info);
  return (
    <div className={styles.first}>
      <h2>This Is Dashboard</h2>
      <p>
        This is the admin dashboard. You can use this page to manage your
        application.
      </p>
    </div>
  );
};

const Contacts: React.FC<{
  info: any;
  setInfo: React.Dispatch<React.SetStateAction<any>>;
}> = ({ info, setInfo }) => {
  let contacts = null;
  try {
    contacts = info.contacts.map((contact) => (
      <tr key={contact.id}>
        <td>{contact.name}</td>
        <td>{contact.email}</td>
        <td>{contact.category}</td>
        <td>{contact.subject}</td>
        <td>{contact.message}</td>
      </tr>
    ));
  } catch (err) {
    // console.log("err:", err);
  }
  return (
    <div className={styles.contacts}>
      <h2>Contacts</h2>
      <p>Here is the contacts of this website bellow.</p>
      <button
        onClick={() => {
          getContacts(info, setInfo);
        }}
      >
        get contacts
      </button>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Category</th>
            <th>Subject</th>
            <th>Message</th>
          </tr>
          {contacts}
        </tbody>
      </table>
    </div>
  );
};

const Tabs = {
  first: { page: First },
  contacts: { page: Contacts },
};

const getContacts = async (
  info: any,
  setInfo: React.Dispatch<React.SetStateAction<any>>
) => {
  const endpoint = "/api/admin/query";
  const data = {
    task: "getContacts",
  };
  const JSONData = JSON.stringify(data);

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSONData,
  };
  try {
    const response = await fetch(endpoint, options);
    const json = await response.json();
    // console.log("result:", json);
    setInfo({ contacts: json.contacts });
    // console.log(info.contacts);
    return json;
  } catch (err) {
    // console.log("err:", err);
  }
};

const changeTab = (
  tab: string,
  setTab: React.Dispatch<React.SetStateAction<string>>
) => {
  setTab(tab);
};

const AdminDashboard: NextPage<
  { cookies: Object },
  {
    currentTab: string[];
  }
> = () => {
  const [currentTab, setCurrentTab] = React.useState("first");
  const [info, setInfo] = React.useState({});
  const tabList = Object.keys(Tabs);
  // console.log(Tabs);

  const curTab = currentTab;
  const Tab = Tabs[curTab].page as React.FC<{
    info: any;
    setInfo: React.Dispatch<React.SetStateAction<string>>;
  }>;
  return (
    <div id="main" className={styles.main}>
      <h1>Dashboard</h1>
      <div className={styles.tabList}>
        <ul>
          {tabList.map((tab) => (
            <li
              className={tab === currentTab ? styles.selected : null}
              key={tab}
              onClick={() => changeTab(tab, setCurrentTab)}
            >
              {tab}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.tabWindows}>
        <Tab info={info} setInfo={setInfo} />
      </div>
    </div>
  );
};

export default AdminDashboard;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const cookies = nookies.get(context);
  const result = await adminCheckIsLoggedIn(cookies.AdamLT);
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
