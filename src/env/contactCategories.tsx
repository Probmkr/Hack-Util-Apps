interface MyContactCategories {
  categories: MyContactCategory[];
}

interface MyContactCategory {
  key: string;
  name: string;
}

const ContactCategories = {
  categories: [
    {
      key: "others",
      name: "その他",
    },
    {
      key: "bug",
      name: "バグ",
    },
    {
      key: "suggesting",
      name: "改善案",
    },
    {
      key: "comlaint",
      name: "苦情",
    },
  ],
};

export default ContactCategories;
