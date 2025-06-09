import React from "react";
import image from "./assets/image.jpeg";
import { FaTwitter } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import Exp1 from "./assets/logo.svg";
import Exp2 from "./assets/todos.jpeg";
import Exp3 from "./assets/interview.jpg";
import { ConfettiButton } from "@/components/ui/confetti";
import BlurFade from "@/components/ui/blur-fade";
import ShinyButton from "@/components/ui/shiny-button";
import { BiSolidUserAccount } from "react-icons/bi";

function App() {
  return (
    <BlurFade delay={0.5} inView>
      <div>
        <section className="mt-12 max-w-2xl mx-auto">
          <div className="flex gap-14">
            <div className="">
              <h1 className="text-4xl font-black">Hey , I am Krishna </h1>
              <p className="font-light text-lg mt-2 ">
                A passionate front-end developer eager to build impactful and
                user-friendly web applications. I enjoy turning ideas into
                real-world products through clean and responsive UI design.
              </p>
              <div className="flex mt-3 gap-3">
                <div className='relative group'>
                  <a
                    href="https://www.linkedin.com/in/krishna-shekhawat-982814323/"
                    target="_blank"
                    className="text-2xl hover:text-blue-600 transition-colors"
                  >
                    <CiLinkedin />
                  </a>
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-all bg-gray-800 text-white text-xs px-2 py-1 rounded shadow z-10">
                    LinkedIn
                  </span>
                </div>

              <div className="relative group">
                  <a
                  href="https://flowcv.com/resume/g04iwmp98aih"
                  target="_blank"
                  className="text-2xl hover:text-blue-600 transition-colors"
                >
                  <BiSolidUserAccount />
                </a>
                 <span className="absolute -top-8 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-all bg-gray-800 text-white text-xs px-2 py-1 rounded shadow z-10">
      Resume
    </span>
              </div>
              </div>
            </div>
            <img
              src={image}
              alt=""
              className="object-cover rounded-full h-24 w-24"
            />
          </div>
        </section>

        <section className="mt-12 max-w-2xl mx-auto">
          <h1 className="text-2xl font-black">About Me</h1>
          <p className="font-light  text-neutral-600 ">
            Detail-oriented and self-motivated B.Tech graduate transitioning
            from teaching to frontend software engineering. Proficient in
            React.js, JavaScript, HTML, and CSS. Seeking an internship to apply
            skills, gain hands-on experience, and contribute effectively to a
            dynamic development team.
          </p>
        </section>

        <section className="mt-12 max-w-2xl mx-auto">
          <h1 className="text-2xl font-black">Projects</h1>
          {/* <p className='font-light  text-neutral-600 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, repellat.</p> */}

          <div className="mt-10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img src={Exp1} className="h-10 rounded-full" alt="" />
                <div>
                  <h2 className="text-sm font-semibold ">GptClone</h2>
                  <p className="text-sm">
                    The ChatGPT Clone is an AI-powered chat application that
                    mimics the functionality of OpenAI’s ChatGPT. This project
                    allows users to interact with an AI assistant in real-time,
                    sending and receiving messages dynamically.
                    <a href="https://gpt-chat-api-rho.vercel.app/"></a>
                  </p>
                </div>
              </div>
              <p className="text-neutral-500 font-ligh"></p>
            </div>
          </div>

          <div className="mt-10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img src={Exp2} className="h-10 rounded-full" alt="" />
                <div>
                  <h2 className="text-sm font-semibold">Taskade</h2>
                  <p className="text-sm">
                    The React To-Do App is a simple yet powerful task management
                    application that allows users to organize their daily
                    activities efficiently.

                  </p>
                </div>
              </div>
              <p className="text-neutral-500 font-ligh"></p>
            </div>
          </div>

          <div className="mt-10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img src={Exp3} className="h-12 rounded-full" alt="" />
                <div>
                  <h2 className="text-sm font-semibold">Interview_GPT</h2>
                  <p className="text-sm">
                    This project is an AI-powered JavaScript interview practice
                    tool that helps users improve their coding and communication
                    skills. It randomly generates JavaScript-related questions,
                    records the user's spoken response, and then analyzes the
                    answer using AI to provide constructive feedback.
                  </p>
                </div>
              </div>
              <p className="text-neutral-500 font-ligh"></p>
            </div>
          </div>
        </section>

        <section className="mt-12 mb-24 max-w-2xl mx-auto">
          <h1 className="text-2xl font-black">Get in Touch</h1>
          <p className="font-light  text-neutral-600 ">
            Feel free to reach out for collaboration, internships, or just a
            friendly tech chat. I'm always open to connecting with like-minded
            developers and mentors. Let's build something great together!
          </p>
          <div className="relative">
            <a href="mailto:kishushekhawat1@gmail.com" className="text-xl">
              <ShinyButton className="text-yellow-200 mt-6 px-5 rounded-full">
                Email me{" "}
              </ShinyButton>{" "}
            </a>
          </div>
        </section>
      </div>
    </BlurFade>
  );
}

export default App;
