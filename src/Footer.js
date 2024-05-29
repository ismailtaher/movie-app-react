import React from "react";
import { FaLaptop, FaTabletAlt, FaMobileAlt } from "react-icons/fa";

const Footer = ({ width }) => {
  return (
    <footer className="bg-[#1A936F] text-black px-2 flex justify-between items-center text-2xl">
      <h2>Duck Movie Database &copy;</h2>
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
