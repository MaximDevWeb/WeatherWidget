<script setup lang="ts">
import Settings from "@/components/Settings.vue";
import LocationList from "@/components/LocationList.vue";
</script>

<template>
  <div class="wrapper">
    <settings />

    <location-list />
  </div>
</template>

<style lang="scss">
@use "src/assets/styles/app";
</style>
