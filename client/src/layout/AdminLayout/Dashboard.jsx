import styles from './Dashboard.module.scss'
import { Outlet } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div className={styles.dashboardLayout}>
        <div className={styles.dashboardNav} >navlinks</div>
        <div className={styles.dashboardContent}>
            <Outlet />
        </div>
    </div>
  )
}