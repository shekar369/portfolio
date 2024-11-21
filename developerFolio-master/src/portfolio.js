/* Updated portfolio.js file for Shekar Kaki */

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// Splash Screen
const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000,
};

// Summary And Greeting Section
const illustration = {
  animated: true,
};

const greeting = {
  username: "Shekar Kaki",
  title: "Hi, I'm Shekar",
  subTitle: emoji(
    "A seasoned Data Engineer and AI/ML Specialist 🚀 with over 11 years of experience in designing, developing, and deploying scalable, data-driven solutions."
  ),
  resumeLink: "", // Add your resume link if available
  displayGreeting: true,
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/shekar369",
  linkedin: "https://www.linkedin.com/in/shekar-python-dataengineer",
  gmail: "shekar369.python@gmail.com",
  twitter: "", // Placeholder for Twitter link
  display: true,
};

// Skills Section
const skillsSection = {
  title: "What I do",
  subTitle: "Data Engineer | AI/ML Enthusiast | Python Developer",
  skills: [
    emoji(
      "⚡ Build scalable, data-driven solutions for complex business challenges"
    ),
    emoji("⚡ Develop end-to-end pipelines for Big Data applications"),
    emoji(
      "⚡ Implement AI/ML models and integrate them into real-world use cases"
    ),
  ],
  softwareSkills: [
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "SQL", fontAwesomeClassname: "fas fa-database" },
    { skillName: "AWS", fontAwesomeClassname: "fab fa-aws" },
    { skillName: "Azure", fontAwesomeClassname: "fab fa-microsoft" },
    { skillName: "Kafka", fontAwesomeClassname: "fab fa-apache" },
    { skillName: "React", fontAwesomeClassname: "fab fa-react" },
  ],
  display: true,
};

// Education Section
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "IIIT Hyderabad",
      subHeader:
        "Post Graduate Certificate in Software Engineering for Data Science",
      duration: "2023",
    },
    {
      schoolName: "Mahaveer Institute of Science and Technology",
      subHeader: "B.Tech in Computer Science",
      duration: "2009 - 2012",
    },
  ],
};

// Tech Stack Section
const techStack = {
  title: "Tech Stack",
  subTitle: "Tools and Technologies I work with",
  skills: [
    emoji("⚡ Python, SQL, Kafka, Hadoop"),
    emoji("⚡ Azure, AWS, Databricks"),
    emoji("⚡ React, Django, Flask"),
  ],
  display: true,
};

// Work experience section
const workExperiences = {
  display: true,
  experience: [
    {
      role: "Senior Python Developer / Team Lead",
      company: "Vidyayug Soft Technologies Pvt Ltd",
      date: "April 2017 – Present",
      desc: "Leading AI/ML projects, optimizing ETL pipelines, and managing large-scale deployments.",
    },
    {
      role: "Software Engineer",
      company: "Foursoft IT Solutions Ind Pvt Ltd",
      date: "Feb 2013 – Feb 2017",
      desc: "Developed full-stack applications and database architectures for enterprise solutions.",
    },
  ],
};

// Open Source Section
const openSource = {
  githubUserName: "shekar369",
  display: true,
};

// Big Projects Section
const bigProjects = {
  title: "Big Projects",
  projects: [
    {
      projectName: "Legal Advisor Assistant",
      projectDesc: "AI-powered solution to automate legal inquiry responses.",
      footerLink: [],
    },
    {
      projectName: "Power Utility Fraud Detection",
      projectDesc: "ML model to identify and reduce fraudulent power consumption.",
      footerLink: [],
    },
  ],
  display: true,
};

// Achievements Section
const achievementSection = {
  title: "Achievements",
  achievements: [
    {
      title: "Award Name",
      description: "Description of the award.",
    },
  ],
  display: true,
};

// Blog Section
const blogSection = {
  title: "Blogs",
  blogs: [
    {
      title: "My Blog",
      url: "https://example.com",
    },
  ],
  display: true,
};

// Talk Section
const talkSection = {
  title: "Speaking Engagements",
  talks: [
    {
      title: "Talk Title",
      description: "Talk description.",
    },
  ],
  display: true,
};

// Podcast Section
const podcastSection = {
  title: "Podcasts",
  description: "Featured podcasts or talks.",
  display: true,
};

// Contact Info
const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My inbox is open for all.",
  number: "+91 9398301574",
  email_address: "shekar369.python@gmail.com",
};

// Twitter Section
const twitterDetails = {
  username: "TwitterHandle", // Replace with your Twitter handle
  display: false,
};

// Hireable Status
const isHireable = true;

// Resume Section
const resumeSection = {
  title: "Resume",
  description: "Download my resume below.",
  url: "https://example.com/resume.pdf", // Add your resume URL
};

// Export all constants
export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection,
};