import React, { useEffect } from "react";
import "./resumePage.scss";
import AOS from "aos";
import "aos/dist/aos.css";

export const ResumePage = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="resume">
      <a href="#" target="_blank" rel="noreferrer">
        <button
          className="resume_button"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          View (ENG)
        </button>
      </a>

      <a href="#" target="_blank" rel="noreferrer">
        <button
          className="resume_button eng"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          View (RU)
        </button>
      </a>
    </div>
  );
};
