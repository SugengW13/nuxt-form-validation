import { email, object, string } from 'zod'

export const zodLoginSchema = object({
  email: email('Must be a valid email'),
  password: string('Password is required').min(8, 'Min. 8 characters'),
})
