import Logo from "../assets/images/logo.png";
import { navbarItems } from "../lib/data";
import NavItem from "./NavItem";
const Navbar = () => {
  return (
    <nav className="flex flex-row justify-between items-center bg-black p-4 w-full ">
      <img src={Logo} alt="logo" className="h-12 " />
      <ul className="flex flex-row gap-5">
        {navbarItems.map((item) => (
          <NavItem item={item} />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
