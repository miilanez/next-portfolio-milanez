import Link from "next/link";
import React from "react";
import Button from "./Button";

import { BsFillTelephoneFill } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";
import { RiSendPlaneFill } from "react-icons/ri";

const Contact = () => {
  return (
    <div
      id="contato"
      className="w-full p-5 my-5 flex flex-col justify-evenly items-center text-white"
    >
      <h1 className="my-10">CONTATO</h1>

      <h2 className="text-center">
        <span className="text-principal">
          Quer mandar freelas? Ofertas de emprego? Feedbacks? Só escolher uma
          dessas opções:
        </span>
      </h2>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="lg:col-span-2 lg:py-12">
            <p className="max-w-xl text-lg text-center">
              At the same time, the fact that we are wholly owned and totally
              independent from manufacturer and other group control gives you
              confidence that we will only recommend what is right for you.
            </p>

            <div className="flex flex-col mt-8 text-center">
              <div className="flex flex-col justify-center items-center my-3 ">
                <BsFillTelephoneFill size={25} />
                <a href="" className="mt-1 text-2xl font-bold text-secondary">
                  +55 81 98230 1817
                </a>
              </div>
              <div className="flex flex-col justify-center items-center my-3 ">
                <IoIosMail size={25} />
                <Link href="" className="mt-1 text-base">
                  gabrielmilanez99@hotmail.com
                </Link>
              </div>
              <div className="flex flex-col justify-center items-center my-3 ">
                <MdLocationOn size={25} />
                <address className="my-3 text-xl not-italic">
                  Av. Ulisses Montarroyos, 2418, Candeias, Jaboatão dos
                  Guararapes, Pernambuco, Brasil
                </address>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-darkess p-5 shadow-lg lg:col-span-3 lg:p-12">
            <form action="" className="space-y-4">
              <div>
                <label className="sr-only" for="name">
                  Nome
                </label>
                <input
                  className="w-full rounded-lg bg-darkess border border-principal p-3 text-sm"
                  placeholder="Nome"
                  type="text"
                  id="name"
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="sr-only" for="email">
                    Email
                  </label>
                  <input
                    className="w-full rounded-lg bg-darkess border border-principal p-3 text-sm"
                    placeholder="Endereço de Email"
                    type="email"
                    id="email"
                  />
                </div>

                <div>
                  <label className="sr-only" for="phone">
                    Telefone
                  </label>
                  <input
                    className="w-full rounded-lg bg-darkess border border-principal p-3 text-sm"
                    placeholder="Telefone"
                    type="tel"
                    id="phone"
                  />
                </div>
              </div>
              <div>
                <label className="sr-only" for="message">
                  Mensagem
                </label>

                <textarea
                  className="w-full rounded-lg bg-darkess border border-principal p-3 text-sm"
                  placeholder="Mensagem"
                  rows="8"
                  id="message"
                ></textarea>
              </div>

              <div className="mt-4 flex justify-center items-center">
                <Button
                  link=""
                  type="submit"
                  icon={<RiSendPlaneFill />}
                  title="Enviar Form"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
