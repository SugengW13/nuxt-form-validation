<script setup lang="ts">
import type { StandardSchemaV1 } from '@standard-schema/spec'
import type { PropType } from 'vue'

const props = defineProps({
  values: Object as PropType<Record<string, unknown>>,
  schema: Object as PropType<StandardSchemaV1>,
})

const emits = defineEmits(['on-submit'])

const isLoading = ref(false)
const errors = ref<{ name?: string; message?: string }[]>()

provide(formErrorsInjectionKey, errors)

async function handleSubmit() {
  if (isLoading.value) return
  isLoading.value = true

  const validationResult = await validateSchema(props.values, props.schema)

  errors.value = validationResult.errors
  emits('on-submit', validationResult)

  isLoading.value = false
}
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <slot name="default" />
  </form>
</template>
