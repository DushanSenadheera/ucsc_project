import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import './App.scss'
import About from './components/About/About'
import ImageGrid from './components/Explore/ImageGrid'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <ImageGrid />
      <Footer/>
    </div>
  )
}

export default App
