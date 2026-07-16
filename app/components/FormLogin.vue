<script setup lang="ts">
import { reactive, type PropType } from 'vue'
import type { FormSubmitEvent } from '~/types/form'

const props = defineProps({
  schemaType: String as PropType<'zod' | 'yup'>,
})

const form = reactive({
  email: undefined,
  password: undefined,
})

const result = ref<FormSubmitEvent<typeof form>>()

const schema = computed(() => {
  switch (props.schemaType) {
    case 'zod':
      return zodLoginSchema
    case 'yup':
      return yupLoginSchema
    default:
      return undefined
  }
})

function onSubmit(event: FormSubmitEvent<typeof form>) {
  result.value = event
}
</script>

<template>
  <general-form
    :values="form"
    :schema="schema"
    @on-submit="onSubmit"
    class="space-y-2"
  >
    <general-input
      v-model="form.email"
      :id="`inputEmail${props.schemaType}`"
      name="email"
      label="Email"
      type="email"
    />

    <general-input
      v-model="form.password"
      :id="`inputPassword${props.schemaType}`"
      name="password"
      label="Password"
      type="password"
    />

    <general-button type="submit"> Login </general-button>

    <p v-if="result" class="text-sm">
      Submit Result: <br />
      <span
        class="font-medium"
        :class="result.errors ? 'text-red-600' : 'text-green-600'"
      >
        {{ result }}
      </span>
    </p>
  </general-form>
</template>
