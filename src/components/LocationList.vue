<script setup lang="ts">
import { useSettingsStore } from "@/stores/settings";
import LocationItem from "@/components/LocationItem.vue";

/**
 * This is the location list component.
 */

const settingsStore = useSettingsStore();
</script>

<template>
  <location-item
    v-if="settingsStore.locations.length"
    v-for="location in settingsStore.locations"
    :key="location.id"
    :location="location"
  />
  <div v-else class="location-list__empty">Add a location in the settings</div>
</template>
