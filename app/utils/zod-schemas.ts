import { array, email, number, object, string } from 'zod'

export const zodLoginSchema = object({
  email: email('Email is required'),
  password: string('Password is required').min(8, 'Min. 8 characters'),
})

export const zodProductSchema = object({
  name: string('Name is required'),
  code: string('Code is required'),
  units: array(
    object({
      name: string('Name is required'),
      price: number('Price is required'),
    }),
  ),
})
