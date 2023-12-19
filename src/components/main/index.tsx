import styles from './main.module.css'

export default function Main() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <div className={styles.heroCallout}>
          <span className={styles.pill}>We're hiring</span>
          <span>Visit our careers page</span>
          <span>&rcar;</span>
        </div>
        <div className={styles.heroText}>
          <h1>A better way to <span>ship web apps</span></h1>
          <p>Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui Lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat.</p>
        </div>
        <form>
          <input type="email" placeholder="Enter your email" />
          <button>Start free trial</button>
          <p>Start your free 14-day trial, no credit card necessary. By providing your email, you agree to our <a href="/terms-of-service">terms of service</a>.</p>
        </form>
      </div>
    </main>
  )
}
