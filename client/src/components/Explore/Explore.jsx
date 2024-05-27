import styles from './Explore.module.scss';
import ExploreAccordion from './ExploreAccordion';
import QuiltedImageList from './ImageGrid';

export default function Explore() {
  return (
    <div>
      <h1 className='sub-heading'>Explore <span>Us</span></h1>
      <div className={styles.exploreSection}>
        <QuiltedImageList />
        <ExploreAccordion />
      </div>
    </div>
  )
}
