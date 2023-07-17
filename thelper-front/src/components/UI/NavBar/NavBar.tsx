import { useState } from "react";
import { FaBars, FaIcons } from "react-icons/fa";
import navBarData from "./NavBar.data.js";
import NavBarItem from "./NavBarItem.js";
import classNames from "classnames";

const NavBar = () => {
  const [isHidden, setIsHidden] = useState(true);

  const hide = () => {
    let newWidth: string = "12";
    if (isHidden) {
      newWidth = getComputedStyle(document.documentElement).getPropertyValue(
        "--navbar-open-width"
      );
    } else {
      newWidth = getComputedStyle(document.documentElement).getPropertyValue(
        "--navbar-closed-width"
      );
    }
    console.log(newWidth);
    let result = document.documentElement.style.setProperty(
      "--navbar-width",
      newWidth
    );
    console.log(result);
    setIsHidden(!isHidden);
  };

  const menuButton = {
    title: "",
    path: "#",
    icon: <FaBars />,
  };
  return (
    <>
      <div
        className={classNames(
          "navbar",
          "flex-col",
          "fixed",
          "h-screen",
          "bg-gray-400",
          "items-center",
          "pt-5",
          "transition-all",
          "ease-in",
          "duration-75",
          "overflow-hidden"
        )}
      >
        <NavBarItem item={menuButton} onClick={hide}></NavBarItem>
        {navBarData.map((item, index) => {
          return (
            <NavBarItem
              key={index + 1}
              item={item}
              onClick={() => {}}
            ></NavBarItem>
          );
        })}
      </div>
    </>
  );
};

export default NavBar;
