interface CustomLink {
  url: string;
  title: string;
  description?: string;
}

interface Developer {
  name: string;
  cord: string;
  icon: string;
  email?: string;
  SNSIcons?: {
    github?: string;
    twitter?: string;
    website?: string;
  };
  facebook?: string;
  linkedin?: string;
  instagram?: string;
  description: string;
  iconLink?: string;
  skills?: string[];
  otherLinks?: CustomLink[];
}

const Developers: Developer[] = [
  {
    name: "Probm™",
    cord: "probm",
    icon: "https://pbs.twimg.com/profile_images/1528217514294902785/V_XVM39e_400x400.jpg",
    email: "thanatos@probmkr.com",
    SNSIcons: {
      github: "https://github.com/probmkr",
      twitter: "https://twitter.com/probmkrnew",
      website: "https://probmkr.com",
    },
    description: "このアプリの開発リーダー",
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "C++",
      "C#",
      "Python",
    ],
    otherLinks: [
      {
        url: "https://blog.probmkr.com",
        title: "BLOG",
      },
      {
        url: "https://example.com",
        title: "EXAMPLE",
        description: "This is an example of a description.",
      },
    ],
  },
];

export default Developers;
