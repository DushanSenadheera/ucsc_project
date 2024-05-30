import PropTypes from 'prop-types';
import styles from './AuthLayout.module.scss'
import img from '../assets/Villas-and-Suites-840x870-1.jpg'

export default function AuthLayout({children}) {
  return (
    <div className={styles.auth}>
        <div className={styles.authImg}>
          <img src={img} alt="" />
        </div>
        <div className="authForm">
            {children}
        </div>
    </div>
  )
}

AuthLayout.propTypes = {
  children: PropTypes.node.isRequired
};
