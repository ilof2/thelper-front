import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import classes from "./NavBar.module.css";

const NavBarData = [
  {
    title: "Home",
    path: "/home",
    icon: <AiIcons.AiFillHome />,
  },
  {
    title: "Documents",
    path: "/documents",
    icon: <FaIcons.FaFile />,
  },
  {
    title: "Sign In",
    path: "/login",
    icon: <AiIcons.AiFillLock />,
  },
];

export default NavBarData;
