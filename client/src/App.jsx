import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import './App.scss'
import About from './components/About/About'

function App() {

  return (
   <div>
      <Navbar/>
      <Hero />
      <About/>
   </div>
  )
}

export default App
