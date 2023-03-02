import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import CalendarGithub from "./CalendarGithub";

export default function Projects() {
  const myProjects = [
    {
      header: "ModeSense.com Clone",
      title:
        "ModeSens is your fashion shopping assistant dedicated to saving you time and money. With ModeSens, you can view a product's availability, price, color, pattern and available discounts and Compare with other brands",
      url: "projects-img/project1.png",
      links: {
        github: {
          img: "./projects-img/github.png",
          url: "https://github.com/kaushalragini/likeable-creature-964",
        },
        web: {
          img: "./projects-img/webpage.png",
          url: "https://ephemeral-khapse-ae9cfa.netlify.app/",
        },
      },
      tech_stack: [
        { name: "React", img: "projects-img/react.png" },
        { name: "HTML", img: "projects-img/html.png" },
        { name: "JQuery", img: "projects-img/jquery.png" },
        { name: "Bootstrap", img: "projects-img/bootstrap.png" },
        { name: "CSS", img: "projects-img/css.png" },
      ],
    },
    {
      header: "RentoMojo.com Clone",
      title:
        "Whether you have a home or have just rented a room here, you’ll find everything you need on our website. We offer top-quality furniture, appliances, and electronics, made by the most dependable, in-demand brands around. ",
      url: "https://user-images.githubusercontent.com/110046267/208317423-83cbd9a4-0ff9-41d9-8dbb-3e7487c06f8f.png",
      links: {
        github: {
          img: "./projects-img/github.png",
          url: "https://github.com/kaushalragini/First_Rent",
        },
        web: {
          img: "./projects-img/webpage.png",
          url: "https://prismatic-pony-f5f3a1.netlify.app/",
        },
      },
      tech_stack: [
        { name: "React", img: "projects-img/react.png" },
        { name: "HTML", img: "projects-img/html.png" },
        { name: "JQuery", img: "projects-img/jquery.png" },
        { name: "Bootstrap", img: "projects-img/bootstrap.png" },
        { name: "CSS", img: "projects-img/css.png" },
      ],
    },
    {
      header: "lifeStyle.com Clone",
      title:
        "lifestyle is an apparel and accessories e-commerce website that delivers an immersive and engaging shopping experience like no other",
      url: "projects-img/lifeStyle.png",
      links: {
        github: {
          img: "./projects-img/github.png",
          url: "https://github.com/kaushalragini/MyLifestyle_FashionStore",
        },
        web: {
          img: "./projects-img/webpage.png",
          url: "https://zippy-douhua-130236.netlify.app/",
        },
      },
      tech_stack: [
        { name: "React", img: "projects-img/react.png" },
        { name: "HTML", img: "projects-img/html.png" },
        { name: "JQuery", img: "projects-img/jquery.png" },
        { name: "Bootstrap", img: "projects-img/bootstrap.png" },
        { name: "CSS", img: "projects-img/css.png" },
      ],
    },
    {
      header: "BlueFly.com Clone",
      title:
        "Bluefly is the online shopping destination for the style obsessed, shop designer styles from Prada, Gucci, Dior, Valentino and many more International brands. ",
      url: "projects-img/project2.png",
      links: {
        github: {
          img: "./projects-img/github.png",
          url: "https://github.com/kaushalragini/eminent-hands-5039",
        },
        web: {
          img: "projects-img/webpage.png",
          url: "https://beamish-centaur-eafcef.netlify.app/",
        },
      },
      tech_stack: [
        { name: "React", img: "projects-img/react.png" },
        { name: "HTML", img: "projects-img/html.png" },
        { name: "JQuery", img: "projects-img/jquery.png" },
        { name: "Bootstrap", img: "projects-img/bootstrap.png" },
        { name: "CSS", img: "projects-img/css.png" },
      ],
    },
  ];
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Projects
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            My projects make use of a vast variety of latest technology tools.
            My best experience is to create Front-End projects React Project
            with React, HTML, CSS, Jquery technologies. Below are some of my
            projects.
          </p>
        </div>
        <div className="flex flex-wrap -m-4 projectPage">
          {myProjects.map((project) => (
            <a className="sm:w-1/2 h-1 md:w-1/2 h-1 p-4 projectSection">
              <div className="projectImg">
                <img src={project.url} />
              </div>
              <div className="flex relative projectTxt">
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 hover:opacity-100">
                  <h1 className="projectHeader">{project.header}</h1>
                  <h2 className="title-font text-lg font-medium text-white mb-3 projectTitle">
                    {project.title}
                  </h2>
                  <p className="leading-relaxed">{project.description}</p>
                  <div className="flex-container">
                    <div className="flex-child stack">
                      {project.tech_stack.map((item) => {
                        return (
                          <div className="projectTechStack">
                            <img src={item.img} />
                          </div>
                        );
                      })}
                    </div>
                    <div className="flex-child links">
                      <div className="projectLinks">
                        <a
                          href={project.links.github.url}
                          target="_blank"
                          className="githubLink ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-3 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-md"
                        >
                          Github Link
                        </a>
                        <a
                          href={project.links.web.url}
                          target="_blank"
                          className="checkitOut ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-3 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-md"
                        >
                          Check it Out!
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className="githubCal">
          <CalendarGithub />
        </div>
      </div>
    </section>
  );
}
