import { link } from "framer-motion/client";
import project1 from "../assets/projects/Onboarding_Airbnb.mp4.mp4-screenshot-.jpg";
import project2 from "../assets/projects/Screenshot 2024-10-17 154331.png";
import project3 from "../assets/projects/landing_page.png";
import project4 from "../assets/projects/vinacen.png";
import project5 from "../assets/projects/virtualR.png";
export const HERO_CONTENT = `I am an enthusiastic front-end developer focused on building efficient and scalable web applications. With a solid foundation in ReactJS and related technologies, I aim to apply my growing skills in real-world projects. My goal is to contribute to impactful solutions that enhance user experiences while learning and growing within a dynamic team environment.`;

export const ABOUT_TEXT = `I am an enthusiastic front-end developer focused on building efficient and scalable web applications. With a solid foundation in ReactJS and related technologies, I aim to apply my growing skills in real-world projects. My goal is to contribute to impactful solutions that enhance user experiences while learning and growing within a dynamic team environment.`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Technical Support",
    company: "Riovina Technology Company",
    description: `Provided technical support, resolved system and website issues, managed software updates, optimized performance, and ensured data security.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  // {
  //   year: "2024",
  //   role: "Frontend Developer Intern",
  //   company: "K",
  //   description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
  //   technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  // },
  // {
  //   year: "2021 - 2022",
  //   role: "Full Stack Developer",
  //   company: "Facebook",
  //   description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
  //   technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  // },
  // {
  //   year: "2020 - 2021",
  //   role: "Software Engineer",
  //   company: "Paypal",
  //   description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
  //   technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  // },
];

export const PROJECTS = [
  {
    title: "Airbnb Clone",
    image: project1,
    description:
      "A user-friendly platform for booking vacation rentals, offering dynamic property listings and seamless reservation management for both guests and hosts.",
    technologies: ["NextJS", "Tailwind", "Supabase", "Prisma"],
    link: "https://airbnb-clone-steel.vercel.app/",
  },
  {
    title: "Vinacen 3D Panel Product Showcase",
    image: project4,
    description:
      "A dynamic and visually captivating website showcasing 3D ceilings and walls products, designed to revolutionize interior design presentation. The platform combines sleek animations with an intuitive UI/UX to leave a lasting impression.",
    technologies: ["ReactJS", "Tailwind", "Supabase"],
    link: "https://vina-cen.vercel.app/",
  },
  {
    title: "IT Jobs Platform - TechHire",
    image: project2,
    description:
      "A web platform connecting IT professionals with job opportunities, featuring dynamic job listings and management.",
    technologies: ["ReactJS", "Tailwind", "NodeJS", "JSON Server"],
    link: "https://tech-hire-lovat.vercel.app/",
  },
  {
    title: "Restaurant Landing Page",
    image: project3,
    description:
      "A sleek, interactive website for a restaurant with smooth animations and engaging UI/UX design.",
    technologies: ["ReactJS", "Tailwind"],
    link: "https://restaura-landing-page-cyan.vercel.app/",
  },
  {
    title: "VirtualR Landing Page",
    image: project5,
    description:
      "A clean, modern, and trustworthy design that reflects the innovation and efficiency of the virtual tools. The visual identity will aim to build immediate credibility.",
    technologies: ["ReactJS", "Tailwind"],
    link: "https://virtual-tools.vercel.app/",
  },
];

export const CONTACT = {
  address: "My An - Ngu Hanh Son - Danang ",
  phoneNo: "+84 385 010 771",
  email: "huyxtqh@gmail.com",
};
