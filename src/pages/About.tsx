import React, { useState } from "react";
import Selfie from "../assets/selfie.jpeg";
import ColourfulList from "../components/ColourfulList";
import { COLOURS } from "../utils/constants";
//images
import LinkImg from "../assets/link.svg";
import LangImg from "../assets/chat.svg";
import CodeImg from "../assets/code-slash.svg";

const About = () => {
  return (
    <div className="AboutPage">
      <div className="mainTile">
        <div className="header">
          <img src={Selfie} title="selfie" className="selfie" />
          <div className="title">
            <h1 className="pageTitle">Cerith Freeman</h1>
            <h3 className="font-inter">/'kɛrɪθ 'friːmən/</h3>
          </div>
        </div>
        <p>
          Hi there, <br className="mobile-only" />
          my name's Cerith! 👋🏻 <br className="mobile-only" />
          I'm a front-end web developer just starting&nbsp;out.
        </p>
        <p>
          Having just completed my master's in{" "}
          <strong> Computing & Information Systems </strong> at
          <strong> Queen Mary Uni&shy;versity of London</strong>,{"  "}I'm
          look&shy;ing to expand my skills as a web developer in the real world.
        </p>
        <p>
          I love coding & design, and outside of work I like knitting, reading
          and learning languages.
        </p>
      </div>
      <div className="bottomStrip">
        <div className="leftItems">
          <div id="linkSection" className="listSection">
            <h2>Links to more</h2>
            <ul className="list">
              <li style={{ backgroundColor: COLOURS.$orange }}>
                <a href="mailto:cerith.elis@gmail.com" className="label">
                  Send me an email
                </a>
              </li>
              <li style={{ backgroundColor: COLOURS.$purple }}>
                <a href="../assets/cv.pdf" className="label">
                  See my CV
                </a>
              </li>
            </ul>
            <img className="white-filter image" id="LinkImg" src={LinkImg} />
          </div>
          <div id="langSection" className="listSection">
            <h2>(Human) Languages</h2>
            <ColourfulList className="list">
              <li>
                <strong>English</strong> | Native
              </li>
              <li title="Gwell Cymraeg slac na Saesneg slic!">
                <strong>Welsh</strong> | Native
              </li>
              <li title="Sprich mich an auf Deutsch!" id="li-German">
                <strong> German </strong> | C1
              </li>
              <li title="¡Hablámanos!" id="li-Spanish">
                <strong>Spanish</strong> | A2
              </li>
            </ColourfulList>
            <img className="white-filter image" id="LangImg" src={LangImg} />
          </div>
        </div>
        <div className="listSection">
          <h2>Skills</h2>
          <ColourfulList className="list skills">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>Python</li>
            <li>Tailwind</li>
            <li>Figma</li>
            <li>SQL</li>
            <li>SVN</li>
            <li>Git</li>
          </ColourfulList>
          <img className="white-filter image" id="CodeImg" src={CodeImg} />
        </div>
      </div>
    </div>
  );
};

export default About;
