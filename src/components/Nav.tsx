import React, { useState } from "react";
import { BiHomeAlt, BiInfoCircle, BiMenu, BiMoviePlay } from "react-icons/bi";
import NavItem from "./NavItem";

const defaultIconSize = "1.875rem";
const items = [
  { label: "Home", icon: <BiHomeAlt size={defaultIconSize} />, active: true },
  { label: "Movies", icon: <BiMoviePlay size={defaultIconSize} /> },
  { label: "About", icon: <BiInfoCircle size={defaultIconSize} /> },
];

const Nav = () => {
  const [isMenuVisibile, setIsMenuVisibile] = useState(false);

  const handleClick = () => setIsMenuVisibile(!isMenuVisibile);
  const renderNavItems = () => {
    return items.map((item, index) => <NavItem key={index} item={item} />);
  };

  return (
    <nav className="col-span-1 bg-cyan-200">
      <div className="mx-4 flex justify-between items-center md:block">
        <h4 className="text-right text-primary uppercase font-bold py-4 border-b border-primary">
          NewMovie.net
        </h4>
        <BiMenu
          className="cursor-pointer md:hidden"
          size={defaultIconSize}
          onClick={handleClick}
        />
      </div>
      <ul className={`mx-4 my-2 ${isMenuVisibile ? "" : "hidden"}  md:block`}>
        {renderNavItems()}
      </ul>
    </nav>
  );
};

export default Nav;
