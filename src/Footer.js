import React from "react";
import { FaLaptop, FaTabletAlt, FaMobileAlt } from "react-icons/fa";

const Footer = ({ width }) => {
  return (
    <footer className="bg-slate-400 flex justify-center items-center text-2xl">
      <h2>Footer</h2>
      {width < 768 ? (
        <FaMobileAlt />
      ) : width < 992 ? (
        <FaTabletAlt />
      ) : (
        <FaLaptop />
      )}
    </footer>
  );
};

export default Footer;
