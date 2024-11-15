import ohtani from "../assets/projects/ohtani.webp";
import instacart from "../assets/projects/instacart.png";
import stock from "../assets/projects/stock.webp";
import sql from "../assets/projects/sql.png";

export const HERO_CONTENT = `I am currently a junior at Northwestern University, where I am pursuing an interdisciplinary education, combining Economics, Computer Science, and Data Science in the Weinberg College of Arts and Sciences. My academic background has equipped me with a deep understanding of both the quantitative aspects of economics and the technical skills necessary to thrive in today’s data-driven world. I have hands-on experience in full-stack development, with proficiency in both front-end and back-end technologies. I bring a strong foundation in data science and machine learning. I have experience in applying data analysis techniques to solve real-world problems, using tools such as Python, Pandas, NumPy, and TensorFlow.`;

export const ABOUT_TEXT = `As previously stated, I am a college student studying computer science at Northwestern University. I am extremely keen to learning new things, and part of my goal for the rest of college and even afterward is to create and learn as much as I can, particularly programming concepts and tools that peak my interest. Future ideas for projects of mine include game design, statistics trackers for the sports I love like baseball, and building more webpages to highlight my other interests like blogs and hobbies.`;

export const EXPERIENCES = [
  {
    year: "June 2024 - August 2024",
    role: "Software Engineer Intern",
    company: "Ridge Security",
    description: `Check resume until update.`,
    technologies: ["etc"],
    link: true,
    domain: "https://ridgesecurity.ai/",
  },
  {
    year: "January 2024 - June 2024",
    role: "Frontend Developer",
    company: "NU DISC",
    description: `Check resume until update.`,
    technologies: ["etc"],
    link: true,
    domain: "https://sites.northwestern.edu/discnu/"
  },
  {
    year: "September 2023 - June 2024",
    role: "Peer Mentor",
    company: "Northwestern",
    description: `Check resume until update.`,
    technologies: [],
  },
];

export const PROJECTS = [
  {
    title: "Baseball Pitching Analysis",
    image: ohtani,
    description:
      "Analysis and generation of baseball graphics with GgPlot depicting pitch data in various mediums using large data from BaseballSavant database to find conclusions of pitching patterns from MLB players, cross-referencing through innings and seasons",
    technologies: ["R", "GGplot"],
  },
  {
    title: "Stock Market Web App",
    image: stock,
    description:
      "A live-updating webapp using Dash that combines frontend and backend to plot various graphs based on different stock market variables, and predict future stock expectations training on a user-picked time constraints using Sklearn",
    technologies: ["Python", "Dash", "Sklearn"],
  },
  {
    title: "SQL Environment",
    image: sql,
    description:
      "Programmed a fully-functional SQL environment using C and C++ as part of CS 211 class, handling user input and text files, queries, and edge cases. Deals with memory allocation accordingly so the program never crashes ",
    technologies: ["C", "C++"],
  },
  {
    title: "Instacart Accessibility Chrome Extension",
    image: instacart,
    description:
      "Designed a chrome extension to help seniors navigate through websites like Instacart by guiding them through the purchasing process",
    technologies: ["HTML", "CSS", "Javascript", "Web Extensions"],
  },
];

export const CONTACT = {
  address: "3453 Kenneth Drive, Palo Alto, CA 94303, USA",
  phoneNo: "+1 (650) 714-3162",
  email: "alanguo2026@u.northwestern.edu",
};
