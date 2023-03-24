import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import {
  IoLogoLinkedin,
  IoLogoGithub,
  IoLogoTwitter,
  IoLogoFacebook,
} from "react-icons/io";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const handleShowNavbar = () => {
    setNavbar(!navbar);
  };

  return (
    <div className="fixed right-0 top-0 w-full z-10 ease-in duration-300">
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
        <Link href="/">
          <h1 className="text-principal text-3xl font-semibold">
            {"<"}
            <span className="text-white">Dev Milanez</span>
            {" />"}
          </h1>
        </Link>
        <ul className="hidden sm:flex">
          <li className="p-4">
            <Link href="/">Principal</Link>
          </li>
          <li className="p-4">
            <Link href="/#gallery">Sobre</Link>
          </li>
          <li className="p-4">
            <Link href="/work">Projetos</Link>
          </li>
          <li className="p-4">
            <Link href="/contact">Contato</Link>
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
              ? "sm:hidden absolute top-0 right-0 right-0 bottom-0 flex flex-col justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
              : "sm:hidden absolute top-0 right-[-100%] right-0 bottom-0 flex flex-col justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
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
            <li
              onClick={handleShowNavbar}
              className="p-4 text-principal text-2xl hover:text-gray-500"
            >
              <Link href="/">Página Principal</Link>
            </li>
            <li
              onClick={handleShowNavbar}
              className="p-4 text-principal text-2xl hover:text-gray-500"
            >
              <Link href="/#gallery">Sobre</Link>
            </li>
            <li
              onClick={handleShowNavbar}
              className="p-4 text-principal text-2xl hover:text-gray-500"
            >
              <Link href="/work">Projetos</Link>
            </li>
            <li
              onClick={handleShowNavbar}
              className="p-4 text-principal text-2xl hover:text-gray-500"
            >
              <Link href="/contact">Contato</Link>
            </li>
          </ul>
          <div id="social medias" className="">
            <p className="tracking-widest text-white">Vamos nos conectar!</p>
            <div className="mt-2">
              <ul className="flex flex-row justify-around text-principal">
                <Link href="/">
                  <li>
                    <IoLogoGithub size={30} />
                  </li>
                </Link>
                <Link href="/">
                  <li>
                    <IoLogoLinkedin size={30} />
                  </li>
                </Link>
                <Link href="/">
                  <li>
                    <IoLogoTwitter size={30} />
                  </li>
                </Link>
                <Link href="/">
                  <li>
                    <IoLogoFacebook size={30} />
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

// import Link from "next/link";
// import React, { useState } from "react";

// import { GoThreeBars, GoX } from "react-icons/go";
//

// const Navbar = () => {
//   const [navbar, setNavbar] = useState(false);

//   const handleNavbar = () => {
//     setNavbar(!navbar);
//   };

//   return (
//     <div className="fixed w-full h-16 shadow-md z-[100] bg-darkess">
//       <div className="flex justify-between items-center w-full h-full px-5">
//         <div className="text-principal text-3xl font-semibold">
//           <Link href="/">{"<Dev Milanez />"}</Link>
//         </div>
//         <div>
//           <ul className="hidden md:flex">
//             <Link href="/">
//               <li className="text-principal hover:text-secondary hover:border-b-2 border-b-secondary active:text-secondary font-medium ml-5 text-lg ">
//                 Principal
//               </li>
//             </Link>
//           </ul>
//           <div onClick={handleNavbar} className="md:hidden text-principal">
//             <GoThreeBars size={25} />
//           </div>
//         </div>
//       </div>

//       <div
//         className={
//           navbar ? "md:hidden fixed right-0 top-0 w-full h-screen bg-black/70" : ""
//         }
//       >
//         <div
//           className={
//             navbar
//               ? "fixed right-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-darkess/70 ease-in duration-500"
//               : "fixed right-[-100%] top-0 ease-in duration-500"
//           }
//         >
//           <div id="navLogo">
//             <div className="flex w-full h-14 px-2 items-center justify-between bg-darkess">
//               <div className="text-principal text-xl md:text-3xl font-semibold">
//                 <Link href="/">{"<Dev Milanez />"}</Link>
//               </div>
//               <div
//                 onClick={handleNavbar}
//                 className="md:hidden text-principal flex items-center"
//               >
//                 <GoX size={25} />
//               </div>
//             </div>
//           </div>
//           <div
//             id="NavBody"
//             className="text-white border-b border-b-secondary p-4"
//           >
//             <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
//           </div>
//           <div className="py-5 flex flex-col items-center">
//             <ul className="text-center">
//               <Link href="/">
//                 <li className="text-principal active:text-secondary font-medium text-lg py-3">
//                   Principal
//                 </li>
//               </Link>
//               <Link href="/">
//                 <li className="text-principal active:text-secondary font-medium text-lg py-3">
//                   Sobre
//                 </li>
//               </Link>
//             </ul>
//             <div id="social medias" className="pt-40">
//               <p className="tracking-widest text-white">Vamos nos conectar!</p>
//               <div className="mt-2">
//                 <ul className="flex flex-row justify-around text-principal">
//                   <Link href="/">
//                     <li>
//                       <IoLogoGithub size={30} />
//                     </li>
//                   </Link>
//                   <Link href="/">
//                     <li>
//                       <IoLogoLinkedin size={30} />
//                     </li>
//                   </Link>
//                   <Link href="/">
//                     <li>
//                       <IoLogoTwitter size={30} />
//                     </li>
//                   </Link>
//                   <Link href="/">
//                     <li>
//                       <IoLogoFacebook size={30} />
//                     </li>
//                   </Link>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
