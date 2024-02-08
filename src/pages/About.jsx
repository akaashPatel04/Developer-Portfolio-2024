import avatar from "../assets/images/avatar.webp";

import css from "../assets/icons/css.svg";
import express from "../assets/icons/express.svg";
import html from "../assets/icons/html.svg";
import javascript from "../assets/icons/javascript.svg";
import github from "../assets/icons/github.svg";
import mongodb from "../assets/icons/mongodb.svg";
import nextjs from "../assets/icons/nextjs.svg";
import nodejs from "../assets/icons/nodejs.svg";
import react from "../assets/icons/react.svg";
import threejs from "../assets/icons/three.png";
import responsive from "../assets/icons/responsive.png";
import chakraui from "../assets/icons/chakra.png";
import redux from "../assets/icons/redux.png";
import stripe from "../assets/icons/stripe.svg";
import file from "../assets/icons/cloudinary.png";
import gsap from "../assets/icons/gsap.svg";

import { FaArrowDown } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import Contact from "../components/Contact";
import { useRef } from "react";

const About = () => {
  const aboutRef = useRef();
  return (
    <>
      <section ref={aboutRef} className="mx-auto pt-32 md:pt-44 px-6 md:px-12">
        <div className="flex gap-10 md:gap-20 lg:gap-0 flex-col lg:flex-row justify-between">
          <div className="w-[100%] lg:w-[55%]">
            <h1 className="text-3xl md:text-5xl font-bold font-[Cambria]">
              <span className="purple_gradient_text">Akash</span>
              {"  "} is a
              <br />
              <Typewriter
                options={{
                  strings: ["Developer.", "Designer.", "Programmer."],
                  autoStart: true,
                  loop: true,
                  cursor: "",
                }}
              />
            </h1>
            <p className="text-slate-500 my-6 md:my-12 leading-tight text-lg">
              I started my journey as a Programmer from starting of August 2023.
              Passionate MERN Stack Web Developer as I Love turning ideas into
              awesome websites. <br />
            </p>
            <a
              className="homeInfoButton w-fit !mx-0 !static"
              href="https://docs.google.com/document/d/1KIO0ZjpI_WO3xuv-kgpNndZ4oS9On7bhYSfFdrHIW7w/edit?usp=drive_link"
              target="_blank"
            >
              <>Download Resume</>
              <FaArrowDown />
            </a>
          </div>
          <div className="flex justify-center h-[100%] w-[100%] lg:w-[45%] relative overflow-hidden">
            <div className="bg-[#aba5ff] rounded-full w-[80vw] h-[80vw]  md:w-[65vh] absolute md:h-[65vh]"></div>
            <img src={avatar} alt="aa" className="h-[70vw] md:h-[70vh] z-10" />
          </div>
        </div>
        <hr className="border-slate-300" />

        <div className="px-6 md:px-12 py-32">
          <h1 className="text-3xl md:text-5xl font-bold font-[Cambria]">
            <span className="purple_gradient_text">Tech</span>
            <br />
            Stack
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-12 gap-8">
            <div className="techSkillDiv">
              <img src={javascript} alt="Tech" className="h-24 w-24" />
              <p className="techSkillDivHeading">Javascript</p>
              <p className="pl-6 font-semibold text-center text-sm">
                Powering dynamic, interactive web experiences with versatility
                and cross-browser compatibility.
              </p>
            </div>
            <div className="techSkillDiv">
              <img src={react} alt="Tech" className="h-24 w-24" />
              <p className="techSkillDivHeading">React</p>
              <p className="pl-6 font-semibold text-center text-sm">
                {" "}
                Building dynamic, user-friendly interfaces with reusable
                components for modern web applications.
              </p>
            </div>
            <div className="techSkillDiv">
              <img src={nodejs} alt="Tech" className="h-24 w-24" />
              <p className="techSkillDivHeading">NodeJS</p>
              <p className="pl-6 font-semibold text-center text-sm">
                JavaScript on the server side for fast and scalable web
                applications.
              </p>
            </div>
            <div className="techSkillDiv">
              <img src={mongodb} alt="Tech" className="h-24 w-24" />
              <p className="techSkillDivHeading">Mongo DB</p>
              <p className="pl-6 font-semibold text-center text-sm">
                NoSQL database, storing data in JSON-like documents for seamless
                scalability.
              </p>
            </div>
            <div className="techSkillDiv">
              <img src={nextjs} alt="Tech" className="h-24 w-24" />
              <p className="techSkillDivHeading">Next JS</p>
            </div>
            <div className="techSkillDiv">
              <img src={express} alt="Tech" className="h-24 w-24" />
              <p className="techSkillDivHeading">Express</p>
            </div>
            <div className="techSkillDiv">
              <img src={github} alt="Tech" className="h-24 w-24" />
              <p className="techSkillDivHeading">Git Hub</p>
            </div>
            <div className="techSkillDiv">
              <img src={html} alt="Tech" className="h-24 w-24" />
              <p className="techSkillDivHeading">HTML</p>
            </div>
            <div className="techSkillDiv">
              <img src={css} alt="Tech" className="h-24 w-24" />
              <p className="techSkillDivHeading">CSS</p>
            </div>
            <div className="techSkillDiv">
              <img src={threejs} alt="Tech" className="h-24 w-24" />
              <p className="techSkillDivHeading">Three JS</p>
            </div>
            <div className="techSkillDiv">
              <img src={chakraui} alt="Tech" className="h-24 w-24" />
              <p className="techSkillDivHeading">Chakra UI</p>
            </div>
            <div className="techSkillDiv">
              <img src={gsap} alt="Tech" className="h-24 w-24" />
              <p className="techSkillDivHeading">GSAP</p>
            </div>
            <div className="techSkillDiv">
              <img src={responsive} alt="Tech" className="h-24 w-24" />
              <p className="techSkillDivHeading">Responsive</p>
            </div>
            <div className="techSkillDiv">
              <img src={redux} alt="Tech" className="h-24 w-24" />
              <p className="techSkillDivHeading">Redux</p>
            </div>
            <div className="techSkillDiv">
              <img src={file} alt="Tech" className="h-24 w-24" />
              <p className="techSkillDivHeading">File Upload</p>
            </div>
            <div className="techSkillDiv">
              <img src={stripe} alt="Tech" className="h-24 w-24" />
              <p className="techSkillDivHeading">Stripe</p>
            </div>
          </div>
        </div>
        <Contact page={aboutRef} />
      </section>
    </>
  );
};

export default About;
