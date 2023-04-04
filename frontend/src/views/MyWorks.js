import "../assets/Wrapper1.css";
import "../assets/Wrapper1Anime.css";
import "../assets/Wrapper.css";
import "../assets/Wrapper2.css";
import Demo from "../assets/demo-tynker.mp4";
import LogoTynker from "../assets/logo.png";
import Asset1 from "../assets/Tynker/Screenshot_1675913307.png";
import Asset2 from "../assets/Tynker/Screenshot_1675913337.png";
import Asset3 from "../assets/Tynker/ezgif.com-gif-maker.gif";
import Asset4 from "../assets/Tynker/guessing.gif";
import Asset5 from "../assets/Tynker/counting.gif";
import GlekLogo from "../assets/GlekLogo.png";
import Glek1 from "../assets/Glek/Glek1.png";
import Glek2 from "../assets/Glek/Glek2.png";
import Glek3 from "../assets/Glek/Glek3.png";
import Glek4 from "../assets/Glek/Glek4.png";
import Glek5 from "../assets/Glek/Glek5.png";
import NBTDemo from "../assets/Niix Brands/NBTDemo.mp4";
import NB1 from "../assets/Niix Brands/Niix Branded Things (1).png";
import NB2 from "../assets/Niix Brands/Niix Branded Things (2).png";
import NB3 from "../assets/Niix Brands/Niix Branded Things (3).png";
import NB4 from "../assets/Niix Brands/Niix Branded Things (4).png";
import NB5 from "../assets/Niix Brands/Niix Branded Things (5).png";
import NB6 from "../assets/Niix Brands/Niix Branded Things (6).png";
import NB7 from "../assets/Niix Brands/Niix Branded Things (7).png";
import NB8 from "../assets/Niix Brands/Niix Branded Things (8).png";
import NB9 from "../assets/Niix Brands/Niix Branded Things (9).png";
import NB10 from "../assets/Niix Brands/Niix Branded Things (10).png";
import NB11 from "../assets/Niix Brands/Niix Branded Things (11).png";
import NB12 from "../assets/Niix Brands/Niix Branded Things (12).png";
import YCS1 from "../assets/Yugioh Card Selector/Yugioh Card Selector (1).png";
import YCS2 from "../assets/Yugioh Card Selector/Yugioh Card Selector (2).png";
import YCS3 from "../assets/Yugioh Card Selector/Yugioh Card Selector (3).png";
import YCS4 from "../assets/Yugioh Card Selector/Yugioh Card Selector (4).png";
import YCS5 from "../assets/Yugioh Card Selector/Yugioh Card Selector (5).png";
import YCS6 from "../assets/Yugioh Card Selector/Yugioh Card Selector (6).png";
import YCS7 from "../assets/Yugioh Card Selector/Yugioh Card Selector (7).png";
import YCSDemo from "../assets/Yugioh Card Selector/Yugioh.mp4";
import GS1 from "../assets/GitSearch/web-view-home-2.png";
import GS2 from "../assets/GitSearch/web-view-repositories.png";
import GS3 from "../assets/GitSearch/web-view-users.png";
import GS4 from "../assets/GitSearch/mobile-view-home-2.png";
import GS5 from "../assets/GitSearch/mobile-view-repositories.png";
import GS6 from "../assets/GitSearch/mobile-view-users.png";
import GSDemo from "../assets/GitSearch/GSDemo.mp4";
import PS1 from "../assets/PokeSearch/PokeSearch (1).png";
import PS2 from "../assets/PokeSearch/PokeSearch (2).png";
import PSDemo from "../assets/PokeSearch/PokeSearch.mp4";
import IFS1 from "../assets/Info Seputar Indonesia/Info Seputar Indonesia (2).png";
import IFS2 from "../assets/Info Seputar Indonesia/Info Seputar Indonesia (5).png";
import IFSDemo from "../assets/Info Seputar Indonesia/Info Seputar Indonesia Demo.mp4";
import BP1 from "../assets/PHP Laravel BlogPost/BlogPost (1).png";
import BP2 from "../assets/PHP Laravel BlogPost/BlogPost (2).png";
import BP3 from "../assets/PHP Laravel BlogPost/BlogPost (3).png";
import BP4 from "../assets/PHP Laravel BlogPost/BlogPost (4).png";
import BP5 from "../assets/PHP Laravel BlogPost/BlogPost (5).png";
import BPDemo from "../assets/PHP Laravel BlogPost/BlogPost Demo.mp4";
import PP1 from "../assets/Pair Project/Pair Project (1).png";
import PP2 from "../assets/Pair Project/Pair Project (2).png";
import PP3 from "../assets/Pair Project/Pair Project (3).png";
import PP4 from "../assets/Pair Project/Pair Project (4).png";
import PP5 from "../assets/Pair Project/Pair Project (5).png";
import PP6 from "../assets/Pair Project/Pair Project (6).png";
import PP7 from "../assets/Pair Project/Pair Project (7).png";
import PP8 from "../assets/Pair Project/Pair Project (8).png";
import PP9 from "../assets/Pair Project/Pair Project (9).png";
import PP10 from "../assets/Pair Project/Pair Project (10).png";
import PPDemo from "../assets/Pair Project/PPDemo.mp4";
import "../assets/HoveringMyWorks.css";
import AOS from "aos";
import "aos/dist/aos.css";
import MyLogo from "../assets/MyLogo.png";
import { useEffect, useState } from "react";
export default function MyWorks() {
  const [delayed, setDelayed] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  });
  if (!delayed) {
    setTimeout(() => {
      setDelayed(true);
    }, 4000);
    return (
      <>
        <div style={{ backgroundColor: "#03001C", overflow: "hidden", height: "100vh" }}>
          <div style={{ paddingTop: "100px", marginLeft: "-50%" }} id="loading2">
            <img src={MyLogo} style={{ width: "20vw" }} alt="" />
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div style={{ backgroundColor: "#03001C", paddingTop: "5%", color: "#B6EADA", padding: "10px" }}>
          <div style={{ margin: "auto", textAlign: "Center", marginTop: "50px" }}>
            <h1 style={{ marginBottom: "20px" }}>My Works</h1>
            <div className="d-flex col" style={{ textAlign: "left" }}>
              <div className="col-3" style={{ marginLeft: "0px" }}>
                <h2 data-aos="slide-right" className="worktitle">
                  Tynker
                </h2>
              </div>
              <div className="col-9" style={{ textAlign: "left", marginLeft: "0px" }}>
                <img data-aos="zoom-in-up" id="tynkerlogo" src={LogoTynker} style={{ height: "10vw" }} alt="" />
              </div>
            </div>
            <div className="d-flex col" style={{ textAlign: "left" }}>
              <div className="col-3" style={{ marginLeft: "0px" }}>
                <h2 data-aos="slide-right" className="worktitle">
                  Screenshot
                </h2>
              </div>
              <div className="col-9" style={{ textAlign: "left" }}>
                <div data-aos="zoom-in-up">
                  <img className="tynkerscreenshot" src={Asset3} style={{ width: "15vw", margin: "10px" }} alt="" />
                  <img className="tynkerscreenshot" src={Asset4} style={{ width: "15vw", margin: "10px" }} alt="" />
                  <img className="tynkerscreenshot" src={Asset5} style={{ width: "15vw", margin: "10px" }} alt="" />
                  <img className="tynkerscreenshot" src={Asset1} style={{ width: "15vw", margin: "10px" }} alt="" />
                  <img className="tynkerscreenshot" src={Asset2} style={{ width: "15vw", margin: "10px" }} alt="" />
                </div>
              </div>
            </div>
            <div className="d-flex col" style={{ textAlign: "left" }}>
              <div className="col-3" style={{ marginLeft: "0px" }}>
                <h2 data-aos="slide-right" className="worktitle">
                  Description
                </h2>
              </div>
              <div className="col-9" style={{ textAlign: "left" }}>
                <div style={{ display: "flex", justifyContent: "flex-start", flexWrap: "wrap" }}>
                  <p className="descriptiontext" data-aos="zoom-in-up">
                    Tynker is an e-learning app for kids that teaches counting, object recognition, and learn basic English using voice recognition would likely include interactive games and exercises
                    that help children practice these skills in a fun and engaging way. The app might use colorful graphics and simple animations to capture children's attention and make learning more
                    enjoyable. Some of the features that the app might include are counting games that help children learn to count numbers, object recognition exercises that help children identify
                    and name different objects, and English language activities that teach basic vocabulary and sentence structure.
                  </p>
                  <p className="descriptiontext" data-aos="zoom-in-up">
                    Our team of four created this project, and I am the Backend Engineer on the team.
                  </p>
                </div>
              </div>
            </div>
            <div className="d-flex col" style={{ textAlign: "left" }}>
              <div className="col-3" style={{ marginLeft: "0px" }}>
                <h2 data-aos="slide-right" className="worktitle">
                  Tech Stack
                </h2>
              </div>
              <div className="col-9" style={{ textAlign: "left", overflow: "hidden" }}>
                <p className="descriptiontext" data-aos="zoom-in-up">
                  Frontend: React Native, Expo, Voice recognition, Redux
                </p>
                <p className="descriptiontext" data-aos="zoom-in-up">
                  Backend: Express, NodeJS, Sequelize, AWS EC2, Docker, Nodemailer, PostgreSQL, Json Web Token, Bcryptjs, Ioredis, Jest, Supertest
                </p>
              </div>
            </div>
            <div className="d-flex col" style={{ textAlign: "left" }}>
              <div className="col-3" style={{ marginLeft: "0px" }}>
                <h2 data-aos="slide-right" className="worktitle">
                  Demo
                </h2>
              </div>
              <div className="col-9" style={{ textAlign: "left", overflow: "hidden" }}>
                <video style={{ width: "65vw", height: "80vh" }} controls>
                  <source src={Demo} type="video/mp4" />
                </video>
              </div>
            </div>
            <div className="d-flex col" style={{ textAlign: "left" }}>
              <div className="col-3" style={{ marginLeft: "0px" }}>
                <h2 data-aos="slide-right" className="worktitle">
                  Repository
                </h2>
              </div>
              <div className="col-9" style={{ textAlign: "left" }}>
                <div style={{ display: "flex", justifyContent: "flex-start", flexWrap: "wrap" }}>
                  <a className="descriptiontext" data-aos="zoom-in-up" style={{ textDecoration: "none", color: "#B6EADA" }} href="https://github.com/Tynker-eustoma" target="_blank">
                    Github
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="custom-shape-divider-top-1676191786" style={{ position: "relative", margin: "0", backgroundColor: "#B6EADA", zIndex: "-1" }} id="movinganimation">
          <svg className="movinganimation" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        <div style={{ backgroundColor: "#B6EADA", paddingTop: "5%", color: "#03001C", padding: "10px" }}>
          <div style={{ margin: "auto", textAlign: "Center", marginTop: "50px" }}>
            <div className="d-flex col" style={{ textAlign: "left" }}>
              <div className="col-3" style={{ marginLeft: "0px" }}>
                <h2 data-aos="slide-right" className="worktitle">
                  Niix - Branded Things
                </h2>
              </div>
              <div className="col-9" style={{ textAlign: "left", marginLeft: "0px" }}>
                <img data-aos="zoom-in-up" id="tynkerlogo" src={MyLogo} style={{ height: "10vw" }} alt="" />
              </div>
            </div>
          </div>
          <div className="d-flex col" style={{ textAlign: "left" }}>
            <div className="col-3" style={{ marginLeft: "0px" }}>
              <h2 data-aos="slide-right" className="worktitle">
                Screenshot
              </h2>
            </div>
            <div className="col-9" style={{ textAlign: "left" }}>
              <div data-aos="zoom-in-up">
                <img className="glekscreenshot" src={NB1} style={{ width: "20vw", margin: "10px" }} alt="" />
                <img className="glekscreenshot" src={NB2} style={{ width: "20vw", margin: "10px" }} alt="" />
                <img className="glekscreenshot" src={NB3} style={{ width: "20vw", margin: "10px" }} alt="" />
                <img className="glekscreenshot" src={NB4} style={{ width: "20vw", margin: "10px" }} alt="" />
                <img className="glekscreenshot" src={NB5} style={{ width: "20vw", margin: "10px" }} alt="" />
                <img className="glekscreenshot" src={NB6} style={{ width: "20vw", margin: "10px" }} alt="" />
                <img className="glekscreenshot" src={NB7} style={{ width: "20vw", margin: "10px" }} alt="" />
                <img className="glekscreenshot" src={NB8} style={{ width: "20vw", margin: "10px" }} alt="" />
                <img className="glekscreenshot" src={NB9} style={{ width: "20vw", margin: "10px" }} alt="" />
                <img className="glekscreenshot" src={NB10} style={{ width: "20vw", margin: "10px" }} alt="" />
                <img className="glekscreenshot" src={NB11} style={{ width: "20vw", margin: "10px" }} alt="" />
                <img className="glekscreenshot" src={NB12} style={{ width: "20vw", margin: "10px" }} alt="" />
              </div>
            </div>
          </div>
          <div className="d-flex col" style={{ textAlign: "left" }}>
            <div className="col-3" style={{ marginLeft: "0px" }}>
              <h2 data-aos="slide-right" className="worktitle">
                Description
              </h2>
            </div>
            <div className="col-9" style={{ textAlign: "left" }}>
              <div style={{ display: "flex", justifyContent: "flex-start", flexWrap: "wrap", overflow: "hidden" }}>
                <p className="descriptiontext" data-aos="zoom-in-up">
                  Niix Branded Things is a web application that allows Admin users to add, update, and delete product information in a Content Management System (CMS). Customers can only view the
                  product information. The web app is built using JavaScript, ReactJS, and NodeJS.
                </p>
                <p className="descriptiontext" data-aos="zoom-in-up">
                  I was solely responsible for this project as a Full Stack Developer. From building the backend to creating the frontend, I handled it all. It was an exciting opportunity for me to
                  showcase my skills and deliver a complete solution for the project.
                </p>
              </div>
            </div>
          </div>
          <div className="d-flex col" style={{ textAlign: "left" }}>
            <div className="col-3" style={{ marginLeft: "0px" }}>
              <h2 data-aos="slide-right" className="worktitle">
                Tech Stack
              </h2>
            </div>
            <div className="col-9" style={{ textAlign: "left", overflow: "hidden" }}>
              <p className="descriptiontext" data-aos="zoom-in-up">
                Frontend: VueJS, Pinia, SweetAlert2, GoogleAuth
              </p>
              <p className="descriptiontext" data-aos="zoom-in-up">
                Backend: Express, NodeJS, Sequelize, PostgreSQL, Json Web Token, Bcryptjs, Axios, Jest, Supertest
              </p>
            </div>
          </div>
          <div className="d-flex col" style={{ textAlign: "left" }}>
            <div className="col-3" style={{ marginLeft: "0px" }}>
              <h2 data-aos="slide-right" className="worktitle">
                Demo
              </h2>
            </div>
            <div className="col-9" style={{ textAlign: "left", overflow: "hidden" }}>
              <video style={{ width: "65vw", height: "80vh" }} controls>
                <source src={NBTDemo} type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="d-flex col" style={{ textAlign: "left" }}>
            <div className="col-3" style={{ marginLeft: "0px" }}>
              <h2 data-aos="slide-right" className="worktitle">
                Repository
              </h2>
            </div>
            <div className="col-9" style={{ textAlign: "left" }}>
              <div style={{ display: "flex", justifyContent: "flex-start", flexWrap: "wrap" }}>
                <a className="descriptiontext" data-aos="zoom-in-up" style={{ textDecoration: "none", color: "#03001C" }} href="https://github.com/dikyardiyanto17/niixbrandedthings" target="_blank">
                  Github
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="custom-shape-divider-top-1676192244" style={{ position: "relative", margin: "0", backgroundColor: "#03001C", zIndex: "-1" }}>
          <svg className="movinganimation" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        <div style={{ backgroundColor: "#03001C", paddingTop: "5%", color: "#B6EADA", padding: "10px" }}>
          <div style={{ margin: "auto", textAlign: "Center", marginTop: "50px" }}>
            <div className="d-flex col" style={{ textAlign: "left" }}>
              <div className="col-3" style={{ marginLeft: "0px" }}>
                <h2 data-aos="slide-right" className="worktitle">
                  Yugioh Card Selector
                </h2>
              </div>
              <div className="col-9" style={{ textAlign: "left", marginLeft: "0px" }}>
                <img data-aos="zoom-in-up" id="tynkerlogo" src={MyLogo} style={{ height: "10vw" }} alt="" />
              </div>
            </div>
            <div className="d-flex col" style={{ textAlign: "left" }}>
              <div className="col-3" style={{ marginLeft: "0px" }}>
                <h2 data-aos="slide-right" className="worktitle">
                  Screenshot
                </h2>
              </div>
              <div className="col-9" style={{ textAlign: "left" }}>
                <div data-aos="zoom-in-up">
                  <img className="tynkerscreenshot" src={YCS1} style={{ width: "15vw", margin: "10px" }} alt="" />
                  <img className="tynkerscreenshot" src={YCS2} style={{ width: "15vw", margin: "10px" }} alt="" />
                  <img className="tynkerscreenshot" src={YCS3} style={{ width: "15vw", margin: "10px" }} alt="" />
                  <img className="tynkerscreenshot" src={YCS4} style={{ width: "15vw", margin: "10px" }} alt="" />
                  <img className="tynkerscreenshot" src={YCS5} style={{ width: "15vw", margin: "10px" }} alt="" />
                  <img className="tynkerscreenshot" src={YCS6} style={{ width: "15vw", margin: "10px" }} alt="" />
                  <img className="tynkerscreenshot" src={YCS7} style={{ width: "15vw", margin: "10px" }} alt="" />
                </div>
              </div>
            </div>
            <div className="d-flex col" style={{ textAlign: "left" }}>
              <div className="col-3" style={{ marginLeft: "0px" }}>
                <h2 data-aos="slide-right" className="worktitle">
                  Description
                </h2>
              </div>
              <div className="col-9" style={{ textAlign: "left" }}>
                <div style={{ display: "flex", justifyContent: "flex-start", flexWrap: "wrap" }}>
                  <p className="descriptiontext" data-aos="zoom-in-up">
                    Yugioh Card Selector is a website that helps you build your own custom deck for the Yugioh card game. You can also search for cards based on your preferences and add them to your
                    collection. It's an easy-to-use tool for all Yugioh players, whether you're new to the game or a seasoned pro.
                  </p>
                  <p className="descriptiontext" data-aos="zoom-in-up">
                    I was solely responsible for this project as a Full Stack Developer. From building the backend to creating the frontend, I handled it all. It was an exciting opportunity for me to
                    showcase my skills and deliver a complete solution for the project.
                  </p>
                </div>
              </div>
            </div>
            <div className="d-flex col" style={{ textAlign: "left" }}>
              <div className="col-3" style={{ marginLeft: "0px" }}>
                <h2 data-aos="slide-right" className="worktitle">
                  Tech Stack
                </h2>
              </div>
              <div className="col-9" style={{ textAlign: "left", overflow: "hidden" }}>
                <p className="descriptiontext" data-aos="zoom-in-up">
                  Frontend: VueJS, Pinia, SweetAlert2
                </p>
                <p className="descriptiontext" data-aos="zoom-in-up">
                  Backend: Express, NodeJS, Sequelize, Nodemailer, PostgreSQL, Axios, Bcryptjs, Json Web Token, Multer, 3rd API
                </p>
              </div>
            </div>
            <div className="d-flex col" style={{ textAlign: "left" }}>
              <div className="col-3" style={{ marginLeft: "0px" }}>
                <h2 data-aos="slide-right" className="worktitle">
                  Demo
                </h2>
              </div>
              <div className="col-9" style={{ textAlign: "left", overflow: "hidden" }}>
                <video style={{ width: "65vw", height: "80vh" }} controls>
                  <source src={YCSDemo} type="video/mp4" />
                </video>
              </div>
            </div>
            <div className="d-flex col" style={{ textAlign: "left" }}>
              <div className="col-3" style={{ marginLeft: "0px" }}>
                <h2 data-aos="slide-right" className="worktitle">
                  Repository
                </h2>
              </div>
              <div className="col-9" style={{ textAlign: "left" }}>
                <div style={{ display: "flex", justifyContent: "flex-start", flexWrap: "wrap" }}>
                  <a
                    className="descriptiontext"
                    data-aos="zoom-in-up"
                    style={{ textDecoration: "none", color: "#B6EADA" }}
                    href="https://github.com/dikyardiyanto17/p2-iproject-server"
                    target="_blank"
                  >
                    Server
                  </a>
                </div>
                <div style={{ display: "flex", justifyContent: "flex-start", flexWrap: "wrap" }}>
                  <a
                    className="descriptiontext"
                    data-aos="zoom-in-up"
                    style={{ textDecoration: "none", color: "#B6EADA" }}
                    href="https://github.com/dikyardiyanto17/p2-iproject-client"
                    target="_blank"
                  >
                    Client
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="custom-shape-divider-top-1676191786" style={{ position: "relative", margin: "0", backgroundColor: "#B6EADA", zIndex: "-1" }} id="movinganimation">
          <svg className="movinganimation" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        <div style={{ backgroundColor: "#B6EADA", paddingTop: "5%", color: "#03001C", padding: "10px" }}>
          <div style={{ margin: "auto", textAlign: "Center", marginTop: "50px" }}>
            <div className="d-flex col" style={{ textAlign: "left" }}>
              <div className="col-3" style={{ marginLeft: "0px" }}>
                <h2 data-aos="slide-right" className="worktitle">
                  Git Search
                </h2>
              </div>
              <div className="col-9" style={{ textAlign: "left", marginLeft: "0px" }}>
                <img data-aos="zoom-in-up" id="tynkerlogo" src={MyLogo} style={{ height: "10vw" }} alt="" />
              </div>
            </div>
          </div>
          <div className="d-flex col" style={{ textAlign: "left" }}>
            <div className="col-3" style={{ marginLeft: "0px" }}>
              <h2 data-aos="slide-right" className="worktitle">
                Screenshot
              </h2>
            </div>
            <div className="col-9" style={{ textAlign: "left" }}>
              <div data-aos="zoom-in-up">
                <img className="glekscreenshot" src={GS1} style={{ width: "20vw", margin: "10px" }} alt="" />
                <img className="glekscreenshot" src={GS2} style={{ width: "20vw", margin: "10px" }} alt="" />
                <img className="glekscreenshot" src={GS3} style={{ width: "20vw", margin: "10px" }} alt="" />
                <img className="glekscreenshot" src={GS4} style={{ width: "20vw", margin: "10px" }} alt="" />
                <img className="glekscreenshot" src={GS5} style={{ width: "20vw", margin: "10px" }} alt="" />
                <img className="glekscreenshot" src={GS6} style={{ width: "20vw", margin: "10px" }} alt="" />
              </div>
            </div>
          </div>
          <div className="d-flex col" style={{ textAlign: "left" }}>
            <div className="col-3" style={{ marginLeft: "0px" }}>
              <h2 data-aos="slide-right" className="worktitle">
                Description
              </h2>
            </div>
            <div className="col-9" style={{ textAlign: "left" }}>
              <div style={{ display: "flex", justifyContent: "flex-start", flexWrap: "wrap", overflow: "hidden" }}>
                <p className="descriptiontext" data-aos="zoom-in-up">
                  GitSearch is a user-friendly web application that allows you to search for GitHub users and their repositories with ease. The app is built using TypeScript and React, providing a
                  seamless and interactive experience. With GitSearch, you can quickly find the GitHub user you're looking for by simply typing in their username. You'll be presented with a profile of
                  the user and their repositories.
                </p>
                <p className="descriptiontext" data-aos="zoom-in-up">
                  I was solely responsible for this project as a Frontend Developer.
                </p>
              </div>
            </div>
          </div>
          <div className="d-flex col" style={{ textAlign: "left" }}>
            <div className="col-3" style={{ marginLeft: "0px" }}>
              <h2 data-aos="slide-right" className="worktitle">
                Tech Stack
              </h2>
            </div>
            <div className="col-9" style={{ textAlign: "left", overflow: "hidden" }}>
              <p className="descriptiontext" data-aos="zoom-in-up">
                Frontend: ReactJS, 3rd API, Bootstrap
              </p>
            </div>
          </div>
          <div className="d-flex col" style={{ textAlign: "left" }}>
            <div className="col-3" style={{ marginLeft: "0px" }}>
              <h2 data-aos="slide-right" className="worktitle">
                Try It
              </h2>
            </div>
            <div className="col-9" style={{ textAlign: "left", overflow: "hidden" }}>
              <iframe data-aos="zoom-in-up" src="https://gitsearch-17.web.app/" style={{ width: "65vw", height: "80vh" }} title="glek" />
            </div>
          </div>
          <div className="d-flex col" style={{ textAlign: "left" }}>
            <div className="col-3" style={{ marginLeft: "0px" }}>
              <h2 data-aos="slide-right" className="worktitle">
                Repository
              </h2>
            </div>
            <div className="col-9" style={{ textAlign: "left" }}>
              <div style={{ display: "flex", justifyContent: "flex-start", flexWrap: "wrap" }}>
                <a
                  className="descriptiontext"
                  data-aos="zoom-in-up"
                  style={{ textDecoration: "none", color: "#03001C" }}
                  href="https://github.com/dikyardiyanto17/github-api-typescript"
                  target="_blank"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="custom-shape-divider-top-1676192244" style={{ position: "relative", margin: "0", backgroundColor: "#03001C", zIndex: "-1" }}>
          <svg className="movinganimation" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        <div style={{ backgroundColor: "#03001C", paddingTop: "5%", color: "#B6EADA", padding: "10px" }}>
          <div style={{ margin: "auto", textAlign: "Center", marginTop: "50px" }}>
            <div className="d-flex col" style={{ textAlign: "left" }}>
              <div className="col-3" style={{ marginLeft: "0px" }}>
                <h2 data-aos="slide-right" className="worktitle">
                  PokeSearch
                </h2>
              </div>
              <div className="col-9" style={{ textAlign: "left", marginLeft: "0px" }}>
                <img data-aos="zoom-in-up" id="tynkerlogo" src={MyLogo} style={{ height: "10vw" }} alt="" />
              </div>
            </div>
            <div className="d-flex col" style={{ textAlign: "left" }}>
              <div className="col-3" style={{ marginLeft: "0px" }}>
                <h2 data-aos="slide-right" className="worktitle">
                  Screenshot
                </h2>
              </div>
              <div className="col-9" style={{ textAlign: "left" }}>
                <div data-aos="zoom-in-up">
                  <img className="tynkerscreenshot" src={PS1} style={{ width: "15vw", margin: "10px" }} alt="" />
                  <img className="tynkerscreenshot" src={PS2} style={{ width: "15vw", margin: "10px" }} alt="" />
                </div>
              </div>
            </div>
            <div className="d-flex col" style={{ textAlign: "left" }}>
              <div className="col-3" style={{ marginLeft: "0px" }}>
                <h2 data-aos="slide-right" className="worktitle">
                  Description
                </h2>
              </div>
              <div className="col-9" style={{ textAlign: "left" }}>
                <div style={{ display: "flex", justifyContent: "flex-start", flexWrap: "wrap" }}>
                  <p className="descriptiontext" data-aos="zoom-in-up">
                    PokeSearch is a website that contains a comprehensive list of all the Pokemon, along with their details. You can browse through the list to find the Pokemon you're interested in
                    and learn more about them.
                  </p>
                  <p className="descriptiontext" data-aos="zoom-in-up">
                    I was solely responsible for this project as a Frontend Developer.
                  </p>
                </div>
              </div>
            </div>
            <div className="d-flex col" style={{ textAlign: "left" }}>
              <div className="col-3" style={{ marginLeft: "0px" }}>
                <h2 data-aos="slide-right" className="worktitle">
                  Tech Stack
                </h2>
              </div>
              <div className="col-9" style={{ textAlign: "left", overflow: "hidden" }}>
                <p className="descriptiontext" data-aos="zoom-in-up">
                  Frontend: ReactJS, Bootstrap, 3rd API
                </p>
              </div>
            </div>
            <div className="d-flex col" style={{ textAlign: "left" }}>
              <div className="col-3" style={{ marginLeft: "0px" }}>
                <h2 data-aos="slide-right" className="worktitle">
                  Demo
                </h2>
              </div>
              <div className="col-9" style={{ textAlign: "left", overflow: "hidden" }}>
                <video style={{ width: "65vw", height: "80vh" }} controls>
                  <source src={PSDemo} type="video/mp4" />
                </video>
              </div>
            </div>
            <div className="d-flex col" style={{ textAlign: "left" }}>
              <div className="col-3" style={{ marginLeft: "0px" }}>
                <h2 data-aos="slide-right" className="worktitle">
                  Repository
                </h2>
              </div>
              <div className="col-9" style={{ textAlign: "left" }}>
                <div style={{ display: "flex", justifyContent: "flex-start", flexWrap: "wrap" }}>
                  <a className="descriptiontext" data-aos="zoom-in-up" style={{ textDecoration: "none", color: "#B6EADA" }} href="https://github.com/dikyardiyanto17/pokemin-api" target="_blank">
                    Github
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="custom-shape-divider-top-1676191786" style={{ position: "relative", margin: "0", backgroundColor: "#B6EADA", zIndex: "-1" }} id="movinganimation">
          <svg className="movinganimation" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        <div style={{ backgroundColor: "#B6EADA", paddingTop: "5%", color: "#03001C", padding: "10px" }}>
          <div style={{ margin: "auto", textAlign: "Center", marginTop: "50px" }}>
            <div className="d-flex col" style={{ textAlign: "left" }}>
              <div className="col-3" style={{ marginLeft: "0px" }}>
                <h2 data-aos="slide-right" className="worktitle">
                  Gabut
                </h2>
              </div>
              <div className="col-9" style={{ textAlign: "left", marginLeft: "0px" }}>
                <img data-aos="zoom-in-up" id="tynkerlogo" src={MyLogo} style={{ height: "10vw" }} alt="" />
              </div>
            </div>
          </div>
          <div className="d-flex col" style={{ textAlign: "left" }}>
            <div className="col-3" style={{ marginLeft: "0px" }}>
              <h2 data-aos="slide-right" className="worktitle">
                Screenshot
              </h2>
            </div>
            <div className="col-9" style={{ textAlign: "left" }}>
              <div data-aos="zoom-in-up">
                <img className="glekscreenshot" src={PP1} style={{ width: "20vw", margin: "10px" }} alt="" />
                <img className="glekscreenshot" src={PP2} style={{ width: "20vw", margin: "10px" }} alt="" />
                <img className="glekscreenshot" src={PP3} style={{ width: "20vw", margin: "10px" }} alt="" />
                <img className="glekscreenshot" src={PP4} style={{ width: "20vw", margin: "10px" }} alt="" />
                <img className="glekscreenshot" src={PP6} style={{ width: "20vw", margin: "10px" }} alt="" />
                <img className="glekscreenshot" src={PP7} style={{ width: "20vw", margin: "10px" }} alt="" />
                <img className="glekscreenshot" src={PP8} style={{ width: "20vw", margin: "10px" }} alt="" />
                <img className="glekscreenshot" src={PP9} style={{ width: "20vw", margin: "10px" }} alt="" />
                <img className="glekscreenshot" src={PP10} style={{ width: "20vw", margin: "10px" }} alt="" />
              </div>
            </div>
          </div>
          <div className="d-flex col" style={{ textAlign: "left" }}>
            <div className="col-3" style={{ marginLeft: "0px" }}>
              <h2 data-aos="slide-right" className="worktitle">
                Description
              </h2>
            </div>
            <div className="col-9" style={{ textAlign: "left" }}>
              <div style={{ display: "flex", justifyContent: "flex-start", flexWrap: "wrap", overflow: "hidden" }}>
                <p className="descriptiontext" data-aos="zoom-in-up">
                  Gabut is a web application where you can create an account, log in, and post using hashtags. It's a great way to connect with others who share your interests and hobbies.
                </p>
                <p className="descriptiontext" data-aos="zoom-in-up">
                  I worked on a project with one other person while I was learning at Hacktiv8 Bootcamp. My role was Full Stack Developer.
                </p>
              </div>
            </div>
          </div>
          <div className="d-flex col" style={{ textAlign: "left" }}>
            <div className="col-3" style={{ marginLeft: "0px" }}>
              <h2 data-aos="slide-right" className="worktitle">
                Tech Stack
              </h2>
            </div>
            <div className="col-9" style={{ textAlign: "left", overflow: "hidden" }}>
              <p className="descriptiontext" data-aos="zoom-in-up">
                Frontend: EJS, HTML & CSS
              </p>
              <p className="descriptiontext" data-aos="zoom-in-up">
                Backend: Express, NodeJS, PostgreSQL, Sequelize, Express Session
              </p>
            </div>
          </div>
          <div className="d-flex col" style={{ textAlign: "left" }}>
            <div className="col-3" style={{ marginLeft: "0px" }}>
              <h2 data-aos="slide-right" className="worktitle">
                Demo
              </h2>
            </div>
            <div className="col-9" style={{ textAlign: "left", overflow: "hidden" }}>
              <video style={{ width: "65vw", height: "80vh" }} controls>
                <source src={PPDemo} type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="d-flex col" style={{ textAlign: "left" }}>
            <div className="col-3" style={{ marginLeft: "0px" }}>
              <h2 data-aos="slide-right" className="worktitle">
                Repository
              </h2>
            </div>
            <div className="col-9" style={{ textAlign: "left" }}>
              <div style={{ display: "flex", justifyContent: "flex-start", flexWrap: "wrap" }}>
                <a className="descriptiontext" data-aos="zoom-in-up" style={{ textDecoration: "none", color: "#03001C" }} href="https://github.com/dikyardiyanto17/pairproject" target="_blank">
                  Github
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <div style={{ backgroundColor: "#B6EADA", paddingTop: "5%", color: "#03001C", padding: "10px" }}>
          <div style={{ margin: "auto", textAlign: "Center", marginTop: "50px" }}>
            <div className="d-flex col" style={{ textAlign: "left" }}>
              <div className="col-3" style={{ marginLeft: "0px" }}>
                <h2 data-aos="slide-right" className="worktitle">
                  Info Seputar Indonesia
                </h2>
              </div>
              <div className="col-9" style={{ textAlign: "left", marginLeft: "0px" }}>
                <img data-aos="zoom-in-up" id="tynkerlogo" src={MyLogo} style={{ height: "10vw" }} alt="" />
              </div>
            </div>
          </div>
          <div className="d-flex col" style={{ textAlign: "left" }}>
            <div className="col-3" style={{ marginLeft: "0px" }}>
              <h2 data-aos="slide-right" className="worktitle">
                Screenshot
              </h2>
            </div>
            <div className="col-9" style={{ textAlign: "left" }}>
              <div data-aos="zoom-in-up">
                <img className="glekscreenshot" src={IFS1} style={{ width: "20vw", margin: "10px" }} alt="" />
                <img className="glekscreenshot" src={IFS2} style={{ width: "20vw", margin: "10px" }} alt="" />
              </div>
            </div>
          </div>
          <div className="d-flex col" style={{ textAlign: "left" }}>
            <div className="col-3" style={{ marginLeft: "0px" }}>
              <h2 data-aos="slide-right" className="worktitle">
                Description
              </h2>
            </div>
            <div className="col-9" style={{ textAlign: "left" }}>
              <div style={{ display: "flex", justifyContent: "flex-start", flexWrap: "wrap", overflow: "hidden" }}>
                <p className="descriptiontext" data-aos="zoom-in-up">
                  Info Seputar Indonesia is a website that provides the latest news about Indonesia, including current events and popular topics. In addition to news, it also features a list of
                  Indonesian heroes who have made significant contributions to the country. You can also find a selection of popular movies to watch. It's a one-stop-shop for anyone looking to stay
                  up-to-date on what's happening in Indonesia.
                </p>
                <p className="descriptiontext" data-aos="zoom-in-up">
                  I was solely responsible for this project as a Frontend Developer.
                </p>
              </div>
            </div>
          </div>
          <div className="d-flex col" style={{ textAlign: "left" }}>
            <div className="col-3" style={{ marginLeft: "0px" }}>
              <h2 data-aos="slide-right" className="worktitle">
                Tech Stack
              </h2>
            </div>
            <div className="col-9" style={{ textAlign: "left", overflow: "hidden" }}>
              <p className="descriptiontext" data-aos="zoom-in-up">
                Frontend: ReactJS, Redux, 3rd API
              </p>
            </div>
          </div>
          <div className="d-flex col" style={{ textAlign: "left" }}>
            <div className="col-3" style={{ marginLeft: "0px" }}>
              <h2 data-aos="slide-right" className="worktitle">
                Demo
              </h2>
            </div>
            <div className="col-9" style={{ textAlign: "left", overflow: "hidden" }}>
              <video style={{ width: "65vw", height: "80vh" }} controls>
                <source src={IFSDemo} type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="d-flex col" style={{ textAlign: "left" }}>
            <div className="col-3" style={{ marginLeft: "0px" }}>
              <h2 data-aos="slide-right" className="worktitle">
                Repository
              </h2>
            </div>
            <div className="col-9" style={{ textAlign: "left" }}>
              <div style={{ display: "flex", justifyContent: "flex-start", flexWrap: "wrap" }}>
                <a className="descriptiontext" data-aos="zoom-in-up" style={{ textDecoration: "none", color: "#03001C" }} href="https://github.com/dikyardiyanto17/react-api" target="_blank">
                  Github
                </a>
              </div>
            </div>
          </div>
        </div> */}
        <div className="custom-shape-divider-top-1676192244" style={{ position: "relative", margin: "0", backgroundColor: "#03001C", zIndex: "-1" }}>
          <svg className="movinganimation" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        <div style={{ backgroundColor: "#03001C", paddingTop: "5%", color: "#B6EADA", padding: "10px" }}>
          <div style={{ margin: "auto", textAlign: "Center", marginTop: "50px" }}>
            <div className="d-flex col" style={{ textAlign: "left" }}>
              <div className="col-3" style={{ marginLeft: "0px" }}>
                <h2 data-aos="slide-right" className="worktitle">
                  BlogPost
                </h2>
              </div>
              <div className="col-9" style={{ textAlign: "left", marginLeft: "0px" }}>
                <img data-aos="zoom-in-up" id="tynkerlogo" src={MyLogo} style={{ height: "10vw" }} alt="" />
              </div>
            </div>
            <div className="d-flex col" style={{ textAlign: "left" }}>
              <div className="col-3" style={{ marginLeft: "0px" }}>
                <h2 data-aos="slide-right" className="worktitle">
                  Screenshot
                </h2>
              </div>
              <div className="col-9" style={{ textAlign: "left" }}>
                <div data-aos="zoom-in-up">
                  <img className="tynkerscreenshot" src={BP1} style={{ width: "15vw", margin: "10px" }} alt="" />
                  <img className="tynkerscreenshot" src={BP2} style={{ width: "15vw", margin: "10px" }} alt="" />
                  <img className="tynkerscreenshot" src={BP3} style={{ width: "15vw", margin: "10px" }} alt="" />
                  <img className="tynkerscreenshot" src={BP4} style={{ width: "15vw", margin: "10px" }} alt="" />
                  <img className="tynkerscreenshot" src={BP5} style={{ width: "15vw", margin: "10px" }} alt="" />
                </div>
              </div>
            </div>
            <div className="d-flex col" style={{ textAlign: "left" }}>
              <div className="col-3" style={{ marginLeft: "0px" }}>
                <h2 data-aos="slide-right" className="worktitle">
                  Description
                </h2>
              </div>
              <div className="col-9" style={{ textAlign: "left" }}>
                <div style={{ display: "flex", justifyContent: "flex-start", flexWrap: "wrap" }}>
                  <p className="descriptiontext" data-aos="zoom-in-up">
                    BlogPost is a website where users can create an account and post their own blog entries. They can also read and comment on other users' posts. It's a platform for people to share
                    their thoughts, ideas, and experiences with others in a community-driven setting.
                  </p>
                  <p className="descriptiontext" data-aos="zoom-in-up">
                    I was solely responsible for this project as a Full Stack Developer. From building the backend to creating the frontend, I handled it all. It was an exciting opportunity for me to
                    showcase my skills and deliver a complete solution for the project.
                  </p>
                </div>
              </div>
            </div>
            <div className="d-flex col" style={{ textAlign: "left" }}>
              <div className="col-3" style={{ marginLeft: "0px" }}>
                <h2 data-aos="slide-right" className="worktitle">
                  Tech Stack
                </h2>
              </div>
              <div className="col-9" style={{ textAlign: "left", overflow: "hidden" }}>
                <p className="descriptiontext" data-aos="zoom-in-up">
                  Frontend: PHP Laravel, Bootstrap
                </p>
                <p className="descriptiontext" data-aos="zoom-in-up">
                  Backend: MySQL
                </p>
              </div>
            </div>
            <div className="d-flex col" style={{ textAlign: "left" }}>
              <div className="col-3" style={{ marginLeft: "0px" }}>
                <h2 data-aos="slide-right" className="worktitle">
                  Demo
                </h2>
              </div>
              <div className="col-9" style={{ textAlign: "left", overflow: "hidden" }}>
                <video style={{ width: "65vw", height: "80vh" }} controls>
                  <source src={PSDemo} type="video/mp4" />
                </video>
              </div>
            </div>
            <div className="d-flex col" style={{ textAlign: "left" }}>
              <div className="col-3" style={{ marginLeft: "0px" }}>
                <h2 data-aos="slide-right" className="worktitle">
                  Repository
                </h2>
              </div>
              <div className="col-9" style={{ textAlign: "left" }}>
                <div style={{ display: "flex", justifyContent: "flex-start", flexWrap: "wrap" }}>
                  <a className="descriptiontext" data-aos="zoom-in-up" style={{ textDecoration: "none", color: "#B6EADA" }} href="https://github.com/dikyardiyanto17/PHP-Project" target="_blank">
                    Github
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="custom-shape-divider-top-1676191786" style={{ position: "relative", margin: "0", backgroundColor: "#B6EADA", zIndex: "-1" }} id="movinganimation">
          <svg className="movinganimation" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        <div style={{ backgroundColor: "#B6EADA", paddingTop: "5%", color: "#03001C", padding: "10px" }}>
          <div style={{ margin: "auto", textAlign: "Center", marginTop: "50px" }}>
            <div className="d-flex col" style={{ textAlign: "left" }}>
              <div className="col-3" style={{ marginLeft: "0px" }}>
                <h2 data-aos="slide-right" className="worktitle">
                  GLEK
                </h2>
              </div>
              <div className="col-9" style={{ textAlign: "left", marginLeft: "0px" }}>
                <img data-aos="zoom-in-up" id="gleklogo" src={GlekLogo} style={{ height: "10vh" }} alt="" />
              </div>
            </div>
          </div>
          <div className="d-flex col" style={{ textAlign: "left" }}>
            <div className="col-3" style={{ marginLeft: "0px" }}>
              <h2 data-aos="slide-right" className="worktitle">
                Screenshot
              </h2>
            </div>
            <div className="col-9" style={{ textAlign: "left" }}>
              <div data-aos="zoom-in-up">
                <img className="glekscreenshot" src={Glek1} style={{ width: "20vw", margin: "10px" }} alt="" />
                <img className="glekscreenshot" src={Glek2} style={{ width: "20vw", margin: "10px" }} alt="" />
                <img className="glekscreenshot" src={Glek3} style={{ width: "20vw", margin: "10px" }} alt="" />
                <img className="glekscreenshot" src={Glek4} style={{ width: "20vw", margin: "10px" }} alt="" />
                <img className="glekscreenshot" src={Glek5} style={{ width: "20vw", margin: "10px" }} alt="" />
              </div>
            </div>
          </div>
          <div className="d-flex col" style={{ textAlign: "left" }}>
            <div className="col-3" style={{ marginLeft: "0px" }}>
              <h2 data-aos="slide-right" className="worktitle">
                Description
              </h2>
            </div>
            <div className="col-9" style={{ textAlign: "left" }}>
              <div style={{ display: "flex", justifyContent: "flex-start", flexWrap: "wrap", overflow: "hidden" }}>
                <p className="descriptiontext" data-aos="zoom-in-up">
                  Glek is a simple web app that tracks your daily water intake. You can easily input your name and the amount of water you drank today. By clicking the 'log' button, the app will
                  increase the bar and display a log of when you drank water. If you've already reached the goal of drinking 8 glasses of water, Glek will surprise you with random fun facts about
                  water before finishing the app.
                </p>
                <p className="descriptiontext" data-aos="zoom-in-up">
                  This project was a collaboration among six team members when we were still learning about JavaScript. My role in this project was as a Backend Engineer. Ah, those good old times!
                </p>
              </div>
            </div>
          </div>
          <div className="d-flex col" style={{ textAlign: "left" }}>
            <div className="col-3" style={{ marginLeft: "0px" }}>
              <h2 data-aos="slide-right" className="worktitle">
                Tech Stack
              </h2>
            </div>
            <div className="col-9" style={{ textAlign: "left", overflow: "hidden" }}>
              <p className="descriptiontext" data-aos="zoom-in-up">
                NodeJS, HTML & CSS
              </p>
            </div>
          </div>
          <div className="d-flex col" style={{ textAlign: "left" }}>
            <div className="col-3" style={{ marginLeft: "0px" }}>
              <h2 data-aos="slide-right" className="worktitle">
                Try It
              </h2>
            </div>
            <div className="col-9" style={{ textAlign: "left", overflow: "hidden" }}>
              <iframe data-aos="zoom-in-up" src="https://whooptywoo.github.io/hackaton8/" style={{ width: "65vw", height: "80vh" }} title="glek" />
            </div>
          </div>
          <div className="d-flex col" style={{ textAlign: "left" }}>
            <div className="col-3" style={{ marginLeft: "0px" }}>
              <h2 data-aos="slide-right" className="worktitle">
                Repository
              </h2>
            </div>
            <div className="col-9" style={{ textAlign: "left" }}>
              <div style={{ display: "flex", justifyContent: "flex-start", flexWrap: "wrap" }}>
                <a className="descriptiontext" data-aos="zoom-in-up" style={{ textDecoration: "none", color: "#03001C" }} href="https://github.com/whooptywoo/hackaton8" target="_blank">
                  Github
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="custom-shape-divider-top-1676192244" style={{ position: "relative", margin: "0", backgroundColor: "#03001C", zIndex: "-1" }}>
          <svg className="movinganimation" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </>
    );
  }
}
