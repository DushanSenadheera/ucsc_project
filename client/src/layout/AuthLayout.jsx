import PropTypes from 'prop-types';
import styles from './AuthLayout.module.scss'
import img from '../assets/Advance-Purchase-Savings-at-Cape-Weligama-800x685-1.jpg'

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
