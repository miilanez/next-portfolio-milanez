import React from "react";
import Image from "next/image";
import Link from "next/link";
import Typewriter from "typewriter-effect";
import {
  IoLogoLinkedin,
  IoLogoGithub,
  IoLogoTwitter,
  IoLogoFacebook,
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
              <Link href="/">
                <li className="my-2 mr-4">
                  <IoLogoGithub size={30} />
                </li>
              </Link>
              <Link href="/">
                <li className="my-2 mr-4">
                  <IoLogoLinkedin size={30} />
                </li>
              </Link>
              <Link href="/">
                <li className="my-2 mr-4">
                  <IoLogoTwitter size={30} />
                </li>
              </Link>
              <Link href="/">
                <li className="my-2 mr-4">
                  <IoLogoFacebook size={30} />
                </li>
              </Link>
            </ul>
          </div>
          <div id="info-container" className="flex flex-col items-center text-center xl:text-left">
            <div className="p-2">
              <h2 className="text-xl md:text-4xl">Olá! aqui é o</h2>
              <h1 className="text-3xl md:text-8xl text-secondary">Gabriel Milanez</h1>
              <h2 className="text-xl md:text-3xl xl:text-4xl flex flex-col lg:flex-row">
                e sou
                <span className="text-principal ml-2">
                  <Typewriter
                    options={{
                      strings: ["Desenvolvedor Front-End"],
                      autoStart: true,
                      loop: true,
                      cursor: "_",
                      pauseFor: 60000,
                    }}
                  />
                </span>
              </h2>

              <div className=" w-full flex flex-col md:flex-row items-center justify-evenly my-6 ">
                <Button icon={<CgFileDocument />} title="Currículo" link="#" />
                <Button icon={<IoLogoLinkedin />} title="LinkedIn" link="#" />
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