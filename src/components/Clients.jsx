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

      <div className="flex flex-col md:grid md:grid-cols-3 gap-4 mx-auto justify-center items-center my-3 md:my-10">
        <div className="flex bg-darkess bg-opacity-10 my-2 md:my-1 md:mx-3 rounded-xl justify-center  items-center mx-auto p-6 align-middle">
          <Image
            src={TascomLogo}
            alt="Logo Tascom"
            className="h-10 md:h-14 w-[70%]"
          />
        </div>
        <div className="flex bg-darkess bg-opacity-10 my-2 md:my-1 md:mx-3 rounded-xl justify-center  items-center mx-auto p-6 align-middle">
          <Image
            src={EchoLogo}
            alt="Logo Echo"
            className="h-10 md:h-14 w-[70%]"
          />
        </div>
        <div className="flex bg-darkess bg-opacity-10 my-2 md:my-1 md:mx-3 rounded-xl justify-center  items-center mx-auto p-6 align-middle">
          <Image
            src={RCSLogo}
            alt="Logo RCS Design"
            className="h-10 md:h-14 w-[70%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Clients;
