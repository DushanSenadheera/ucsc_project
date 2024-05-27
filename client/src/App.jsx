import './App.scss'
import Landing from './Pages/Landing/Landing'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserLogin from './Pages/Login/UserLogin'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/login' element={<UserLogin />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
