import Image from "next/image";
import React from "react";

import TascomLogo from "../../public/assets/images/logos/tascom.png";
import RCSLogo from "../../public/assets/images/logos/rcs.png";
import EchoLogo from "../../public/assets/images/logos/echo.png";

const Clients = () => {
  return (
    <div
      id="clientes"
      className="w-full p-5 my-5 flex flex-col justify-evenly items-center text-white"
    >
      {/* <h1 className="my-10">CLIENTES</h1> */}

      <h2 className="text-center">
        <span className="text-principal text-xl md:text-4xl">
          Tenho orgulho de ter colaborado com algumas empresas incríveis:
        </span>
      </h2>

      <div className="flex flex-col md:flex-row md:flex-wrap justify-center mx-auto my-3 md:my-10">
        <div className="flex bg-darkess bg-opacity-10 my-2 md:my-1 md:mx-3 rounded-xl justify-center w-full p-6 align-middle md:w-1/3 xl:w-1/4">
          <Image src={TascomLogo} alt="Logo Tascom" className="h-8 md:h-14" />
        </div>
        <div className="flex bg-darkess bg-opacity-10 my-2 md:my-1 md:mx-3 rounded-xl justify-center w-full p-6 align-middle md:w-1/3 xl:w-1/4">
          <Image src={EchoLogo} alt="Logo Echo" className="h-8 md:h-14" />
        </div>
        <div className="flex bg-darkess bg-opacity-10 my-2 md:my-1 md:mx-3 rounded-xl justify-center w-full p-6 align-middle md:w-1/3 xl:w-1/4">
          <Image src={RCSLogo} alt="Logo RCS Design" className="h-8 md:h-14" />
        </div>
      </div>
    </div>
  );
};

export default Clients;
