import styles from './About.module.scss';
import aboutImg from '../../assets/Advance-Purchase-Savings-at-Cape-Weligama-800x685-1.jpg';

export default function About() {
    return (

        <div className={styles.aboutSection}>
            <div className={styles.aboutImg}>
                <img src={aboutImg} alt="about" />
            </div>
            <div className={styles.aboutContent}>
                <h1 className='sub-heading'><span>Our</span> Story</h1>
                <p>
                    We are dedicated to providing an unparalleled experience that goes beyond the ordinary. Our meticulously designed rooms and suites offer a perfect retreat, adorned with modern amenities and plush furnishings to ensure your utmost comfort. Each space is thoughtfully crafted to create a serene and inviting atmosphere, making you feel at home from the moment you step through our doors.
                    <br />
                    Our commitment to excellence extends to every aspect of your stay. From our world-class dining options that tantalize your taste buds with gourmet delights to our state-of-the-art facilities designed for relaxation and rejuvenation, we strive to exceed your expectations. Whether you are here for business or leisure, our dedicated team is here to cater to your every need, ensuring a seamless and memorable experience.
                    <br />
                    Discover a world of refined elegance and exceptional service at [Hotel Name]. We invite you to unwind, indulge, and create lasting memories in the luxurious surroundings of our hotel. Join us and experience the art of hospitality redefined.
                </p>
            </div>
        </div>

    )
}
