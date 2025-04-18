export interface FormDataRegister {
  name: string
  email: string
  phone: string
  city: string
  password: string
}
export interface FormDataAuth {
  email: string
  password: string
}

export interface ResponseDataAuth {
  name: string
  email: string
  phone: string
  city: string
  password: string
}

export interface AuthError {
  message: string
}
