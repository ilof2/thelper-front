import { MouseEvent } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

interface NavBarItemsProps {
  item: {
    title: string;
    path: string;
    icon: JSX.Element;
  };
  onClick: (e: MouseEvent) => void;
}

const NavBarItem = ({ item, onClick }: NavBarItemsProps) => {
  return (
    <Link
      to={item.path}
      className={classNames(
        "flex",
        "w-full",
        "py-10",
        "text-3xl",
        "text-left",
        "items-center",
        "hover:bg-slate-400",
        "transition-all",
        "ease-in"
      )}
      onClick={onClick}
    >
      <div className="flex whitespace-nowrap pl-2">
        {item.icon}
        <span className={classNames("pl-3")}>{item.title}</span>
      </div>
    </Link>
  );
};

export default NavBarItem;
