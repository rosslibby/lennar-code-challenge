import Header from '../components/header'
import styles from './wrapper.module.css'

export default function Main() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Main />
    </div>
  )
}
