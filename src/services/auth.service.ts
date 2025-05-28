import Cookies from 'js-cookie'

import { $axios } from '../api'
import { TOKEN } from '../app.constants'
import { UserType } from '../app.types'

interface AuthResponse {
  id: string
  name: string
  email: string
  role: UserType
  message: string
}

export const AuthService = async (
  email: string,
  password: string
): Promise<AuthResponse> => {
  try {
    const { data } = await $axios.post(`/auth/login`, {
      email,
      password
    })
    if (data.token) Cookies.set(TOKEN, data.token, { expires: 30 })
    window.location.reload()
    return data
  } catch (error: any) {
    throw new Error(error)
  }
}

export const RegisterService = async (
  name: string,
  phone: string,
  city: string,
  email: string,
  password: string
): Promise<AuthResponse> => {
  try {
    const { data } = await $axios.post(`/auth/register`, {
      name,
      phone,
      city,
      email,
      password
    })
    if (data.token) Cookies.set(TOKEN, data.token, { expires: 30 })
    window.location.reload()
    return data
  } catch (error: any) {
    throw new Error(error)
  }
}
