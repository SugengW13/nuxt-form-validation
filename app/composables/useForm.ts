import type { UseEventBusReturn } from '@vueuse/core'
import type { InjectionKey } from 'vue'
import type { FormError } from '~/types/form'

export const formBusInjectionKey: InjectionKey<
  UseEventBusReturn<unknown, string>
> = Symbol('form-blur-event')

export const formErrorsInjectionKey: InjectionKey<
  Readonly<Ref<undefined | FormError>>
> = Symbol('form-errors')
