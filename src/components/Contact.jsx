import React from "react";

import { BsFillTelephoneFill } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";
import { DiGhostSmall } from "react-icons/di";

const Contact = () => {
  return (
    <div
      id="contato"
      className="w-full p-5 my-5 md:mb-10 flex flex-col justify-evenly items-center text-white"
    >
      <h1 className="my-10">CONTATO</h1>

      <h2 className="text-center">
        <span className="text-principal">
          Quer mandar freelas? Ofertas de emprego? Feedbacks? Só escolher uma
          dessas opções:
        </span>
      </h2>
      <div className="w-full grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4 mt-10">
        <div className="flex p-3 space-x-4 rounded-lg md:space-x-6 bg-darkess bg-opacity-10 text-gray-100">
          <div className="flex justify-center items-center p-2 align-middle rounded-lg sm:p-4 bg-principal">
            <BsFillTelephoneFill size={35} />
          </div>
          <div className="flex flex-col justify-center align-middle">
            <p className="text-2xl md:text-3xl font-semibold leading-none">
              (81) 982301817
            </p>
            <p className="">Móvel e WhattsApp</p>
          </div>
        </div>

        <div className="flex p-3 space-x-4 rounded-lg md:space-x-6 bg-darkess bg-opacity-10 text-gray-100">
          <div className="flex justify-center items-center p-2 align-middle rounded-lg sm:p-4 bg-principal">
            <IoIosMail size={35} />
          </div>
          <div className="flex flex-col justify-center align-middle">
            <p className="text-xl font-semibold leading-none">
              gabrielmilanez99
            </p>
            <p className="">Hotmail e Gmail</p>
          </div>
        </div>

        <div className="flex p-3 space-x-4 rounded-lg md:space-x-6 bg-darkess bg-opacity-10 text-gray-100">
          <div className="flex justify-center items-center p-2 align-middle rounded-lg sm:p-4 bg-principal">
            <DiGhostSmall size={35} />
          </div>
          <div className="flex flex-col justify-center align-middle">
            <p className="text-2xl font-semibold leading-none">
              Formulário
            </p>
          </div>
        </div>

        <div className="flex p-3 space-x-4 rounded-lg md:space-x-6 bg-darkess bg-opacity-10 text-gray-100">
          <div className="flex justify-center items-center p-2 align-middle rounded-lg sm:p-4 bg-principal">
            <MdLocationOn size={35} />
          </div>
          <div className="flex flex-col justify-center align-middle">
            <p className="text-lg font-semibold leading-none">
              Av Ulysses Montarroyos, 2418
            </p>
            <p className="">Candeias, Jaboatão-PE</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;