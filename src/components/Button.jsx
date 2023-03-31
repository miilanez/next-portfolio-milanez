import React from "react";

const Button = ({ title, icon, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <button className="w-40 mt-3 flex flex-row justify-center items-center rounded-md font-medium text-lg text-white hover:text-slate-900 cursor-pointer p-2 bg-principal bg-opacity-10 hover:bg-opacity-100">
        <span className="mr-1 text-xl">{icon}</span>
        <span className="ml-1">{title}</span>
      </button>
    </a>
  );
};

export default Button;
