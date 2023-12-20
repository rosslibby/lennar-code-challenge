import { Button } from '../form/button'
import { ButtonVariant } from '../form/types'
import NavItem from './item'
import styles from './nav.module.css'

const navItems = [
  {
    name: 'Product',
    url: '/product',
  },
  {
    name: 'Features',
    url: '/features',
  },
  {
    name: 'Marketplace',
    url: '/marketplace',
  },
  {
    name: 'Company',
    url: '/company',
  },
]

export default function Nav({ toggle, visible }: {
  toggle: () => void
  visible: boolean
}) {
  const navClassNames = [styles.nav, ...(
    visible
      ? [styles.visible]
      : []
    )
  ].join(' ')

  return (
    <nav className={navClassNames}>
      <div className={styles.navHeader}>
        <img src="./assets/logo.svg" />
        <button className={styles.closeNav} onClick={toggle}>
          <img src="./assets/close.svg" />
        </button>
      </div>
      {navItems.map((item) => (
        <NavItem key={item.url} {...item} />
      ))}
      <div className={styles.navFooter}>
        <Button
          label="Start free trial"
          onClick={() => null}
          variant={ButtonVariant.primary}
        />
        <span>Existing customer? <a href="/login">Login</a></span>
      </div>
    </nav>
  )
}
