import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Ragini Kaushal
            <br className="hidden lg:inline-block" />
          </h1>
          <h2 className="sm:text-1xl text-2xl font-medium">
            Full Stack Web Developer.
          </h2>
          <br />
          <p className="mb-8 leading-relaxed">
            Self-motivated aspiring Full Stack Web Developer. Specialization in
            MERN stack with a keen interest in working with cutting-edge
            technologies.
          </p>
          <div className="flex justify-center">
            <a
              href="#"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              Resume
            </a>
            <a
              href="#"
              className="ml-4 inline-flex text-white text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none rounded text-lg"
            >
              Github
            </a>
            <a
              href="#"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              Linkedin
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./110046267.jpeg"
          />
        </div>
      </div>
    </section>
  );
}
