import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  IoLogoLinkedin,
  IoLogoGithub,
  IoLogoTwitter,
  IoLogoFacebook,
} from "react-icons/io";
import heroImage from "../../public/assets/images/main/hero_img.gif";

const Hero = () => {
  return (
    <div id="principal" className="my-5 w-full h-full text-white">
      <div className="flex flex-row justify-evenly items-center p-5">
        <div className="flex flex-row justify-around items-center">
          <div id="social-medias" className="mx-5">
            <ul className="flex flex-col justify-around text-principal">
              <Link href="/">
                <li className="my-2">
                  <IoLogoGithub size={30} />
                </li>
              </Link>
              <Link href="/">
                <li className="my-2">
                  <IoLogoLinkedin size={30} />
                </li>
              </Link>
              <Link href="/">
                <li className="my-2">
                  <IoLogoTwitter size={30} />
                </li>
              </Link>
              <Link href="/">
                <li className="my-2">
                  <IoLogoFacebook size={30} />
                </li>
              </Link>
            </ul>
          </div>
          <div id="info-container" className="flex flex-col items-center">
            <div className="p-2">
              <h2 className="text-4xl">Olá! aqui é o</h2>
              <h1 className="text-8xl text-secondary">Gabriel Milanez</h1>
              <h2 className="text-4xl">
                e sou{" "}
                <span className="text-principal">Desenvolvedor Front-End</span>
              </h2>

              

              <div className="mt-5">
                <p className="">Jaboatão dos Guararapes - PE</p>
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
