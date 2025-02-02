import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Frontend Developer",
    company: "International School of Ministry Loveworld Inc.",
    description: `Designed and developed user interfaces for web applications using HTML, CSS and JavaScript. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["Figma", "Javascript", "Php", "HTML", "CSS"],
  },
  {
    year: "2023",
    role: "Fullstack Developer",
    company: "Freelance (Remote)",
    description: `Developed full-stack web applications utilizing modern JavaScript frameworks, ensuring high performance and user engagement.Architected and implemented robust database solutions using MongoDB, optimizing data storage and retrieval.Collaborated with product managers to prioritize features and plan the product roadmap effectively.Delivered comprehensive end-to-end solutions, guiding projects from initial concept through to deployment.Implemented responsive designs that ensure seamless cross-browser compatibility, enhancing the user experience across devices.`,
    technologies: ["Nodejs", "Reactjs", "PHP", "Sqlite"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Betagon Solutionss",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance. Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["HTML", "CSS", "JavaScript", "Reactjs", "Figma"],
  },
  {
    year: "2022",
    role: "Frontend Developer",
    company: "Skytechnologies",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Figma", "Tailwindcss", "Reactjs", "JavaScript"],
  },

];

export const PROJECTS = [
  {
    title: "Real-time Chat Service",
    image: project1,
    description:
      "Real-time chat application with user authentication and message persistence",
    technologies: ["Node.js", "WebSocket(Socket.io)", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "A web platform for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Reactjs", "Postgress"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Reactjs", "Express", "Postgress"],
  },
];

export const CONTACT = {
  address: "Lagos, Nigeria ",
  phoneNo: "+234 8073 4919 62",
  email: "agamahalvin@gmail.com",
};