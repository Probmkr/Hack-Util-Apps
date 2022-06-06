import React from "react";
import Layout from "../../../../components/layout";
import styles from "./Caesar.module.scss";

// stringをval個先へシフトさせる
const shift = (string, val) => {
  const lst = string.split("");

  return lst
    .map((c) => {
      const code = c.charCodeAt(0);
      const isCapital = 65 <= code && code <= 90;

      // 大文字でも小文字でもない時はそのまま返す
      if (!isCapital && !(97 <= code && code <= 122)) return c;

      if (isCapital) {
        let new_code = code + val;
        if (new_code > 90) {
          new_code -= 26;
        }
        return String.fromCharCode(new_code);
      } else {
        let new_code = code + val;
        if (new_code > 122) {
          new_code -= 26;
        }
        return String.fromCharCode(new_code);
      }
    })
    .join("");
};

class CaesarPage extends React.Component<
  {},
  {
    value: string;
    results: any[];
  }
> {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      results: Array(25).fill(""),
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(value) {
    this.setState({ value: value });
    let results = Array(25).fill("");
    for (let i = 0; i < 25; i++) {
      results[i] = shift(value, i + 1);
    }
    this.setState({ results: results });
  }

  render() {
    return (
      <Layout pageTitle="Caesar">
        <div>
          <Input value={this.state.value} onChange={this.onChange} />

          <Results results={this.state.results} />
          <Copyright />
        </div>
      </Layout>
    );
  }
}

class Input extends React.Component<{
  onChange: (value: string) => void;
  value: string;
}> {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onChange(event.target.value);
  }

  render() {
    const value = this.props.value;
    return (
      <input
        type="text"
        className={styles.encrypted}
        value={value}
        onChange={this.handleChange}
        placeholder="encrypted string"
      />
    );
  }
}

class Results extends React.Component<
  {
    results: any[];
  },
  {}
> {
  render() {
    const results = this.props.results;
    const items = [];
    for (let i = 1; i <= 25; i++) {
      items.push(<Result i={i} value={results[i - 1]} />);
    }
    return <div>{items}</div>;
  }
}

class Result extends React.Component<
  {
    i: number;
    value: string;
  },
  {}
> {
  render() {
    const i = this.props.i;
    const value = this.props.value;
    return (
      <p className={styles.result}>
        key={i}
        <input
          type="text"
          value={value}
          className={styles.decrypted}
          placeholder="decrypted string"
          readOnly
        ></input>
      </p>
    );
  }
}

function Copyright(props) {
  return (
    <p className={styles.copyright}>
      © 2022 <a href="https://twitter.com/OJun46225932">Ojun</a>
    </p>
  );
}

export default CaesarPage;
