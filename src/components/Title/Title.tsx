import cn from 'clsx'
import { FC, ReactNode } from 'react'

import styles from './Title.module.scss'

type TypePosition = 'left' | 'center' | 'right'

interface ITitle {
  children: ReactNode
  position: TypePosition
}

const Title: FC<ITitle> = ({ children, position }) => {
  return (
    <h2 className={cn(styles.title, styles[position], 'container')}>
      {children}
    </h2>
  )
}

export default Title
