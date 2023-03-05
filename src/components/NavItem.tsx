import React from "react";

interface ItemProps {
  item: { label: string; icon: JSX.Element; active?: boolean };
}
const NavItem = ({ item }: ItemProps) => {
  const { label, icon, active } = item;
  return (
    <div>
      <li
        className={`flex items-center justify-end cursor-pointer p-2 ${
          active ? "bg-primary text-white" : ""
        }`}
      >
        <h3 className="mr-2">{label}</h3>
        {icon}
      </li>
    </div>
  );
};

export default NavItem;
