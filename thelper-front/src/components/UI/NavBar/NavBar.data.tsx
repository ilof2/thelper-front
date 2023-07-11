import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import classes from './NavBar.module.css';

const NavBarData = [
    {
        title: "Home",
        path: "/home",
        icon: <AiIcons.AiFillHome/>,
        cName: classes.item
    },
    {
        title: "Documents",
        path: "/documents",
        icon: <FaIcons.FaFile/>,
        cName: classes.item
    },
    {
        title: "Sign In",
        path: "/login",
        icon: <AiIcons.AiFillLock/>,
        cName: classes.item
    }
]

export default NavBarData;