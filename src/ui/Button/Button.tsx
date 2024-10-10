import cl from 'clsx'
import { PropsWithChildren } from 'react'

import styles from './Button.module.scss'

type TypeSize = 'large' | 'normal'

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size: TypeSize
}

const Button = ({
  children,
  size = 'large',
  ...rest
}: PropsWithChildren<IButton>) => {
  return (
    <button  {...rest} className={cl(styles[size], styles.button)}>
      {children}
    </button>
  )
}

export default Button
