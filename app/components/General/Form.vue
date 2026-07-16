<script setup lang="ts">
import type { StandardSchemaV1 } from '@standard-schema/spec'
import { useEventBus } from '@vueuse/core'
import type { PropType } from 'vue'
import {
  formBusInjectionKey,
  formErrorsInjectionKey,
} from '~/composables/useForm'
import type { FormError } from '~/types/form'

const props = defineProps({
  id: String,
  values: Object as PropType<Record<string, unknown>>,
  schema: Object as PropType<StandardSchemaV1>,
})

const emits = defineEmits(['on-submit'])

const eventBus = useEventBus(`form-${props.id || useId()}`)

const isLoading = ref(false)
const errors = ref<FormError>(new Map())

provide(formBusInjectionKey, eventBus)
provide(formErrorsInjectionKey, errors)

async function validateForm(name?: string) {
  if (isLoading.value) return
  isLoading.value = true

  const validationResult = await validateSchema(props.values, props.schema)

  if (name?.length) {
    const errorMessage = validationResult.errors?.get(name) ?? ''
    errors.value?.set(name, errorMessage)
  } else {
    errors.value = validationResult.errors ?? new Map()
  }

  emits('on-submit', validationResult)

  isLoading.value = false
}

async function handleSubmit() {
  await validateForm()
}

onMounted(() => {
  eventBus.on(async (e) => {
    const event = e as { type: string; name: string }

    // TODO: Add additional event handler if needed
    if (event.type === 'blur') await validateForm(event.name)
  })
})
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <slot name="default" />
  </form>
</template>
