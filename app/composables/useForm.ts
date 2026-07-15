import type { InjectionKey } from 'vue'
import type { FormError } from '~/types/form'

export const formErrorsInjectionKey: InjectionKey<
  Readonly<Ref<undefined | FormError[]>>
> = Symbol('form-errors')
