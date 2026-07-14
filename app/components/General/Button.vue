<script setup lang="ts">
import type { PropType } from "vue";

const props = defineProps({
  type: String as PropType<"submit" | "reset" | "button">,
});
</script>

<template>
  <button
    :type="props.type"
    class="bg-red-600 hover:bg-red-600/75 rounded-sm px-2.5 py-1.5 text-sm font-semibold text-white"
  >
    <slot name="default" />
  </button>
</template>
