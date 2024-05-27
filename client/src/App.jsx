import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import './App.scss'
import About from './components/About/About'
import Footer from './components/Footer/Footer'
import Explore from './components/Explore/Explore'

function App() {

  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Explore/>
      <Footer/>
    </div>
  )
}

export default App
