import React from "react";

import { CgWebsite } from "react-icons/cg";
import { MdDevices } from "react-icons/md";
import { TbLayoutDashboard } from "react-icons/tb";

const Services = () => {
  return (
    <div class="py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
      <div class="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
        <div class="mx-auto max-w-lg text-center lg:mx-0 lg:text-left">
          <h2 class="text-lg md:text-3xl text-principal font-bold sm:text-4xl">
            Meus Serviços
          </h2>

          <p class="mt-4 text-white">
            Meu trabalho é focado em fornecer as melhores soluções para a Web,
            levando ao sucesso do produto como um todo. Confira os serviços
            disponíveis:
          </p>
        </div>

        {/* <div class="bg-darkess mx-5 grid grid-cols-2 gap-4 sm:grid-cols-3"> */}
        <div class="mx-5 flex flex-col md:flex-row gap-4">
          <a class="block rounded-xl bg-darkess bg-opacity-10 min-w-[31%] hover:bg-opacity-70 border border-principal p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
            <div className="flex flex-row md:flex-col justify-start items-center md:items-start">
              <span class="inline-block rounded-lg bg-white p-3 mr-3">
                <CgWebsite size={25} />
              </span>

              <h2 class="md:mt-2 text-secondary text-xl font-bold">Websites</h2>
            </div>

            <p class="mt-1 sm:block sm:text-sm text-white">
              Produção de websites responsivos e dinâmicos em Nextjs ou
              Wordpress
            </p>
          </a>

          <a class="block rounded-xl bg-darkess bg-opacity-10 min-w-[31%] hover:bg-opacity-70 border border-principal p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
            <div className="flex flex-row md:flex-col justify-start items-center md:items-start">
              <span class="inline-block rounded-lg bg-white p-3 mr-3">
                <MdDevices size={25} />
              </span>

              <h2 class="mt-2 text-secondary text-xl font-bold">
                Landing Pages
              </h2>
            </div>
            <p class="mt-1 sm:block sm:text-sm text-white">
              Hotsites customizadas para converter visitantes em Leads e em
              Clientes
            </p>
          </a>

          <a class="block rounded-xl bg-darkess bg-opacity-10 min-w-[31%] hover:bg-opacity-70 border border-principal p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
            <div className="flex flex-row md:flex-col justify-start items-center md:items-start">
              <span class="inline-block rounded-lg bg-white p-3 mr-3">
                <TbLayoutDashboard size={25} />
              </span>

              <h2 class="mt-2 text-secondary text-xl font-bold">
                Aplicações Web
              </h2>
            </div>
            <p class="mt-1 sm:block sm:text-sm text-white">
              Desenvolvimento de Dashboards e outras aplicações
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;
