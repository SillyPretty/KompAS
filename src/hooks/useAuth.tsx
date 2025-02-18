import Cookies from 'js-cookie'
import { useState } from 'react'

import { TOKEN } from '../constants/constants'

export const isAuth = () => {
  const [isAuth, setIsAuth] = useState(!!Cookies.get(TOKEN))

  return isAuth
}
