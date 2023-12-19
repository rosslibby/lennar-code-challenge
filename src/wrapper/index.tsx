import Header from '../components/header'
import Main from '../components/main'
import styles from './wrapper.module.css'

export default function Wrapper() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Main />
    </div>
  )
}
