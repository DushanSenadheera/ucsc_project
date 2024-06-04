import { useRef, useEffect, useCallback } from 'react'
import links  from './links'
import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.scss'
import { Button, Logo } from '../../style'

export default function Navbar() {

  const nav = useRef(null);

  const onScroll = useCallback(() => {
    if (window.scrollY > 50) {
      nav.current.classList.add(styles.scrolled);
    } else {
      nav.current.classList.remove(styles.scrolled);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [onScroll]);

  return (
    <nav ref={nav} className={styles.navbar}>
      <Logo>Aurora Grande</Logo>
      <ul className={styles.navlinks} >
        {links.map(link => (
          <li key={link.path}>
            <NavLink to={link.path} >{link.name}</NavLink>
          </li>
        ))}
        <NavLink to={'/login'}><Button variant="contained" >Book Now</Button></NavLink>
      </ul>
    </nav>
  )
}