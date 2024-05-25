import { NavLink } from 'react-router-dom'
import { useRef, useEffect } from 'react'
import styles from './Navbar.module.scss'
import { Button, Logo } from '../../style'

const links = [
  { path: '/', name: 'Home' },
  { path: '/about', name: 'About' },
  { path: '/explore', name: 'Explore' },
  { path: '/contact', name: 'Contact' },
]

export default function Navbar() {

  const nav = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        nav.current.classList.add(styles.scrolled);
      } else {
        nav.current.classList.remove(styles.scrolled);
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav ref={nav} className={styles.navbar}>
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