import styles from './nav-item.module.css'

export default function NavItem({ name, url }: {
  name: string
  url: string
}) {
  return (
    <a className={styles.navItem} href={url}>{name}</a>
  )
}
