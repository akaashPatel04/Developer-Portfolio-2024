import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className="font-semibold bg-white rounded-lg text-black max-w-2xl py-4 px-8">
        Hi, I'm <span className="text-primary">Akash</span>
        👋
        <br />A Web Developer from India
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className="homeInfoDiv">
        <p>
          Picked up many skills <br /> on my Full Stack Journey
        </p>

        <Link to="/about" className="homeInfoButton">
          Learn more
          <FaArrowRight />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className="homeInfoDiv">
        <p>
          Created major projects
          <br /> Curious about them?
        </p>

        <Link to="/projects" className="homeInfoButton">
          Visit portfolio
          <FaArrowRight />
        </Link>
      </div>
    );
  }

  // if (currentStage === 4) {
  //   return (
  //     <div className="homeInfoDiv">
  //       <p>
  //         Need a project done or looking for a dev? <br /> I'm just a few
  //         keystrokes away
  //       </p>

  //       <Link to="/about" className="homeInfoButton">
  //         Let's talk
  //         <img src={arrow} alt="arrow" />
  //       </Link>
  //     </div>
  //   );
  // }

  return null;
};

export default HomeInfo;
