import styles from './Partners.module.scss';
import { IconBrandPaypalFilled, IconBrandSpotifyFilled, IconBrandYoutubeFilled, IconBrandGoogleFilled, IconBrandDribbbleFilled } from '@tabler/icons-react';

export default function Partners() {
  return (
    <div>
      <h1 className={styles.title}><span>Our</span> Partners</h1>
      <div className={styles.partners}>
        {
          [IconBrandPaypalFilled, IconBrandSpotifyFilled, IconBrandYoutubeFilled, IconBrandGoogleFilled, IconBrandDribbbleFilled].map((Icon, index) => (
            <Icon key={index} size={48} />
          ))
        }
      </div>
    </div>
  )
}
