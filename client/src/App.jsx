import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserRoute from './routes/UserRoute';
import AdminRoute from './routes/AdminRoute';
import './App.scss';
import AdminLogin from './Pages/Admin/AdminLogin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin/*" element={<AdminLogin />} />
        <Route path="/*" element={<UserRoute />} />
      </Routes>
    </Router>
  )
}

export default App;