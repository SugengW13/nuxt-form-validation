<script setup lang="ts">
import type { InputTypeHTMLAttribute, PropType } from 'vue'

const model = defineModel({
  default: undefined,
})

const props = defineProps({
  id: String,
  label: String,
  type: String as PropType<InputTypeHTMLAttribute>,
  errorMessage: String,
})
</script>

<template>
  <div class="flex flex-col space-y-0.5">
    <label :for="props.id" class="text-sm font-medium">{{ props.label }}</label>

    <input
      v-model="model"
      :id="props.id"
      :type="props.type ?? 'text'"
      class="border rounded-sm px-2.5 py-1.5 text-sm"
    />

    <span
      v-if="(props.errorMessage?.length ?? 0) > 0"
      class="text-red-600 font-medium text-sm"
    >
      {{ props.errorMessage }}
    </span>
  </div>
</template>
