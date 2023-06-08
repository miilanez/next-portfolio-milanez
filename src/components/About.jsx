/* eslint-disable react/jsx-key */
import React from "react";
import Image from "next/image";
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
import { Tooltip } from "@mui/material";

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
      <h1 className="text-white my-12 mt-20">SOBRE</h1>
      <div className="flex flex-col justify-center items-center">
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
          <div className="text-white flex flex-col justify-center items-center text-center my-5 md:w-[59%]">
            <h2 className="mb-2">Sou Gabriel Milanez</h2>
            <h2 className="mb-5 text-sm flex flex-row justify-center items-center text-principal">
              <span className="mr-2 text-base">
                <MdLocationOn />
              </span>
              Jaboatão dos Guararapes - PE - Brasil
            </h2>
            <p className="mb-1">
              Olá, seja bem-vindo(a) ao meu portfólio! Estou no mercado há
              10 anos. Desde então, fui conheçendo e me aprimorando nos
              recursos tecnológicos. Começei a carreira como Técnico em TI,
              mas quando vi o potencial da programação em resolver problemas
              reais e ajudar as pessoas, decidi que era isso que eu queria
              fazer. Hoje, sou um Desenvolvedor em Front-End Jr,
              buscando oferecer aos clientes as melhores soluções para o seu
              negócio.
            </p>
            <p className="mb-5">
              Também gosto de compartilhar conteúdo relacionado ao que aprendi
              ao longo dos anos em Desenvolvimento Web para que possa ajudar
              outras pessoas da Comunidade Dev. Sinta-se à vontade para se
              conectar ou me seguir no meu Linkedin , onde posto conteúdo útil
              relacionado ao desenvolvimento e programação da Web Estou aberto a
              oportunidades de trabalho onde possa contribuir, aprender e
              crescer. Se você tiver uma boa oportunidade que corresponda às
              minhas habilidades e experiência, não hesite em entrar em contato
              comigo.
            </p>
            <Button
              icon={<CgFileDocument />}
              title="Currículo"
              link="https://1drv.ms/b/s!AnV10JJ1-_YAivEdlTQQw_lPrLvsJQ?e=HgRRDD"
            />
          </div>
        </div>

        <div
          id="tecnology-box"
          className="w-full mt-8 flex flex-col justify-center items-center"
        >
          <h4 className="text-white text-lg">
            Atualmente eu estudo e trabalho com as seguintes tecnologias:
          </h4>
          <ul className="w-full mt-6 flex flex-wrap lg:flex-nowrap justify-center">
            {tecnologias.map((item) => (
              <li key={item.name} className="p-3 w-1/3 lg:w-auto md:w-1/6 flex justify-center items-center">
                <a
                  href={item.href}
                  alt={item.name}
                  className="text-secondary"
                >
                  <Tooltip title={item.name} arrow>
                    <span className="text-4xl md:text-5xl">{item.icon}</span>
                  </Tooltip>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
