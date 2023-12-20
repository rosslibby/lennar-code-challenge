import { Button } from '../form/button'
import { ButtonVariant } from '../form/types'
import Nav from '../nav'
import styles from './header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.leading}>
        <img className={styles.logo} src="./assets/logo.svg" alt="Lennar Code Challenge" />
        <span className={styles.mobileNav}>
          <img src="./assets/hamburger.svg" />
        </span>
        <Nav />
      </div>
      <div className={styles.trailing}>
        <Button
          label="Log in"
          onClick={() => null}
          variant={ButtonVariant.minimal}
        />
        <Button
          label="Start free trial"
          onClick={() => null}
          variant={ButtonVariant.secondary}
        />
      </div>
    </header>
  )
}
