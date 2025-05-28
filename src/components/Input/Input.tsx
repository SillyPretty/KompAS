import clsx from 'clsx'
import React, { useEffect, useState } from 'react'

import styles from './Input.module.scss'

interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: string | null
  error?: string
  mask?: (value: string) => string
}

const Input = ({
  icon = null,
  error,
  mask,
  value,
  onChange,
  ...rest
}: IInput) => {
  const [displayValue, setDisplayValue] = useState(value || '')

  useEffect(() => {
    if (mask && typeof value === 'string') {
      setDisplayValue(mask(value))
    } else {
      setDisplayValue(value || '')
    }
  }, [value, mask])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = e.target.value
    if (mask) {
      newValue = newValue.replace(/\D/g, '')
      setDisplayValue(mask(newValue))
    } else {
      setDisplayValue(newValue)
    }

    if (onChange) {
      e.target.value = newValue
      onChange(e)
    }
  }

  return (
    <>
      {error && <label>{error}</label>}
      <div className={clsx(styles.input__wrapper, error && styles.error)}>
        {!!icon && (
          <img src={icon} alt='input_img' className={styles.input__icon} />
        )}
        <input
          {...rest}
          className={styles.input}
          value={displayValue}
          onChange={handleChange}
        />
      </div>
    </>
  )
}

export default Input
