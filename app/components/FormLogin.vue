<script setup lang="ts">
import type { StandardSchemaV1 } from '@standard-schema/spec'
import { reactive } from 'vue'
import type { FormSubmitEvent } from '~/types/form'

const props = defineProps({
  schema: Object as PropType<StandardSchemaV1>,
})

const form = reactive({
  email: undefined,
  password: undefined,
})

const result = ref()

function onSubmit(event: FormSubmitEvent<typeof form>) {
  result.value = event
}
</script>

<template>
  <general-form
    :values="form"
    :schema="props.schema"
    @on-submit="onSubmit"
    class="space-y-2"
  >
    <general-input
      v-model="form.email"
      id="inputEmail"
      name="email"
      label="Email"
      type="email"
    />

    <general-input
      v-model="form.password"
      id="inputPassword"
      name="password"
      label="Password"
      type="password"
    />

    <general-button type="submit"> Login </general-button>

    <p v-if="result" class="text-sm">
      Submit Result: <br />
      <span class="font-medium">
        {{ result }}
      </span>
    </p>
  </general-form>
</template>
