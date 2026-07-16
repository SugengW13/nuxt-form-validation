export type FormError = Map<string, string>

export interface FormSubmitEvent<T> {
  data?: T
  errors?: FormError
}
