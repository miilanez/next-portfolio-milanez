import Image from "next/image";
import React from "react";

import { FiAirplay, FiGithub } from "react-icons/fi";

import DefaultImage from "../../public/assets/images/projects/default.png";
import Echo from "../../public/assets/images/projects/echo.png";
import VeraCruz from "../../public/assets/images/projects/site-vera-cruz.png";
import Researcher from "../../public/assets/images/projects/researcher.png";

const Projects = () => {
  return (
    <div
      id="projetos"
      className="w-full p-5 my-5 md:mb-10 flex flex-col justify-evenly items-center text-white"
    >
      <h1 className="my-10">PROJETOS</h1>

      <h2 className="text-center">
        <span className="text-principal text-xl md:text-4xl">
          Confira alguns dos meus trabalhos mais recentes
        </span>
      </h2>

      <div className="mt-5 md:mt-10 flex flex-col md:grid md:grid-cols-4 gap-4 mx-auto justify-center items-center">
        <ProjectCard
          type="Website"
          title="Echo Info Institucional"
          linkDemo="https://echoinfo.com.br"
          linkGitHub="https://github.com/miilanez"
          technologys="HTML5, CSS3, JavaScript, PHP, Bootstrap"
          image={Echo}
          description="Site institucional para a empresa de soluções em TI Echo Info"
        />
        <ProjectCard
          type="Website"
          title="Site Vera Cruz FC"
          linkDemo="https://veracruzfutebolclube.vercel.app/"
          linkGitHub="https://github.com/miilanez/site-vera-cruz"
          technologys="HTML5, CSS3, JavaScript, Bootstrap"
          image={VeraCruz}
          description="Website de estudos modelo para clubes de futebol"
        />
        <ProjectCard
          type="Aplicação"
          title="Github Researcher"
          linkDemo="https://neurobots-github-research.vercel.app"
          linkGitHub="https://github.com/miilanez/teste-neurobots"
          technologys="ReactJS, CSS3, Axios"
          image={Researcher}
          description="Aplicação Web criada para achar e contabilizar perfis de usuários do Github"
        />
        <ProjectCard
          type="Website"
          title="Portfólio Pessoal"
          linkDemo="#"
          linkGitHub="https://github.com/miilanez/next-portfolio-milanez"
          technologys="NextJS, Tailwind, Sass, MaterialUI"
          image={DefaultImage}
          description="Website tipo Portfólio criado para uso pessoal"
        />
      </div>
    </div>
  );
};

export default Projects;

function ProjectCard({ type, title, technologys, image, description, linkDemo, linkGitHub }) {
  return (
    <div className="w-full h-40 md:h-96 md:min-w-[31%] bg-darkess border border-principal rounded-lg">
      <div className="group relative block">
        <Image
          alt="Developer"
          src={image}
          className="absolute inset-0 object-cover rounded-lg h-40 md:h-96 w-full opacity-25 transition-opacity group-hover:opacity-50"
        />

        <div className="relative p-4 sm:p-6 lg:p-8">
          <p className="text-sm font-medium uppercase tracking-widest text-secondary">
            {type}
          </p>

          <p className="text-xl font-bold text-white sm:text-2xl">{title}</p>

          {/* <div className="hidden md:block mt-32 sm:mt-48 lg:mt-64"> */}
          <div className="hidden xl:block md:mt-40">
            <div className="flex flex-col justify-center items-center translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
              <div className="flex flex-row justify-evenly items-center gap-2">
                <MiniButton title="Demo" icon={<FiAirplay />} link={linkDemo} />
                <MiniButton title="GitHub" icon={<FiGithub />} link={linkGitHub} />
              </div>
              <p className="text-sm text-principal mt-2">{technologys}</p>
              <p className="text-sm text-white mt-2">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MiniButton({ title, icon, link }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <button className="w-20 flex flex-row justify-center items-center rounded-md font-medium text-base text-white hover:text-slate-900 cursor-pointer p-2 bg-principal bg-opacity-10 hover:bg-opacity-100">
        <span className="mr-1 text-xl">{icon}</span>
        <span className="ml-1">{title}</span>
      </button>
    </a>
  );
}
