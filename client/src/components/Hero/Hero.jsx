import styles from './Hero.module.scss';
import bgvid from '../../assets/bgvid.mp4';
import { Button } from '../../style';

export default function Hero() {
    return (
        <div className={styles.hero}>
            <video autoPlay loop muted>
                <source src={bgvid} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className={styles.hero_content}>
                <h1>Discover Your Sanctuary of Sophistication</h1>
                <Button variant="outline">Contact Us</Button>
            </div>
            <div className={styles.scrollIndicator}>&#8595;</div>
        </div>
    )
}
