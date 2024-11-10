"use client";
import ProjectCard from "@/components/projectCard";
import styles from "./project.module.css";

export default function Project() {
  const projects = [
    {
      img: "/nasa.png",
      title: "Nasa AI",
      description: "A SaaS platform build with OpenAI & Replicate APIs",
      route: "//github.com/NaimalArain13/NaSa_SaaS_ai",
    },
    {
      img: "/blog2.png",
      title: "Dynamic Blog Platform",
      description: "Responsive blog platform for writing and sharing articles.",
      route: "//blog-platform-by-na.vercel.app/",
    },
    {
      img: "/tech.png",
      title: "Tech Store",
      description:
        "A Techbook store that leverages the react context api for global state management.",
      route: "//naimal-arain-milestone-03-e-commerce-website.vercel.app/",
    },
    {
      img: "/resume.png",
      title: "Interactive and Dynamic Resume Builder",
      description: "A resume builder build with core technology, HTML, CSS, Typescript",
      route: "//hackathon-interative-resume-builder.vercel.app/",
    },
    {
      img: "/e-learn.png",
      title: "E-Learn platform UI",
      description: "An education learning platform UI build with nextjs, tailwind, shadcn and many more.",
      route: "//naimal-educational-learning-platform-assignment02-milestone02.vercel.app/",
    },
    {
      img: "/todo2.png",
      title: "Todo App",
      description: "Task management app to organize and track daily activities.",
      route: "//my-todo-app-green.vercel.app/",
    },
    {
      img: "/atm2.png",
      title: "ATM CLI",
      description: "Command-line ATM simulation with essential banking operations.",
      route: "//github.com/NaimalArain13/cli-ATM-Project",
    },
    {
      img: "/num2.png",
      title: "Number Guessing CLI",
      description: "Interactive CLI game to guess numbers, built with TypeScript.",
      route: "//github.com/NaimalArain13/number-guessing-game13",
    },
    {
      img: "/hello.png",
      title: "Hello_World App",
      description: "A Simple Hello World Application build with nextjs and styled with Tailwind",
      route: "//nextjs-react-milestones.vercel.app/",
    },
  ];

  return (
    <div className={styles.projectContainer}>
      <h1 className={styles.heading}>Featured Projects</h1>
      <div className={styles.gridContainer}>
        {projects.map((project, index) => (
          <ProjectCard key={index} prop={project} />
        ))}
      </div>
    </div>
  );
}
