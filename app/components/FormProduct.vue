<script setup lang="ts">
import type { StandardSchemaV1 } from '@standard-schema/spec'
import { reactive } from 'vue'
import type { FormSubmitEvent } from '~/types/form'

const props = defineProps({
  schema: Object as PropType<StandardSchemaV1>,
})

const form = reactive({
  name: undefined,
  code: undefined,
  units: [
    { name: undefined, price: undefined },
    { name: undefined, price: undefined },
  ],
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
      v-model="form.name"
      id="inputName"
      name="name"
      label="Name"
    />

    <general-input
      v-model="form.code"
      id="inputCode"
      name="code"
      label="Code"
    />

    <div v-for="(unit, i) in form.units" class="flex space-x-2">
      <general-input
        v-model="unit.name"
        :id="`inputUnitName${i}`"
        :name="`units.${i}.name`"
        label="Name"
      />

      <general-input
        v-model="unit.price"
        :id="`inputUnitPrice${i}`"
        :name="`units.${i}.price`"
        label="Price"
        type="number"
      />
    </div>

    <general-button type="submit"> Submit </general-button>

    <p v-if="result" class="text-sm">
      Submit Result: <br />
      <span class="font-medium">
        {{ result }}
      </span>
    </p>
  </general-form>
</template>
