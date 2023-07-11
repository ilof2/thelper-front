import { ReactNode, MouseEvent} from 'react'
import { Link } from 'react-router-dom';

interface Props {
    item: {
        title: string,
        path: string,
        icon: ReactNode,
        cName: string
    }
    onClick: (e: MouseEvent) => void
}

const NavBarItem = ({ item, onClick }: Props) => {
  return (
    <Link to={item.path} className={item.cName} onClick={onClick}>{item.icon} <span>{item.title}</span></Link>
  )
}

export default NavBarItem;