import styles from './Dashboard.module.scss'
import { NavLink, Outlet } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div className={styles.dashboardLayout}>
      <ul className={styles.dashboardNav}>
        <NavLink to={'/admin/dashboard'}>asdsad</NavLink>
        <NavLink to={'/admin/dashboard'}>asdsad</NavLink>
        <NavLink to={'/admin/dashboard'}>asdsad</NavLink>
      </ul>
      <div className={styles.dashboardContent}>
        <Outlet />
      </div>
    </div>
  )
}