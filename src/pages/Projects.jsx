import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import Contact from "../components/Contact";
import arrow from "../assets/icons/arrow.svg";
import { HiArrowUpRight, HiArrowDown } from "react-icons/hi2";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Cart from "../assets/images/ecommerce/Cart.png";
import Dashboard from "../assets/images/ecommerce/Dashboard.png";
import ExploreProduct from "../assets/images/ecommerce/ExploreProduct.png";
import Order from "../assets/images/ecommerce/Order.png";
import OrderListAdmin from "../assets/images/ecommerce/OrderListAdmin.png";
import Payment from "../assets/images/ecommerce/Payment.png";
import Product from "../assets/images/ecommerce/Product.png";
import Profile from "../assets/images/ecommerce/Profile.png";
import UserListAdmin from "../assets/images/ecommerce/UserListAdmin.png";

import Crypto from "../assets/images/crypto/X-Crypto.png";
import Search from "../assets/images/crypto/Search.png";
import Exchanges from "../assets/images/crypto/Exchanges.png";
import CoinPage from "../assets/images/crypto/CoinPage.png";
import CoinPage2 from "../assets/images/crypto/CoinPage2.png";

import feed from "../assets/images/feed.PNG";
import profile from "../assets/images/profile.PNG";
import register from "../assets/images/register.PNG";
import search from "../assets/images/search.PNG";

import discFood from "../assets/images/minor/discovered-food.png";
import discFood2 from "../assets/images/minor/discovered-food-2.png";
import discFood3 from "../assets/images/minor/discovered-food-3.png";
import discFood4 from "../assets/images/minor/discovered-food-4.png";
import netflix from "../assets/images/minor/netflix.png";
import netflix2 from "../assets/images/minor/netflix2.png";
import netflix3 from "../assets/images/minor/netflix3.png";
import netflix4 from "../assets/images/minor/netflix4.png";

import "../styles/project.css";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const mainSection = useRef();

  useEffect(() => {
    const section = mainSection.current;
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "38% 50%",
        end: "100%% 50%",
        scrub: 1,
        pin: true,
      },
    });

    tl.to(
      ".text",
      {
        top: "0%",
      },
      "a"
    )
      .to(
        "#project-one",
        {
          top: "35%",
        },
        "a"
      )
      .to(
        "#project-two",
        {
          top: "130%",
        },
        "a"
      )
      .to(
        "#project-two",
        {
          top: "42%",
        },
        "b"
      )
      .to(
        "#project-one",
        {
          width: "65%",
          height: "65vh",
        },
        "b"
      )
      .to(
        "#project-three",
        {
          top: "130%",
        },
        "b"
      )
      .to(
        "#project-three",
        {
          top: "50%",
        },
        "c"
      )
      .to(
        "#project-two",
        {
          width: "70%",
          height: "70vh",
        },
        "c"
      );
  }, []);
  return (
    <>
      <section ref={mainSection} className="mx-auto px-6 md:px-12 h-[110vh]">
        <div className="text w-[55vw]  md:ml-28 flex flex-col absolute top-[12%] font-[Cambria] text-3xl md:text-5xl font-bold">
          Featured
          <div className="flex items-center">
            <span className="purple_gradient_text w-36 ">Work</span>{" "}
            <HiArrowDown className="text-4xl font-bold" />
          </div>
        </div>

        <div className="flex my-16 gap-6">
          <div
            id="project-one"
            className="flex bg-[#ffb9ad] flex-col md:flex-row items-center absolute top-[130%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[80%] h-[80vh]"
          >
            <div className="mt-5 flex flex-col justify-center projectInfo">
              <h4 className="text-4xl font-[Cambria] font-semibold">
                Ecommerce
              </h4>
              <ul className="my-2 md:my-4 flex flex-col gap-1 md:gap-2 font-medium text-slate-800 list-disc  text-xs md:text-sm">
                <li className="leading-tight">
                  JWT Authentication stored in Local Storage.
                </li>
                <li className="leading-tight">
                  Which allows users to manage their Account and track Order
                  process.
                </li>
                <li className="leading-tight">
                  Rating for products, Stocks are updated after order's are
                  shipped.
                </li>
                <li className="leading-tight">
                  Admins can track sales and manage Products, Orders & Users.
                </li>
                <li>The App is Decent UI with all Functionalities.</li>
              </ul>

              <Link
                to={"https://apna-store-49fu.onrender.com"}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-600 mt-5 flex items-center gap-2 text-2xl"
              >
                <>Visit</>
                <img
                  src={arrow}
                  alt="arrow"
                  className="w-5 h-5 object-contain"
                />
              </Link>
            </div>
            <Carousel
              infiniteLoop
              autoPlay
              interval={"2000"}
              showStatus={false}
              showArrows={false}
              showThumbs={false}
              className="carouselContainer"
            >
              <div className="pimagesContainer">
                <img className="pimages" src={Profile} alt="Crypto" />
              </div>
              <div className="pimagesContainer">
                <img className="pimages" src={ExploreProduct} alt="Crypto" />
              </div>
              <div className="pimagesContainer">
                <img className="pimages" src={Product} alt="Crypto" />
              </div>
              <div className="pimagesContainer">
                <img className="pimages" src={Cart} alt="Crypto" />
              </div>
              <div className="pimagesContainer">
                <img className="pimages" src={Payment} alt="Crypto" />
              </div>
              <div className="pimagesContainer">
                <img className="pimages" src={Order} alt="Crypto" />
              </div>
              <div className="pimagesContainer">
                <img className="pimages" src={Dashboard} alt="Crypto" />
              </div>
              <div className="pimagesContainer">
                <img className="pimages" src={OrderListAdmin} alt="Crypto" />
              </div>
              <div className="pimagesContainer">
                <img className="pimages" src={UserListAdmin} alt="Crypto" />
              </div>
            </Carousel>
          </div>
          <div
            id="project-two"
            className="flex flex-col items-center bg-violet-200 md:flex-row absolute top-[230%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[80%] h-[80vh]"
          >
            <div className="mt-5 flex flex-col justify-center projectInfo">
              <h4 className="text-4xl font-[Cambria] font-semibold">
                Instagram
              </h4>
              <ul className="my-2 md:my-4 flex flex-col gap-1 md:gap-2 font-medium text-slate-800 list-disc  text-xs md:text-sm">
                <li className="leading-tight">HTTP only cookie secured.</li>
                <li className="leading-tight">
                  Users can fully customise their account.
                </li>
                <li className="leading-tight">
                  View who liked and commented the post, see followers and
                  following of others.
                </li>
                <li className="leading-tight">
                  Advanced search functionality.
                </li>
                <li className="leading-tight">
                  Our App is much more comparable with real Instagram.
                </li>
              </ul>

              <Link
                to={"https://social-media-n4bl.onrender.com/"}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-600 mt-5 flex items-center gap-2 text-2xl"
              >
                <>Visit</>
                <img
                  src={arrow}
                  alt="arrow"
                  className="w-5 h-5 object-contain"
                />
              </Link>
            </div>
            <Carousel
              infiniteLoop
              autoPlay
              interval={"2000"}
              showStatus={false}
              showArrows={false}
              showThumbs={false}
              className="carouselContainer"
            >
              <div className="pimagesContainer">
                <img className="pimages" src={feed} alt="Instagram" />
              </div>
              <div className="pimagesContainer">
                <img className="pimages" src={profile} alt="Instagram" />
              </div>
              <div className="pimagesContainer">
                <img className="pimages" src={register} alt="Instagram" />
              </div>
              <div className="pimagesContainer">
                <img className="pimages" src={search} alt="Instagram" />
              </div>
            </Carousel>
          </div>
          <div
            id="project-three"
            className="flex flex-col items-center md:flex-row bg-gray-400 absolute top-[250%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[80%] h-[80vh]"
          >
            <div className="mt-5 flex flex-col justify-center projectInfo">
              <h4 className="text-4xl font-[Cambria] font-semibold">
                X-Crypto
              </h4>
              <ul className="my-2 md:my-4 flex flex-col gap-1 md:gap-2 font-medium text-slate-800 list-disc  text-xs md:text-sm">
                <li className="leading-tight">
                  Crypto app which fetchs coins and exchanges from coingecko
                  API.
                </li>
                <li className="leading-tight">
                  Search coins, exchanges and nfts.
                </li>
                <li className="leading-tight">
                  Browse each coin in detail with all important and real-time
                  data, Charts and more.
                </li>
                <li className="leading-tight">
                  Custom error handling and skeloton loading for better UX
                </li>
                <li>All pages are 100% responsive.</li>
              </ul>

              <Link
                to={"https://x-crypto-beige.vercel.app/"}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-600 mt-5 flex items-center gap-2 text-2xl"
              >
                <>Visit</>
                <img
                  src={arrow}
                  alt="arrow"
                  className="w-5 h-5 object-contain"
                />
              </Link>
            </div>
            <Carousel
              infiniteLoop
              autoPlay
              interval={"2000"}
              showStatus={false}
              showArrows={false}
              showThumbs={false}
              className="carouselContainer"
            >
              <div className="pimagesContainer">
                <img className="pimages" src={Crypto} alt="Crypto" />
              </div>
              <div className="pimagesContainer">
                <img className="pimages" src={Exchanges} alt="Crypto" />
              </div>
              <div className="pimagesContainer">
                <img className="pimages" src={CoinPage} alt="Crypto" />
              </div>
              <div className="pimagesContainer">
                <img className="pimages" src={CoinPage2} alt="Crypto" />
              </div>
              <div className="pimagesContainer">
                <img className="pimages" src={Search} alt="Crypto" />
              </div>
            </Carousel>
          </div>
        </div>
      </section>
      <section className="mx-auto px-6 md:px-12">
        <MinorProjImageAnim />
        <Contact page={mainSection} />
      </section>
    </>
  );
};

export default Projects;

function MinorProjImageAnim() {
  const minorProjImageAnimContainer = useRef();
  const imgDivContainerRef1 = useRef();
  const imgDivContainerRef2 = useRef();
  const imageRef1 = useRef();
  const imageRef2 = useRef();

  const handleAnimation1 = (e) => {
    const imgCont = imgDivContainerRef1.current;
    const mainDiv = minorProjImageAnimContainer.current;
    const image = imageRef1.current;

    imgCont.style.opacity = 1;
    imgCont.style.top = e.clientY + "px";
    imgCont.style.left = e.clientX + "px";
    mainDiv.style.backgroundColor = "#d1f9f5";
    image.style.filter = "grayscale(1)";
  };

  const handleAnimationLeave1 = (e) => {
    const mainDiv = minorProjImageAnimContainer.current;
    const imgCont = imgDivContainerRef1.current;
    const image = imageRef1.current;

    imgCont.style.opacity = 0;
    mainDiv.style.backgroundColor = "white";
    image.style.filter = "grayscale(0)";
  };

  const handleAnimation2 = (e) => {
    const mainDiv = minorProjImageAnimContainer.current;
    const imgCont = imgDivContainerRef2.current;
    const image = imageRef2.current;

    imgCont.style.opacity = 1;
    imgCont.style.top = e.clientY + "px";
    imgCont.style.left = e.clientX + "px";
    mainDiv.style.backgroundColor = "#f9dbde";
    image.style.filter = "grayscale(1)";
  };

  const handleAnimationLeave2 = (e) => {
    const mainDiv = minorProjImageAnimContainer.current;
    const imgCont = imgDivContainerRef2.current;
    const image = imageRef2.current;

    imgCont.style.opacity = 0;
    mainDiv.style.backgroundColor = "white";
    image.style.filter = "grayscale(0)";
  };

  return (
    <div
      ref={minorProjImageAnimContainer}
      className="w-full py-12 md:py-28 flex md:flex-row flex-col gap-6 md:gap-0 relative overflow-hidden flex-wrap justify-between items-baseline minorProjImageAnimContainer"
    >
      <div className="w-[65vw] flex flex-col md:ml-28 font-[Cambria] text-3xl md:text-5xl font-bold sm:6 md:mb-20">
        Few
        <span className="purple_gradient_text w-32">More</span>
      </div>
      <a
        target="_blank"
        rel="noreferrer"
        className="w-[95%] md:w-[63%]  overflow-hidden"
        href="https://discovered-food-clone.vercel.app/"
        onMouseMove={(e) => handleAnimation1(e)}
        onMouseLeave={(e) => handleAnimationLeave1(e)}
      >
        <div ref={imgDivContainerRef1} className="w-56 absolute opacity-0 z-50">
          <div className="flex w-[100%] items-center justify-between font-semibold">
            <button className="flex items-center justify-center font-semibold rounded-full bg-slate-200 w-12 h-12">
              <HiArrowUpRight className="" />
            </button>
            <div className="rounded-full bg-slate-200 w-[70%] text-center py-3">
              Nov 2023
            </div>
          </div>
          <div className="w-full elem">
            <img src={discFood} alt="Food Web" />
            <img src={discFood2} alt="Food Web" />
            <img src={discFood3} alt="Food Web" />
            <img src={discFood4} alt="Food Web" />
          </div>
        </div>
        <img
          ref={imageRef1}
          src={discFood}
          className="[w-100%] object-contain"
          alt="Food Web"
        />
      </a>
      <a
        rel="noreferrer"
        target="_blank"
        className="md:w-[32%] w-[63%] overflow-hidden self-end md:self-auto"
        href="https://netflix-html-css-tawny.vercel.app"
        onMouseMove={(e) => handleAnimation2(e)}
        onMouseLeave={(e) => handleAnimationLeave2(e)}
      >
        <div ref={imgDivContainerRef2} className="w-56 absolute opacity-0 z-50">
          <div className="flex w-[100%] items-center justify-between font-semibold">
            <button className="flex items-center justify-center font-semibold rounded-full bg-slate-200 w-12 h-12">
              <HiArrowUpRight className="" />
            </button>
            <div className="rounded-full bg-slate-200 w-[70%] text-center py-3">
              Aug 2023
            </div>
          </div>
          <div className="w-full elem">
            <img src={netflix} alt="Netflix" />
            <img src={netflix2} alt="Netflix" />
            <img src={netflix3} alt="Netflix" />
            <img src={netflix4} alt="Netflix" />
          </div>
        </div>
        <img
          ref={imageRef2}
          src={netflix}
          className="[w-100%] object-contain"
          alt="Food Web"
        />
      </a>
    </div>
  );
}
