interface MyConfig {
  mysqlConnect: {
    host: string;
    user: string;
    password: string;
    database: string;
  };
  mysqlDevConnect: {
    host: string;
    user: string;
    password: string;
    database: string;
  };
  develop: boolean;
  developError: boolean;
}

const Config: MyConfig = {
  mysqlConnect: {
    host: "localhost",
    user: "user",
    password: "pass",
    database: "user",
  },
  mysqlDevConnect: {
    host: "localhost",
    user: "user",
    password: "pass",
    database: "user",
  },
  develop: false,
  developError: false,
};

export default Config;
