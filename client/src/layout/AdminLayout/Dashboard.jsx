import styles from './Dashboard.module.scss'
import { NavLink, Outlet } from 'react-router-dom';
import { TextField } from "../../style";

export default function Dashboard() {
  return (
    <div className={styles.dashboardLayout}>
      <nav className={styles.dashboardNav}>
        <h3>Admin Dashboard</h3>
        <ul>
          <TextField type="search" variant="outlined" size="small" placeholder="Search" />
          <NavLink to={'/admin/dashboard'}>ICON</NavLink>
        </ul>
      </nav>
      <div className={styles.dashboardContent}>
        <ul className={styles.dashboardNavlinks}>
          <NavLink to={'/admin/dashboard'}>Overview</NavLink>
          <NavLink to={'guest'}>Guest Log</NavLink>
          <NavLink to={'manage'}>Room Management</NavLink>
          <NavLink to={'settings'}>Settings</NavLink>
          <NavLink className={styles.logout} to={'/admin/dashboard'}>Logout</NavLink>
        </ul>
        <div className={styles.dashboardContent}>
          <Outlet />
        </div>
      </div>
    </div>
  )
}