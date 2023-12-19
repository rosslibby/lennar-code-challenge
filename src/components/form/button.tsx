import styles from './form.module.css'
import { ButtonVariant } from './types'

export const Button = ({ label, onClick, variant }: {
  label: string
  onClick: () => void
  variant?: ButtonVariant
}) => {
  const classNames = [
    styles.button,
    ...(
      variant
        ? [styles[`button-${variant}`]]
        : [styles['button--primary']]
      ),
  ].join(' ')

  return (
    <button className={classNames} onClick={onClick}>
      {label}
    </button>
  )
}
