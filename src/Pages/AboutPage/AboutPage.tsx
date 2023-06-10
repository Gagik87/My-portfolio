import AOS from "aos";
import "aos/dist/aos.css";
import "./AboutPage.scss";
import css from "../../img/css.19c8605d6b2861f5fbe0.png";
import git from "../../img/git.png";
import html from "../../img/html.png";
import js from "../../img/js.266bd9fb2663dcc057b4.png";
import mui from "../../img/mui.png";
import react from "../../img/react.c5b0245f707d5ac80cac.png";
import redux from "../../img/redux.png";
import chrome from "../../img/chrome.f2d2d35b63a3d08cd5d7.png";
import figma from "../../img/figma.242cbf02cf4c87111eef.png";
import github from "../../img/github.1684797e152c3068b84a.png";
import npm from "../../img/npm.png";
import photoshop from "../../img/photoshop.png";
import vscode from "../../img/vscode.e66400756ccbdbfc0b31.png";
import aboutImg from "../../img/about-img.7526478173e507d72c38.jpg";
import { useEffect } from "react";

export const AboutPage = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="about_wrapper">
      <div className="main_about">
        <div className="left_block">
          <div
            className="about_title"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <h1>About Me</h1>
            <div className="about_me_description">
              <p>
                My name is Gagik. I am currently looking for a job as a junior
                React.js developer. Know the latest frontend technologies. I
                have about a year of experience in JavaScript library - React.js
                and create dynamic web applications using it. Actively learning
                TypeScript at now. I am a fast learner, sociable, hardworking,
                capable and I speak English well (intermediate).
              </p>
            </div>
          </div>
        </div>
        <div
          className="right_block"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <img src={aboutImg} alt="about_img" />
        </div>
      </div>
      <div className="skils_tools">
        <div className="skills_bar" data-aos="fade-up" data-aos-duration="1000">
          <h1>
            Professional <span>Skillset</span>
          </h1>
          <div className="skilll">
            <div className="skill">
              <img src={html} alt="html" />
              <p>HTML5</p>
            </div>

            <div className="skill">
              <img src={css} alt="css" />
              <p>CSS3</p>
            </div>
            <div className="skill">
              <img src={js} alt="js" />
              <p>JavaScript</p>
            </div>
            <div className="skill">
              <img src={react} alt="react" />
              <p>React.js</p>
            </div>
            <div className="skill">
              <img src={redux} alt="redux" />
              <p>Redux</p>
            </div>
            <div className="skill">
              <img src={git} alt="git" />
              <p>Git</p>
            </div>
          </div>
        </div>
      </div>
      <div className="tools_bar" data-aos="fade-up" data-aos-duration="1000">
        <h1>
          <span>Tools</span> I use
        </h1>
        <div className="tools">
          <div className="tool">
            <img src={vscode} alt="vscode" />
            <p>VSCode</p>
          </div>
          <div className="tool">
            <img src={chrome} alt="chrome" />
            <p>Chrome</p>
          </div>
          <div className="tool">
            <img src={github} alt="github" />
            <p>GitHub</p>
          </div>
          <div className="tool">
            <img src={npm} alt="npm" />
            <p>NPM</p>
          </div>
          <div className="tool">
            <img src={photoshop} alt="photoshop" />
            <p>Photoshop</p>
          </div>
          <div className="tool">
            <img src={figma} alt="figma" />
            <p>Figma</p>
          </div>
        </div>
      </div>
    </div>
  );
};
