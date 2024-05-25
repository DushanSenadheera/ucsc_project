import { IconClock24, IconDog, IconYoga } from '@tabler/icons-react';
import styles from './AboutCard.module.scss';

const details = [
    {
        title: "24/7 Room Service",
        image: <IconClock24 size={'4rem'} />,
        text: "Savor delicious meals and snacks any time of the day or night with our convenient 24/7 room service, delivering directly to your room"
    },
    {
        title: "Spa and Wellness",
        image: <IconYoga size={'4rem'} />,
        text: "Rejuvenate your mind, body, and soul at our state-of-the-art spa, featuring a range of treatments and therapies designed to provide ultimate relaxation"
    },
    {
        title: "Pet-Friendly Amenities",
        image: <IconDog size={'4rem'} />,
        text: "Enjoy a worry-free stay with your furry friends, as we offer special amenities and services tailored for your pets"
    },
]

export default function AboutCard() {
    return (
        <div className={styles.aboutCards}>
            {
                details.map((detail, index) => {
                    return (
                        <div className={styles.aboutCard} key={index}>
                            {detail.image}
                            <h3>{detail.title}</h3>
                            <small>{detail.text}</small>
                        </div>
                    )
                })
            }
        </div>
    )
}
