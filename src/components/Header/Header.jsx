import React from "react";
import { FaReddit } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-red-500 text-white p-4">
      <FaReddit className="text-red-500 w-40 mx-auto" />
    </header>
  );
};

export default Header;
