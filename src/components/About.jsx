/* eslint-disable react/jsx-key */
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import aboutImage from "../../public/assets/images/main/foto_gabriel.png";

import { MdLocationOn } from "react-icons/md";
import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiTailwindcss,
  SiGraphql,
  SiMui,
  SiNextdotjs,
  SiPython,
  SiReact,
  SiSass,
  SiVite,
} from "react-icons/si";
import { CgFileDocument } from "react-icons/cg";

const About = () => {
  //tecnologias
  const tecnologias = [
    { name: "HTML5", icon: <SiHtml5 />, href: "" },
    { name: "JavaScript", icon: <SiJavascript />, href: "" },
    { name: "React", icon: <SiReact />, href: "" },
    { name: "Vite", icon: <SiVite />, href: "" },
    { name: "NextJS", icon: <SiNextdotjs />, href: "" },
    { name: "CSS3", icon: <SiCss3 />, href: "" },
    { name: "Material UI", icon: <SiMui />, href: "" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, href: "" },
    { name: "Sass", icon: <SiSass />, href: "" },
    { name: "GraphQL", icon: <SiGraphql />, href: "" },
    { name: "Python", icon: <SiPython />, href: "" },
  ];

  return (
    <div id="sobre" className="p-5 flex flex-col justify-evenly items-center">
      <h1 className="text-white my-12">SOBRE</h1>
      <div
        id="about-content"
        className="flex flex-col md:flex-row md:justify-evenly"
      >
        <div className="lg:w-[30%] flex justify-center items-center">
          <Image
            src={aboutImage}
            alt="Imagem de Gabriel Milanez"
            className="rounded-full mb-5"
          />
        </div>
        <div className="text-white flex flex-col justify-center items-center my-5 text-center md:w-[59%]">
          <h2 className="mb-2">Eu sou Gabriel Milanez</h2>
          <h2 className="mb-5 text-sm flex flex-row justify-center items-center text-principal">
            <span className="mr-2 text-base">
              <MdLocationOn />
            </span>
            Jaboatão dos Guararapes - PE - Brasil
          </h2>
          <p className="mb-5">
            Olá, seja bem-vindo(a) ao meu portfólio! Eu começei a estudar
            tecnologia e estou no mercado há quase 10 anos. Desde então, fui
            conheçendo e me aprimorando nos recursos tecnológicos. Quando vi o
            potencial da programação em resolver problemas reais e ajudar as
            pessoas, vi que não tinha como seguir por outro caminho. Hoje, sou
            um Desenvolvedor especialista em Front-End Jr, buscando melhorias e
            desenvolvendo aprendizado sempre que é possivel.
          </p>

          <h4>Atualmente eu estudo e trabalho com as seguintes tecnologias:</h4>

          <div id="tecnology-box" className="w-full my-8 flex justify-center items-center">
            {/* <ul className="grid lg:flex grid-cols-4 lg:flex-row lg:justify-center lg:items-center"> */}
            <ul className="w-full flex flex-wrap lg:flex-nowrap justify-center">
              {tecnologias.map((item) => (
                <li className="p-3 w-1/3 lg:w-auto md:w-1/6 flex justify-center items-center">
                  <Link
                    href={item.href}
                    key={item.name}
                    alt={item.name}
                    className="text-secondary"
                  >
                    <span className="text-4xl">{item.icon}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <Button icon={<CgFileDocument />} title="Currículo" link="#" />
        </div>
      </div>
    </div>
  );
};

export default About;
