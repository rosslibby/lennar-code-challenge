import { ChangeEvent, useState } from 'react'
import Callout from '../callout'
import { Input, InputGroup } from '../form'
import { Button } from '../form/button'
import { InputType } from '../form/types'
import { useMutation, gql } from '@apollo/client'
import styles from './main.module.css'
import Spinner from '../spinner'

const SIGN_UP = gql`
  mutation createUser($input: CreateUserInput!) {
    createUser(input: $input) {
      email
      name
      username
    }
  }
`

export default function Main() {
  const [email, setEmail] = useState<string>('')
  const [createUser, { data, loading, error }] = useMutation(SIGN_UP, {
    variables: {
      input: {
        email,
        username: email,
        name: 'New User',
      }
    }
  })

  return (
    <main className={styles.main}>
      <div>
        <Callout />
        <div className={styles.heroText}>
          <h1>A better way to <span>ship web apps</span></h1>
          <p>Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui Lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat.</p>
        </div>
        <form className={styles.form} onSubmit={(e: any) => {
          e.preventDefault()
          createUser()
          setEmail('')
        }}>
        <InputGroup>
            <Input
              type={InputType.email}
              onChange={
                (e: ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
              }
              placeholder="Enter your email"
              name="email"
              value={email}
            />
            <Button
              disabled={loading || !email.length}
              onClick={() => null}
              label={loading ? <Spinner /> : 'Start free trial'}
            />
          </InputGroup>
          {!data && (
            <p>Start your free 14-day trial, no credit card necessary. By providing your email, you agree to our <a href="/terms-of-service">terms of service</a>.</p>
          )}
          {data && (
            <p className={styles.thankYou}>Thank you for signing up. Please check your email for details.</p>
          )}
        </form>
      </div>
      <div className={styles.graphic}>
        <img src="./assets/illustration.svg" alt="Epic Illustration" />
      </div>
    </main>
  )
}
