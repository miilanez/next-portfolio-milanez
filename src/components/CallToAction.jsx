import React from "react";
import Button from "./Button";

import { IoIosRocket } from "react-icons/io";

const CallToAction = () => {
  return (
    <div className="w-full my-3">
      <div className="mx-5 p-3 bg-darkess rounded-xl">
        <div className="mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:flex-row lg:justify-between">
          <h1 className="text-secondary text-2xl md:text-3xl font-semibold leading-tight text-center lg:text-left">
            Gostou do que viu? Vamos tomar um café e conversar!
          </h1>
          <Button
            icon={<IoIosRocket />}
            title="Iniciar Projeto"
            link="https://api.whatsapp.com/send?phone=5581982301817&text=Fala%20Gabriel%2C%20Bom%20dia!"
          />
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
