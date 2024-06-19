import styles from './Dashboard.module.scss'
import { NavLink, Outlet } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div className={styles.dashboardLayout}>
      <nav className={styles.dashboardNav}>
        <h3>Admin Dashboard</h3>
        <ul>
          <NavLink to={'/admin/dashboard'}>Username</NavLink>
          <NavLink to={'/admin/dashboard'}>ICON</NavLink>
        </ul>
      </nav>
      <div className={styles.dashboardContent}>
        <ul className={styles.dashboardNavlinks}>
          <NavLink to={'/admin/dashboard'}>Overview</NavLink>
          <NavLink to={'/admin/dashboard'}>Guest Log</NavLink>
          <NavLink to={'/admin/dashboard'}>Room Management</NavLink>
          <NavLink to={'/admin/dashboard'}>Settings</NavLink>
          <NavLink className={styles.logout} to={'/admin/dashboard'}>Logout</NavLink>
        </ul>
        <div className={styles.dashboardContent}>
          <Outlet />
        </div>
      </div>
    </div>
  )
}