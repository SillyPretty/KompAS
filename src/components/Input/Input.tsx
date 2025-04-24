import React from 'react'

import styles from './Input.module.scss'

interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: string | null
}

const Input = ({ icon = null, ...rest }: IInput) => {
  return (
    <div className={styles.input__wrapper}>
      {!!icon && (
        <img src={icon} alt='input_img' className={styles.input__icon} />
      )}
      <input {...rest} className={styles.input} />
    </div>
  )
}

export default Input
