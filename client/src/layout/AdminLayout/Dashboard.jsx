import styles from './Dashboard.module.scss'
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { TextField } from "../../style";

export default function Dashboard() {

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('adminToken'); // Adjust 'userToken' to whatever key you're using
    navigate('/'); // Redirect to homepage or login page after logout
  };

  return (
    <div className={styles.dashboardLayout}>
      <nav className={styles.dashboardNav}>
        <h3>Admin Dashboard</h3>
        <ul>
          <TextField type="search" variant="outlined" size="small" placeholder="Search" />
          <small>Admin</small>
        </ul>
      </nav>
      <div className={styles.dashboardContent}>
        <ul className={styles.dashboardNavlinks}>
          <NavLink to={'/admin/dashboard'}>Overview</NavLink>
          <NavLink to={'guest'}>Guest Log</NavLink>
          <NavLink to={'room'}>Room Management</NavLink>
          <NavLink to={'settings'}>Settings</NavLink>
          <NavLink className={styles.logout} to={'/'} onClick={handleLogout}>Logout</NavLink>
        </ul>
        <div className={styles.dashboardContent}>
          <Outlet />
        </div>
      </div>
    </div>
  )
}