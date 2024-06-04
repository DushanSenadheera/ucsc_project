import './App.scss'
import Landing from './Pages/Landing/Landing'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserLogin from './Pages/Login/UserLogin'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/login' element={<UserLogin />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
