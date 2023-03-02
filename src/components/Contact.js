import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    window.Email.send({
      Host: "smtp.elasticemail.com",
      Username: "ragini93.11@gmail.com",
      Password: "A816864827AD798412B7F4E6BF77F5FDE3BD", //A816864827AD798412B7F4E6BF77F5FDE3BD
      To: "ragini11.93@gmail.com",
      From: "you@isp.com",
      Subject: "Enquiry",
      Body: JSON.stringify({ name, email, message }),
    }).then((message) => alert(message));
    // fetch("/", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/x-www-form-urlencoded" },
    //   body: encode({ "form-name": "test", name, email, message }),
    // })
    //   .then(() => alert("Message sent!"))
    //   .catch((error) => alert(error));
  }

  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap contaccontainer">
        <div>
          <form
            netlify
            name="test"
            className=" flex flex-col md:ml-auto md:py-8 mt-8 md:mt-0 contactmeForm"
          >
            <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
              Get In Touch
            </h2>

            <div className="relative mb-4">
              <h1>
                <div
                  style={{
                    display: "flex",
                    // justifyContent: "space-evenly",
                    alignItems: "center",
                  }}
                >
                  <FiPhoneCall />
                  <h1 style={{ margin: "5px" }}>+918810500230</h1>
                </div>
              </h1>
            </div>
            <div className="relative mb-4">
              <div
                style={{
                  display: "flex",
                  // justifyContent: "space-evenly",
                  alignItems: "center",
                }}
              >
                <AiOutlineMail />
                <h1 style={{ margin: "5px" }}>ragini11.93@gmail.com</h1>
              </div>
            </div>
            <div className="relative mb-4">
              <a
                href="https://www.linkedin.com/in/ragini-kaushal-7a6975119/"
                target="_blank"
              >
                <img
                  width="10%"
                  src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                />
              </a>
            </div>
            <div className="relative mb-4">
              <a href="https://github.com/kaushalragini" target="_blank">
                <img
                  width="10%"
                  src="https://cdn-icons-png.flaticon.com/512/38/38401.png"
                />
              </a>
            </div>
          </form>
        </div>
        <div>
          <form
            netlify
            name="test"
            onSubmit={handleSubmit}
            className=" flex flex-col md:ml-auto md:py-8 mt-8 md:mt-0 contactmeForm"
          >
            <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
              Contact Me
            </h2>
            <p className="leading-relaxed mb-5">
              Fill the form to reach out to me
            </p>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-400">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-400"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-400"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
