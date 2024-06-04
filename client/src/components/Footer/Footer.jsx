import { Logo } from '../../style'
import { NavLink } from 'react-router-dom'
import links from '../Navbar/links'
import styles from './Footer.module.scss'

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <footer>
        <Logo>Aurora Grande</Logo>
        <div className={styles.footerLinks}>
          <section>
            <h3>Navigation</h3>
            {links.map(link => (
              <li key={link.path}>
                <NavLink to={link.path} >{link.name}</NavLink>
              </li>
            ))}
          </section>
          <section>
            <h3>Other</h3>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>FAQ</li>
            </ul>
          </section>
          <section>
            <h3>Get in touch</h3>
            <ul>
              <li>(+94) 11 123 1234</li>
              <li>auroragrande@gmail.com</li>
              <li>No. 12/3, Street Road, City</li>
            </ul>
          </section>
        </div>
      </footer>
      <hr />
      <small>Designed & Developed By Dushan Senadheera</small>
    </div>
  )
}
