import Hero from '../../components/Hero/Hero'
import Navbar from '../../components/Navbar/Navbar'
import About from '../../components/About/About'
import Footer from '../../components/Footer/Footer'
import Explore from '../../components/Explore/Explore'

export default function Landing() {
    return (
        <div>
            <Navbar />
            <Hero />
            <About />
            <Explore />
            <Footer />
        </div>
    )
}
