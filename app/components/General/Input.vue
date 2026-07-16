<script setup lang="ts">
import { computed, inject } from 'vue'
import type { InputTypeHTMLAttribute, PropType } from 'vue'
import { formBusInjectionKey } from '~/composables/useForm'
import type { FormError } from '~/types/form'

const model = defineModel({
  default: undefined,
})

const props = defineProps({
  id: String,
  name: String,
  label: String,
  type: String as PropType<InputTypeHTMLAttribute>,
  errorMessage: String,
})

const formBus = inject(formBusInjectionKey, undefined)
const formErrors = inject<Ref<undefined | FormError>>(formErrorsInjectionKey)

const currentError = computed(
  () => props.errorMessage || formErrors?.value?.get(props.name ?? ''),
)

function onBlur() {
  if (!formBus) return
  formBus.emit({ type: 'blur', name: props.name })
}
</script>

<template>
  <div class="flex flex-col space-y-0.5">
    <label :for="props.id" class="text-sm font-medium">{{ props.label }}</label>

    <input
      v-model="model"
      :id="props.id"
      :name="props.name"
      :type="props.type ?? 'text'"
      class="border rounded-sm px-2.5 py-1.5 text-sm"
      @blur="onBlur"
    />

    <span v-if="currentError?.length" class="text-red-600 font-medium text-sm">
      {{ currentError }}
    </span>
  </div>
</template>
