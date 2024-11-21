
/* Updated portfolio.js file for Shekar Kaki */

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// Splash Screen
const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

// Summary And Greeting Section
const illustration = {
  animated: true
};

const greeting = {
  username: "Shekar Kaki",
  title: "Hi, I'm Shekar",
  subTitle: emoji(
    "A seasoned Data Engineer and AI/ML Specialist 🚀 with over 11 years of experience in designing, developing, and deploying scalable, data-driven solutions."
  ),
  resumeLink: "", // Add your resume link if available
  displayGreeting: true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/shekar369",
  linkedin: "https://www.linkedin.com/in/shekar-python-dataengineer",
  gmail: "shekar369.python@gmail.com",
  display: true
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
    )
  ],
  softwareSkills: [
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "SQL", fontAwesomeClassname: "fas fa-database" },
    { skillName: "AWS", fontAwesomeClassname: "fab fa-aws" },
    { skillName: "Azure", fontAwesomeClassname: "fab fa-microsoft" },
    { skillName: "Kafka", fontAwesomeClassname: "fab fa-apache" },
    { skillName: "React", fontAwesomeClassname: "fab fa-react" }
  ],
  display: true
};

// Education Section
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "IIIT Hyderabad",
      subHeader: "Post Graduate Certificate in Software Engineering for Data Science",
      duration: "2023"
    },
    {
      schoolName: "Mahaveer Institute of Science and Technology",
      subHeader: "B.Tech in Computer Science",
      duration: "2009 - 2012"
    }
  ]
};

// Work experience section
const workExperiences = {
  display: true,
  experience: [
    {
      role: "Senior Python Developer / Team Lead",
      company: "Vidyayug Soft Technologies Pvt Ltd",
      date: "April 2017 – Present",
      desc: "Leading AI/ML projects, optimizing ETL pipelines, and managing large-scale deployments."
    },
    {
      role: "Software Engineer",
      company: "Foursoft IT Solutions Ind Pvt Ltd",
      date: "Feb 2013 – Feb 2017",
      desc: "Developed full-stack applications and database architectures for enterprise solutions."
    }
  ]
};

// Big Projects Section
const bigProjects = {
  title: "Big Projects",
  projects: [
    {
      projectName: "Legal Advisor Assistant",
      projectDesc: "AI-powered solution to automate legal inquiry responses.",
      footerLink: []
    },
    {
      projectName: "Power Utility Fraud Detection",
      projectDesc: "ML model to identify and reduce fraudulent power consumption.",
      footerLink: []
    }
  ],
  display: true
};

// Contact Info
const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My inbox is open for all.",
  number: "+91 9398301574",
  email_address: "shekar369.python@gmail.com"
};

// Export all constants
export {
  splashScreen,
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  workExperiences,
  bigProjects,
  contactInfo
};
