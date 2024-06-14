import Landing from '../Pages/Landing/Landing'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import UserLogin from '../Pages/Login/UserLogin'

function UserRoute() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/login' element={<UserLogin />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default UserRoute
