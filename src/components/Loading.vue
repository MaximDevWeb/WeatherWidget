<script setup lang="ts">
/**
 * This is the loading indication component.
 * @props {boolean} load
 */

defineProps({
  load: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div class="loading" v-if="load">
    <div class="loading__text">loading...</div>
  </div>
  <slot v-else />
</template>
