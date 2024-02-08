import "../styles/footer.css";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { HiArrowUpRight } from "react-icons/hi2";
import { GrClose } from "react-icons/gr";
import { useRef, useState } from "react";
import Form from "./Contact Form/Form";

const Contact = ({ page }) => {
  const [isOpen, setIsOpen] = useState(false);
  const formRef = useRef();

  const contactFormToggler = () => {
    const form = formRef.current;
    const bg = page.current;
    if (isOpen) {
      setIsOpen(false);
      form.style.width = "00%";
      form.style.display = "hidden";
      bg.style.pointerEvents = "all";
    } else {
      setIsOpen(true);
      if (window.innerWidth < 850) {
        bg.style.pointerEvents = "none";
        form.style.width = "100%";
        form.style.display = "block";
        form.style.pointerEvents = "all";
      } else {
        bg.style.pointerEvents = "none";
        form.style.width = "55%";
        form.style.display = "block";
        form.style.pointerEvents = "all";
      }
    }
  };

  return (
    <>
      <div
        ref={formRef}
        className="min-h-[100vh] bg-slate-100 w-0 hidden z-50 fixed top-0 left-0 projectForm"
      >
        {isOpen && (
          <>
            <button
              onClick={() => contactFormToggler()}
              className="flex items-center justify-center cursor-pointer bg-[#6e64f7] h-14 w-14 rounded-full text-white text-2xl font-bold relative top-8 left-[80%]"
            >
              <GrClose />
            </button>
            <Form contactFormToggler={contactFormToggler} />
          </>
        )}
      </div>
      <div>
        <div className="md:ml-28 flex flex-col font-[Cambria] text-3xl md:text-5xl font-bold py-6">
          <> Let's Talk About</>
          <span className="purple_gradient_text w-fit md:h-14">
            Next Big Thing
          </span>{" "}
        </div>
        <div className="flex flex-col md:flex-row items-center mb-8 md:my-8 justify-center gap-[3vh] md:gap-[8vw]">
          <button
            onClick={() => contactFormToggler()}
            className="md:px-32 md:h-24 md:text-2xl h-20 px-24 text-lg bg-primary border-2 border-primary rounded-full text-white font-semibold  transition-all hover:bg-white hover:text-primary"
          >
            Discuss Project
          </button>
          <a
            href="mailto:akaashpatel04@gmail.com"
            className="md:px-32 md:h-24 md:text-2xl h-20 px-24 text-lg bg-primary border-2 border-primary rounded-full text-white font-semibold  transition-all hover:bg-white hover:text-primary flex items-center"
          >
            Message
          </a>
        </div>
      </div>
      <div className="mx-auto">
        <a
          href="https://twitter.com/akaashpatel04"
          className="linkIcons"
          target="_blank"
        >
          <div className="animatedOverlay"></div>
          <div className="textInfo">
            <FaTwitter />
            <>Twitter</>
          </div>
          <HiArrowUpRight className="arrowIcon" />
        </a>
        <a
          href="https://www.linkedin.com/in/akash-kumar-patel/"
          className="linkIcons"
          target="_blank"
        >
          <div className="animatedOverlay"></div>
          <div className="textInfo">
            <FaLinkedin />
            <>Linkedin</>
          </div>
          <HiArrowUpRight className="arrowIcon" />
        </a>
        <a
          href="https://www.instagram.com/akash_.patel04/"
          className="linkIcons"
          target="_blank"
        >
          <div className="animatedOverlay"></div>
          <div className="textInfo">
            <GrInstagram />
            <>Instagram</>
          </div>
          <HiArrowUpRight className="arrowIcon" />
        </a>
        <a
          href="https://github.com/akaashPatel04"
          className="linkIcons"
          target="_blank"
        >
          <div className="animatedOverlay"></div>
          <div className="textInfo">
            <FaGithub />
            <>Github</>
          </div>
          <HiArrowUpRight className="arrowIcon" />
        </a>
      </div>
    </>
  );
};

export default Contact;
