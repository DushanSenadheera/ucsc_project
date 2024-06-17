import { Route, Routes } from 'react-router-dom'
import Dashboard from "../layout/AdminLayout/Dashboard";
import AdminLogin from '../Pages/Admin/AdminLogin';
import AdminHome from '../Pages/AdminHome/AdminHome';

export default function AdminRoute() {
  return (
    <div>
      <Routes>
      <Route path='/' element={<AdminLogin />} />
        <Route path="/dashboard" element={<Dashboard />}> 
          <Route index element={<AdminHome />} />
          {/* <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </div>
  )
}
