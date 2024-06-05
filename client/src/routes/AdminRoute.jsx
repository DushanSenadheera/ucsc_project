import AdminLogin from "../Pages/Admin/AdminLogin";
import { Route, Routes } from 'react-router-dom'

export default function AdminRoute() {
  return (
    <div>
      <Routes>
        <Route path='/admin' element={<AdminLogin />} />
      </Routes>
    </div>
  )
}
