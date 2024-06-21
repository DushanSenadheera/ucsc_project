import { Route, Routes } from 'react-router-dom'
import Dashboard from "../layout/AdminLayout/Dashboard";
import AdminLogin from '../Pages/Admin/AdminLogin';
import AdminHome from '../Pages/AdminHome/AdminHome';
import Guest from '../Pages/Guest/Guest';
import Room from '../Pages/Room/Room';
import Settings from '../Pages/Settings/Settings';

export default function AdminRoute() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<AdminLogin />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<AdminHome />} />
          <Route path="guest" element={<Guest />} />
          <Route path="room" element={<Room />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </div>
  )
}
