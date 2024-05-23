import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.scss'
import { Button, Logo } from '../../style'

const links = [
  { path: '/', name: 'Home' },
  { path: '/about', name: 'About' },
  { path: '/explore', name: 'Explore' },
  { path: '/contact', name: 'Contact' },
]

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Logo>Aurora Grande</Logo>
      <ul className={styles.navlinks} >
        {links.map(link => (
          <li key={link.path}>
            <NavLink to={link.path} >{link.name}</NavLink>
          </li>
        ))}
        <Button variant="contained" >Book Now</Button>
      </ul>
    </nav>
  )
}