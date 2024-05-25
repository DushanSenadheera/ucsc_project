import styles from './Partners.module.scss';
import { IconBrandPaypalFilled, IconBrandSpotifyFilled, IconBrandYoutubeFilled, IconBrandGoogleFilled, IconBrandDribbbleFilled } from '@tabler/icons-react';

export default function Partners() {
  return (
    <div>
        <h1 className={styles.title}><span>Our</span> Partners</h1>
        <div className={styles.partners}>
            <IconBrandGoogleFilled size={'3rem'} color='grey'/>
            <IconBrandYoutubeFilled size={'3rem'} color='grey' />
            <IconBrandSpotifyFilled size={'3rem'} color='grey' />
            <IconBrandPaypalFilled size={'3rem'} color='grey' />
            <IconBrandDribbbleFilled size={'3rem'} color='grey' />
        </div>
    </div>
  )
}
