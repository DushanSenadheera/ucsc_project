import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserRoute from './routes/UserRoute';
import './App.scss';
import AdminRoute from './routes/AdminRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin/*" element={<AdminRoute />} />
        <Route path="/*" element={<UserRoute />} />
      </Routes>
    </Router>
  )
}

export default App;