import styles from './Hero.module.scss';
import bgvid from '../../assets/bgvid.mp4';

export default function Hero() {
    return (
        <div className={styles.hero}>
            <video autoPlay loop muted>
                <source src={bgvid} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className={styles.hero_content}>
                <h1>Discover Your Sanctuary of Sophistication</h1>
                <p>Step into a world where modern elegance meets timeless charm, offering an unforgettable stay in the heart of luxury</p>
                <button className='primary-btn'>Explore</button>
            </div>
        </div>
    )
}