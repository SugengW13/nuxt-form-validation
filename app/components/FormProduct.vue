<script setup lang="ts">
import { reactive } from 'vue'
import type { FormSubmitEvent } from '~/types/form'

const props = defineProps({
  schemaType: String as PropType<'zod' | 'yup'>,
})

const form = reactive({
  name: undefined,
  code: undefined,
  units: [
    { name: undefined, price: undefined },
    { name: undefined, price: undefined },
    { name: undefined, price: undefined },
  ],
})

const result = ref()

const schema = computed(() => {
  switch (props.schemaType) {
    case 'zod':
      return zodProductSchema
    case 'yup':
      return yupProductSchema
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
      v-model="form.name"
      :id="`inputName${props.schemaType}`"
      name="name"
      label="Name"
    />

    <general-input
      v-model="form.code"
      :id="`inputCode${props.schemaType}`"
      name="code"
      label="Code"
    />

    <div v-for="(unit, i) in form.units" class="flex space-x-2">
      <general-input
        v-model="unit.name"
        :id="`inputUnitName${props.schemaType}${i}`"
        :name="`units.${i}.name`"
        label="Name"
      />

      <general-input
        v-model="unit.price"
        :id="`inputUnitPrice${props.schemaType}${i}`"
        :name="`units.${i}.price`"
        label="Price"
        type="number"
      />
    </div>

    <general-button type="submit"> Submit </general-button>

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
