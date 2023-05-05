/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import {
  IoLogoLinkedin,
  IoLogoGithub,
  IoLogoTwitter,
} from "react-icons/io";
import { CgFileDocument } from "react-icons/cg";
import heroImage from "../../public/assets/images/main/hero_img.gif";
import Button from "./Button";

const Hero = () => {
  return (
    <div id="principal" className="my-5 w-full h-full text-white">
      <div className="flex flex-col-reverse md:flex-row justify-evenly items-center p-5">
        <div className="flex flex-col-reverse md:flex-row justify-around items-center">
          <div id="social-medias" className="mx-5">
            <ul className="flex flex-row md:flex-col justify-around text-principal">
              <a href="https://github.com/miilanez">
                <li className="my-2 mr-4">
                  <IoLogoGithub size={30} />
                </li>
              </a>
              <a href="https://www.linkedin.com/in/gabriel-milanez/">
                <li className="my-2 mr-4">
                  <IoLogoLinkedin size={30} />
                </li>
              </a>
              <a href="https://twitter.com/mr_milanez">
                <li className="my-2 mr-4">
                  <IoLogoTwitter size={30} />
                </li>
              </a>
            </ul>
          </div>
          <div
            id="info-container"
            className="flex flex-col items-center text-center xl:text-left"
          >
            <div className="p-2">
              <h2 className="text-xl md:text-4xl">Olá! aqui é o</h2>
              <h1 className="text-3xl md:text-8xl text-secondary">
                Gabriel Milanez
              </h1>
              <h2 className="text-xl text-principal ml-2 md:text-3xl xl:text-4xl">
                <Typewriter
                  options={{
                    strings: ["Desenvolvedor Front-End"],
                    autoStart: true,
                    loop: true,
                    cursor: "_",
                    pauseFor: 60000,
                  }}
                />
              </h2>

              <div className=" w-full flex flex-col md:flex-row items-center justify-evenly my-6 ">
                <Button
                  icon={<CgFileDocument />}
                  title="Currículo"
                  link="https://1drv.ms/b/s!AnV10JJ1-_YAivAzOivOqBl3wKb7RQ?e=rwVwxc"
                />

                <Button
                  icon={<IoLogoLinkedin />}
                  title="LinkedIn"
                  link="https://www.linkedin.com/in/gabriel-milanez/"
                />
              </div>
            </div>
            <div></div>
          </div>
        </div>
        <div className="">
          <Image
            src={heroImage}
            alt="Imagem de Gabriel Milanez"
            className="rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
