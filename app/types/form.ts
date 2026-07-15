export interface FormError {
  name?: string
  message?: string
}

export interface FormSubmitEvent<T> {
  data?: T
  errors?: FormError[]
}
