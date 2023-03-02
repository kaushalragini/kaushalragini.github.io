import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  return (
    <header className="navHeader bg-gray-900 md:sticky top-0 z-10 sm:sticky top-0 z-12">
      <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
        {/* <nav class="bg-gray-50 dark:bg-gray-900">
          <div class="max-w-screen-xl px-4 py-3 mx-auto md:px-6">
            <div class="flex items-center">
              <ul class="flex flex-row mt-0 space-x-8 text-sm font-medium">
                <li>
                  <a
                    href="#"
                    class="text-gray-900 dark:text-white hover:underline"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="text-gray-900 dark:text-white hover:underline"
                  >
                    About Me
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="text-gray-900 dark:text-white hover:underline"
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="text-gray-900 dark:text-white hover:underline"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="text-gray-900 dark:text-white hover:underline"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav> */}

        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Home
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center ">
          <a
            href="#aboutme"
            className="mr-2 hover:text-white flex flex-row mt-0 space-x-8 text-md"
          >
            About Me
          </a>
          <a
            href="#skills"
            className="mr-2 hover:text-white flex flex-row mt-0 space-x-8 text-md"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="mr-2 hover:text-white flex flex-row mt-0 space-x-8 text-md"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="mr-2 hover:text-white flex flex-row mt-0 space-x-8 text-md"
          >
            Contact
          </a>
          <a
            href="./Ragini_Kaushal_Resume.pdf"
            target="_blank"
            className="mr-2 hover:text-white"
            download
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}
