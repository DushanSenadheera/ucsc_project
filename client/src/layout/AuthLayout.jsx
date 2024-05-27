import PropTypes from 'prop-types';
import styles from './AuthLayout.module.scss'

export default function AuthLayout({children}) {
  return (
    <div>
        <div className="authImg">

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
