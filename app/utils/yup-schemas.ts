import { array, number, object, string } from 'yup'

export const yupLoginSchema = object({
  email: string().email('Must be a valid email').required('Email is required'),
  password: string()
    .required('Password is required')
    .min(8, 'Min. 8 characters'),
})

export const yupProductSchema = object({
  name: string().required('Name is required'),
  code: string().required('Code is required'),
  units: array().of(
    object({
      name: string().required('Unit Name is required'),
      price: number()
        .typeError('Must be a valid number')
        .required('Unit Price is required'),
    }),
  ),
})
