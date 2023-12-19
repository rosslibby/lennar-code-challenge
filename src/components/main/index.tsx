import Callout from '../callout'
import { Input, InputGroup } from '../form'
import { Button } from '../form/button'
import { InputType } from '../form/types'
import styles from './main.module.css'

export default function Main() {
  return (
    <main className={styles.main}>
      <div>
        <Callout />
        <div className={styles.heroText}>
          <h1>A better way to <span>ship web apps</span></h1>
          <p>Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui Lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat.</p>
        </div>
        <form className={styles.form}>
          <InputGroup>
            <Input
              type={InputType.email}
              onChange={() => null}
              placeholder="Enter your email"
              name="email"
            />
            <Button onClick={() => null} label="Start free trial" />
          </InputGroup>
          <p>Start your free 14-day trial, no credit card necessary. By providing your email, you agree to our <a href="/terms-of-service">terms of service</a>.</p>
        </form>
      </div>
    </main>
  )
}
