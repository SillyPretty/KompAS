import cn from 'clsx'
import { FC, HTMLAttributes, ReactNode } from 'react'

import styles from './Title.module.scss'

type TypePosition = 'left' | 'center' | 'right'

interface ITitle extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode
  position?: TypePosition
  stylesheet?: string
}

const Title: FC<ITitle> = ({ children, position = 'left ', stylesheet }) => {
  return (
    <h2 className={cn(styles.title, styles[position], 'container', stylesheet)}>
      {children}
    </h2>
  )
}

export default Title
