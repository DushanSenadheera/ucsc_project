import { Route, Routes } from 'react-router-dom'
import Dashboard from "../layout/AdminLayout/Dashboard";

export default function AdminRoute() {
  return (
    <div>
      <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  )
}
