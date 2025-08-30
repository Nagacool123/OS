import "./App.css";
import { useState, useEffect } from "react";
import fuel from "./assets/projects_pics/fuel.PNG";
import poke from "./assets/projects_pics/pokeimg.PNG";
import OS from "./assets/projects_pics/portfolioOS.PNG";
import three from "./assets/projects_pics/three.PNG";

function Info() {
  const [info, setInfo] = useState(null);

  function about() {
    return (
      <div className="about">
        <div className="text-container gap-[20px]">
          <p className="title text-black">A little about me</p>
          <div>
            <p className="max-w-[1600px] text-lg">
              Hello, I'm Hung Trinh, a recent Computer Science graduate from the
              University of Houston. I have a passion for programming and thrive
              on tackling projects that challenge me to learn. As an aspiring
              software engineer, I am eager to use my skills to create impactful
              solutions that contribute to technological advancement.
            </p>
            <p className="max-w-[1600px] text-lg">
              {" "}
              In addition to coding, I enjoy building Gundams and custom
              mechanical keyboards, playing video games, and spending quality
              time with my dogs.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-[10px]">
          <p className="title text-black">Skills</p>
          <div className="flex flex-col gap-[30px]">
            <div className="lang flex flex-row items-center gap-[20px] max-w-[1000px] w-[100%]">
              <div className="item-start w-[160px]">
                <h1 className="text-xl ">Language:</h1>
              </div>
              <div className="flex flex-row justify-center items-center gap-[10px]">
                <div className="pics">
                  <img src={require("./assets/lang/python.png")} alt="pic" />
                </div>
                <div className="pics">
                  <img src={require("./assets/lang/c++.png")} alt="pic" />
                </div>
                <div className="pics">
                  <img src={require("./assets/lang/c.png")} alt="pic" />
                </div>
                <div className="pics">
                  <img src={require("./assets/lang/js.png")} alt="pic" />
                </div>
                <div className="pics">
                  <img src={require("./assets/lang/sql.png")} alt="pic" />
                </div>
                <div className="pics">
                  <img src={require("./assets/lang/html.png")} alt="pic" />
                </div>
                <div className="pics">
                  <img src={require("./assets/lang/css.png")} alt="pic" />
                </div>
              </div>
            </div>

            <div className="lang flex flex-row items-center gap-[20px] max-w-[1000px] w-[100%]">
              <div className="item-start w-[160px]">
                <h1 className="text-xl">Framework:</h1>
              </div>
              <div className="flex flex-row justify-center items-center gap-[10px]">
                <div className="pics">
                  <img src={require("./assets/lang/react.png")} alt="pic" />
                </div>
                <div className="pics">
                  <img src={require("./assets/lang/node.png")} alt="pic" />
                </div>
                <div className="pics">
                  <img src={require("./assets/lang/vue.png")} alt="pic" />
                </div>
                <div className="pics">
                  <img src={require("./assets/lang/angular.png")} alt="pic" />
                </div>
              </div>
            </div>

            <div className="lang flex flex-row items-center gap-[20px] max-w-[1000px] w-[100%]">
              <div className="item-start w-[160px]">
                <h1 className="text-xl">Dev tools:</h1>
              </div>
              <div className="flex flex-row justify-center items-center gap-[10px]">
                <div className="pics">
                  <img src={require("./assets/lang/git.png")} alt="pic" />
                </div>
                <div className="pics">
                  <img src={require("./assets/lang/vsc.png")} alt="pic" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  function experience() {
    return <p>Experience</p>;
  }
  function projects() {
    return (
      <div className="project">
        <div className="project_container">
          <h1 className="title">PokeDex</h1>
          <p className="description">
            A web application designed as a comprehensive encyclopedia for
            Pokémons, similar to the in-game "PokéDex" in the Pokémon series.
          </p>
          <img src={poke} alt="pic" />
          <p className="tech">
            Technologies: React, Javascript, Tailwind CSS, APIs, Git, Node.
          </p>
          <a href="https://github.com/Nagacool123" target="_self">
            Link
          </a>
        </div>
        <div className="project_container">
          <h1 className="title">Fuel Quote Form</h1>
          <p className="description">
            A web application that allows users to easily create an account and
            order fuel in bulk with ease.
          </p>
          <img src={fuel} alt="pic" />
          <p className="tech">
            Technologies: Javascript, React, Tailwind CSS, MySQL, Git.
          </p>
          <a href="https://github.com/Nagacool123" target="_self">
            Link
          </a>
        </div>
        <div className="project_container">
          <h1 className="title">3d Portfolio</h1>
          <p className="description">
            A interactive 3D portfolio using Three.js
          </p>
          <img src={three} alt="pic" />
          <p className="tech">
            Technologies: Three.js, Vite, Javascript, HTML, CSS
          </p>
          <a href="https://github.com/Nagacool123" target="_self">
            Link
          </a>
        </div>
        <div className="project_container">
          <h1 className="title">Portfolio OS</h1>
          <p className="description">
            A Windows XP-inspired operating system interface integrated into a
            Three.js portfolio application.
          </p>
          <img src={OS} alt="pic" />
          <p className="tech">
            Technologies: React, Javascript, Node, Tailwind CSS
          </p>
          <a href="https://github.com/Nagacool123" target="_self">
            Link
          </a>
        </div>
      </div>
    );
  }
  function contacts() {
    return (
      <div className="contacts">
        <h1>Contacts</h1>
        <div className="contacts_list flex flex-col">
          <a href="https://github.com/Nagacool123" target="_self">
            GitHub
          </a>
          <a href="https://linkedin.com/in/hung-trinh-9866b4271" target="_self">
            LinkedIn
          </a>
          <p>trinhhung544@gmail.com</p>
        </div>
      </div>
    );
  }

  useEffect(() => {
    setInfo(about); // This will only run once when the component mounts
  }, []); // Empty dependency array ensures it runs only once

  return (
    <div className="info_container">
      <div className="nav">
        <button onClick={() => setInfo(about)}>
          <h1>About</h1>
        </button>
        <button onClick={() => setInfo(experience)}>
          <h1>Experience</h1>
        </button>
        <button onClick={() => setInfo(projects)}>
          <h1>Projects</h1>
        </button>
        <button onClick={() => setInfo(contacts)}>
          <h1>Contacts</h1>
        </button>
      </div>
      <div className="info">{info}</div>
    </div>
  );
}

export default Info;
