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

export default function Nav() {
  return (
    <nav className={styles.nav}>
      {navItems.map((item) => (
        <NavItem key={item.url} {...item} />
      ))}
    </nav>
  )
}
