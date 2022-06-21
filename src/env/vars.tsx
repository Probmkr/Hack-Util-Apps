interface MyVars {
  siteTitle: string;
  siteThemes: string[];
  defaultDescription: string;
  twitterAccount: string;
  grayScaleColors: string[];
  sidebarContents: {
    StaticPages: StaticPage;
    PopularApps: MyApp[] | boolean;
    Categories: MyCategory[] | boolean;
  };
  lengthOfLoginToken: number;
}

interface StaticPage {
  [key: string]: {
    url: string;
    title: string;
  };
}

interface MyApp {
  siteTitle: string;
}

interface MyCategory {
  categoryName: string;
}

const Vars: MyVars = {
  siteTitle: "Hack Util Apps",
  siteThemes: ["dark-mode", "communism-mode", "japan-mode"],
  defaultDescription: "Probm によるウェブアプリ集",
  twitterAccount: "@probmkrnew",
  grayScaleColors: [
    "bg-true-white",
    "bg-light",
    "bg-gray-1",
    "bg-gray-2",
    "bg-gray-3",
    "bg-gray-310",
    "bg-gray-320",
    "bg-gray-330",
    "bg-gray-340",
    "bg-gray-350",
    "bg-gray-4",
    "bg-gray-5",
    "bg-dark",
    "bg-true-black",
  ],
  sidebarContents: {
    StaticPages: {
      Home: {
        url: "/",
        title: "Home",
      },
      Apps: {
        url: "/apps",
        title: "Apps",
      },
      About: {
        url: "/static/about",
        title: "About",
      },
      Contact: {
        url: "/contact",
        title: "Contact",
      },
      ColorTestPage: {
        url: "/static/example",
        title: "Color Test",
      },
      FontTestPage: {
        url: "/static/font",
        title: "Font Test"
      }
    },
    PopularApps: false,
    Categories: false,
  },
  lengthOfLoginToken: 255,
};

export default Vars;
