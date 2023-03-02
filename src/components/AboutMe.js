import React from "react";
import { TerminalIcon, UsersIcon } from "@heroicons/react/solid";
import { testimonials } from "../data";

export default function AboutMe() {
  return (
    <section id="aboutme" className="relative">
      <div className="container px-5 py-10 mx-auto text-center">
        {/* <UsersIcon className="w-10 inline-block mb-4" /> */}
        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
          AboutMe
        </h1>
        <p
          className="lg:w-2/3 mx-auto leading-relaxed text-base"
          style={{ width: "100%", fontSize: "20px" }}
        >
          An aspiring Full Stack Developer with skills to create web
          applications in the MERN tech stack. Goal-oriented, a quick learner,
          and a good team collaborator looking to work for an product- based
          organization that provides challenging opportunities along with ample
          chances to grow and enhance my skills like react, node, and other MERN
          stack skills.
        </p>
      </div>
    </section>
  );
}
