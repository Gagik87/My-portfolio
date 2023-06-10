// @ts-ignore

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "./HomePage.scss";
import avatar from "../../img/f.png";
import github from "../../img/github.22cfdd1cba253783ce51.png";
import gmail from "../../img/gmail.png";
import instagram from "../../img/instagram.ac32ec0a111aeba03298.png";
import telegram from "../../img/telegram.6d4fb402a1836d62584b.png";

export const HomePage = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <main>
      <div className="home_wrapper">
        <div className="home_main_info">
          <div
            className="main_infos"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <h2 className="h2">Hi There!</h2>
            <h1>
              I'm <span>Gagik Tovmasyan</span>
            </h1>
            <p>
              I am junior Front End Developer. With over <br /> one year of
              experience developing web <br /> applications using the latest
              front-end <br />
              technologies and features.
            </p>
          </div>
          <div
            className="home_avatar"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <img className="avatar" src={avatar} alt="avatarImg" />
          </div>
        </div>
        <div
          className="contacts_block"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="contacts_main">
            <h1>Get in Touch</h1>
          </div>
          <div className="contacts_description">
            <p>
              Whether you want to get in touch, or talk about a project
              <br />
              collaboration. <br /> <span>Feel free to connect with me</span>
            </p>
          </div>
          <div className="contacts">
            <a
              className="contact_item"
              href="https://github.com/Gagik87"
              target="_blank"
              rel="noreferrer"
            >
              <img src={github} alt="github" />
            </a>
            <a
              className="contact_item"
              href="https://t.me/person87"
              target="_blank"
              rel="noreferrer"
            >
              <img src={telegram} alt="telegram" />
            </a>
            <a
              className="contact_item"
              href="https://instagram.com/001_tovmasyan?igshid=MmJiY2I4NDBkZg=="
              target="_blank"
              rel="noreferrer"
            >
              <img src={instagram} alt="instagram" />
            </a>
            <a
              className="contact_item"
              href="mailto:gags.rap@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <img src={gmail} alt="gmail" />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};
