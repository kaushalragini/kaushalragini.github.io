import React from "react";
import { TerminalIcon, UsersIcon } from "@heroicons/react/solid";
import { testimonials } from "../data";

export default function AboutMe() {
  return (
    <section id="aboutmeSection" className="relative">
      <div className="container px-5 py-10 mx-auto text-center">
        {/* <UsersIcon className="w-10 inline-block mb-4" /> */}
        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
          AboutMe
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui laborum
          quasi, incidunt dolore iste nostrum cupiditate voluptas? Laborum,
          voluptas natus?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui laborum
          quasi, incidunt dolore iste nostrum cupiditate voluptas? Laborum,
          voluptas natus?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui laborum
          quasi, incidunt dolore iste nostrum cupiditate voluptas? Laborum,
          voluptas natus?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui laborum
          quasi, incidunt dolore iste nostrum cupiditate voluptas? Laborum,
          voluptas natus?
        </p>
      </div>
    </section>
  );
}
