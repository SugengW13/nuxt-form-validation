import { object, string } from 'yup'

export const yupLoginSchema = object({
  email: string().email('Must be a valid email').required('Email is required'),
  password: string()
    .required('Password is required')
    .min(8, 'Min. 8 characters'),
})
