import { useState } from 'react'
import { Button } from '../form/button'
import { ButtonVariant } from '../form/types'
import Nav from '../nav'
import styles from './header.module.css'

export default function Header() {
  const [showNav, setShowNav] = useState<boolean>(false)
  const toggleNav = () => setShowNav((state: boolean) => !state)

  return (
    <header className={styles.header}>
      <div className={styles.leading}>
        <img className={styles.logo} src="./assets/logo.svg" alt="Lennar Code Challenge" />
        <button className={styles.mobileNav} onClick={toggleNav}>
          <img src="./assets/hamburger.svg" />
        </button>
        {showNav && (
          <div className={styles.navBackdrop} onClick={toggleNav} />
        )}
        <Nav toggle={toggleNav} visible={showNav} />
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
