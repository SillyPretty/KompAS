import cl from 'clsx'
import { PropsWithChildren } from 'react'

import styles from './Button.module.scss'

type TypeSize = 'large' | 'normal' | 'small'
type TypeActive = 'active'

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size: TypeSize
  active?: TypeActive | null
}

const Button = ({
  children,
  size = 'large',
  active = null,
  ...rest
}: PropsWithChildren<IButton>) => {
  return (
    <button {...rest} className={cl(styles[size], styles.button, active && styles.active)}>
      {children}
    </button>
  )
}

export default Button
