
const settings = {
  isSplash: false,
};

const greeting = {
  title: "Shekar Kaki",
  logo_name: "ShekarKaki",
  subTitle: "Data Engineer and AI/ML Specialist | Python Developer",
  resumeLink: "",
  githubProfile: "https://github.com/your-github-profile",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/your-github-profile",
    fontAwesomeIcon: "fa-github",
  },
  {
    name: "LinkedIn",
    link: "https://linkedin.com/in/shekar-python-dataengineer",
    fontAwesomeIcon: "fa-linkedin-in",
  },
];

const skills = {
  data: [
    {
      title: "Data Engineering and AI/ML",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Designing scalable, data-driven solutions",
        "⚡ Expertise in Python, SQL, and AI frameworks like LangChain",
        "⚡ Hands-on experience with Big Data tools like Hadoop, PySpark, Kafka",
        "⚡ End-to-end pipeline design and optimization for high-performance outcomes",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "logos-python",
        },
        {
          skillName: "SQL",
          fontAwesomeClassname: "simple-icons:mysql",
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "logos-aws",
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "IIIT Hyderabad",
      subtitle: "Post Graduate Certificate in Software Engineering for Data Science",
      logo_path: "iiit.png",
      alt_name: "IIIT",
      duration: "2023",
    },
    {
      title: "Mahaveer Institute of Science and Technology",
      subtitle: "B.Tech in Computer Science",
      logo_path: "mist.png",
      alt_name: "MIST",
      duration: "2009 - 2012",
    },
  ],
};

const experience = {
  title: "Experience",
  description: "My professional experience spans multiple roles in data engineering, AI/ML applications, and full-stack development.",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Senior Python Developer / Team Lead – Data & AI/ML Specialist",
          company: "Vidyayug Soft Technologies Pvt Ltd",
          duration: "April 2017 – Present",
          description: "Leading AI/ML projects and optimizing large-scale data pipelines.",
        },
        {
          title: "Software Engineer / Team Lead",
          company: "Foursoft IT Solutions Ind Pvt Ltd",
          duration: "Feb 2013 – Feb 2017",
          description: "Developed full-stack applications and database architectures.",
        },
      ],
    },
  ],
};

export { settings, greeting, socialMediaLinks, skills, degrees, experience };
