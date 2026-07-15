export interface FormError {
  name?: string
  message?: string
}

export interface SchemaValidationResult<T> {
  result?: T
  errors?: FormError[]
}
