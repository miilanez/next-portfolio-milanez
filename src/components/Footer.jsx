import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full">
      <footer aria-label="Site Footer" className="bg-darkess">
        <div className="relative px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
          <div className="absolute top-4 right-4 sm:top-6 sm:right-6 lg:top-8 lg:right-8">
            <Link
              className="inline-block rounded-full bg-principal p-2 text-black shadow transition hover:bg-secondary sm:p-3 lg:p-4"
              href="/"
            >
              <span className="sr-only">Voltar para o Topo</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </Link>
          </div>

          <div className="lg:flex lg:items-end lg:justify-between">
            <div>
              <div className="flex justify-center lg:justify-start">
                <Link href="/">
                  <h1 className="text-principal text-3xl font-semibold">
                    {"<"}
                    <span className="text-white">Dev Milanez</span>
                    {" />"}
                  </h1>
                </Link>
              </div>

              <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 lg:text-left">
                {
                  "Quanto mais avança a tecnologia, mais respeitado será o ser que"
                }
                {" se mantiver Humano."} -Marco Aurélio Ferreira
              </p>
            </div>
          </div>

          <p className="mt-5 text-center text-sm text-gray-500 lg:text-right">
            Copyright &copy; Gabriel Milanez 2023. Direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
