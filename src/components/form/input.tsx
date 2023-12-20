import { ChangeEvent, ReactNode } from 'react'
import { InputType } from './types'
import styles from './form.module.css'

export const Input = ({ name, onChange, placeholder, type, value }: {
  name: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  placeholder: string
  type: InputType
  value?: string
}) => {
  return (
    <input
      className={styles.textInput}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      value={value}
    />
  )
}

export const InputGroup = ({ children }: {
  children: ReactNode
}) => {
  return (
    <div className={styles.inputGroup}>
      {children}
    </div>
  )
}
