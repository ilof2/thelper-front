import { useState, MouseEvent } from 'react'
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import classes from './NavBar.module.css'
import navBarData from './NavBar.data.js';
import NavBarItem from './NavBarItem.js';

interface Props {
}

const NavBar = ({}: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className={classes.navbar}>
        <span onClick={() => {setIsOpen(!isOpen)}} className={classes.sidebarToggle}><FaBars/></span>
      </div>
      <nav className={`${classes.navbarItems} ${!isOpen ? classes.closed: ''}`}>
          <h2>LOGO</h2>
          <button onClick={() => {setIsOpen(!isOpen)}} className={classes.sidebarClose}><AiOutlineClose/></button>
          {navBarData.map((item, index) => {
            return (<NavBarItem key={index} item={item} onClick={() => {
              setIsOpen(false)
            }}/>)
          })}
      </nav>
    </>
  )
}

export default NavBar;