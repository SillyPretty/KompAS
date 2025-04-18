import Cookies from 'js-cookie'
import { useState } from 'react'

import { TOKEN } from '../app.constants'

export const isAuth = () => {
  const [isAuth] = useState(!!Cookies.get(TOKEN))

  return isAuth
}
