import React from "react";
import { Link } from "react-router-dom";

type NavItemProps = {
  item: {
    path: string;
    name: string;
  };
};

const NavItem = ({ item }: NavItemProps) => {
  return (
    <Link to={item.path} className="text-white text-lg hover:underline">
      <li>{item.name}</li>
    </Link>
  );
};

export default NavItem;
