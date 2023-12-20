import { ReactNode } from 'react'
import styles from './form.module.css'
import { ButtonVariant } from './types'

export const Button = ({ disabled, label, onClick, variant }: {
  disabled?: boolean
  label: ReactNode
  onClick: () => void
  variant?: ButtonVariant
}) => {
  const classNames = [
    styles.button,
    ...(
      variant
        ? [styles[`button--${variant}`]]
        : [styles['button--primary']]
      ),
  ].join(' ')

  return (
    <button
      className={classNames}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  )
}
