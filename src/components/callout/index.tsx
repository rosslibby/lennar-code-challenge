import styles from './callout.module.css'

export default function Callout() {
  return (
    <div className={styles.callout}>
      <span className={styles.pill}>We&#8217;re hiring</span>
      <span className={styles.text}>Visit our careers page</span>
      <span className={`material-symbols-outlined ${styles.icon}`}>
        chevron_right
      </span>
    </div>
  )
}
