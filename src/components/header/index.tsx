import Nav from '../nav'
import styles from './header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.leading}>
        <img className={styles.logo} src="./assets/logo.svg" alt="Lennar Code Challenge" />
        <Nav />
      </div>
      <div className={styles.trailing}>
        <span>Log in</span>
        <button>Start free trial</button>
      </div>
    </header>
  )
}
