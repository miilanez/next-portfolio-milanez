/* eslint-disable react/jsx-key */
// import Link from "next/link";
import { Link } from "react-scroll";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { IoLogoLinkedin, IoLogoGithub, IoLogoTwitter } from "react-icons/io";

const Navbar = () => {
  //gerenciamento de estados
  const [navbar, setNavbar] = useState(false);
  const [color, setColor] = useState("transparent");

  //mostrar navbar
  const handleShowNavbar = () => {
    setNavbar(!navbar);
  };

  //itens de navegação
  const navigation = [
    { name: "Principal", href: "principal" },
    { name: "Sobre", href: "sobre" },
    { name: "Projetos", href: "projetos" },
    // { name: "Blog", href: "blogs" },
    { name: "Contato", href: "contato" },
  ];

  //efeito na navbar ao scrollar a página
  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#0f0f0f");
      } else {
        setColor("transparent");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed right-0 top-0 w-full h-16 z-10 ease-in duration-300"
    >
      <div className="max-w-[1240px] m-auto flex justify-between items-center text-white p-3 md:p-0 md:px-2 xl:px-1">
        <Link href="/">
          <h1 className="text-principal text-3xl font-semibold">
            {"<"}
            <span className="text-white">Dev Milanez</span>
            {" />"}
          </h1>
        </Link>
        <ul className="hidden sm:flex">
          <li className="p-4">
            <Link
              activeClass="active"
              to="principal"
              spy={true}
              smooth={true}
              duration={500}
              className="relative font-medium hover:text-principal before:absolute before:-bottom-1 before:h-0.5 before:w-full before:scale-x-0 before:bg-secondary before:transition hover:before:scale-x-100"
            >
              Principal
            </Link>
          </li>
          <li className="p-4">
            <Link
              activeClass="active"
              to="sobre"
              spy={true}
              smooth={true}
              duration={500}
              className="relative font-medium hover:text-principal before:absolute before:-bottom-1 before:h-0.5 before:w-full before:scale-x-0 before:bg-secondary before:transition hover:before:scale-x-100"
            >
              Sobre
            </Link>
          </li>
          <li className="p-4">
            <Link
              activeClass="active"
              to="projetos"
              spy={true}
              smooth={true}
              duration={500}
              className="relative font-medium hover:text-principal before:absolute before:-bottom-1 before:h-0.5 before:w-full before:scale-x-0 before:bg-secondary before:transition hover:before:scale-x-100"
            >
              Projetos
            </Link>
          </li>
          <li className="p-4">
            <Link
              activeClass="active"
              to="contato"
              spy={true}
              smooth={true}
              duration={500}
              className="relative font-medium hover:text-principal before:absolute before:-bottom-1 before:h-0.5 before:w-full before:scale-x-0 before:bg-secondary before:transition hover:before:scale-x-100"
            >
              Contato
            </Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleShowNavbar} className="block sm:hidden z-10">
          {navbar ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            navbar
              ? "sm:hidden absolute top-0 right-0 bottom-0 flex flex-col justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
              : "sm:hidden absolute top-0 right-[-100%] bottom-0 flex flex-col justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
          }
        >
          <div className="text-principal text-4xl font-semibold">
            <Link href="/">
              {"<"}
              <span className="text-white">Dev Milanez</span>
              {"/>"}
            </Link>
          </div>
          <ul className="my-24 ">
            <li className="p-4">
              <Link
                activeClass="active"
                to="principal"
                spy={true}
                smooth={true}
                duration={500}
                onClick={handleShowNavbar}
                className="p-4 text-principal text-2xl hover:text-gray-500"
              >
                Principal
              </Link>
            </li>
            <li className="p-4">
              <Link
                activeClass="active"
                to="sobre"
                spy={true}
                smooth={true}
                duration={500}
                onClick={handleShowNavbar}
                className="p-4 text-principal text-2xl hover:text-gray-500"
              >
                Sobre
              </Link>
            </li>
            <li className="p-4">
              <Link
                activeClass="active"
                to="projetos"
                spy={true}
                smooth={true}
                duration={500}
                onClick={handleShowNavbar}
                className="p-4 text-principal text-2xl hover:text-gray-500"
              >
                Projetos
              </Link>
            </li>
            <li className="p-4">
              <Link
                activeClass="active"
                to="contato"
                spy={true}
                smooth={true}
                duration={500}
                onClick={handleShowNavbar}
                className="p-4 text-principal text-2xl hover:text-gray-500"
              >
                Contato
              </Link>
            </li>
          </ul>
          <div id="social medias" className="">
            <p className="tracking-widest text-white">Vamos nos conectar!</p>
            <div className="mt-2">
              <ul className="flex flex-row justify-around text-principal">
                <Link href="https://github.com/miilanez">
                  <li>
                    <IoLogoGithub size={30} />
                  </li>
                </Link>
                <Link href="https://www.linkedin.com/in/gabriel-milanez/">
                  <li>
                    <IoLogoLinkedin size={30} />
                  </li>
                </Link>
                <Link href="https://twitter.com/mr_milanez">
                  <li>
                    <IoLogoTwitter size={30} />
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
