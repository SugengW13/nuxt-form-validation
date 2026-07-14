<script setup lang="ts">
const props = defineProps({
  value: Object
})

const emits = defineEmits(['on-submit'])
</script>

<template>
    <form @submit.prevent="emits('on-submit')">
      <slot name="default" />
    </form>
</template>