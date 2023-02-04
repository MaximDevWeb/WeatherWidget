<script setup lang="ts">
import { useSettingsStore } from "@/stores/settings";
import SettingsItem from "@/components/SettingsItem.vue";

/**
 * This is settings list component.
 */

const settingsStore = useSettingsStore();
</script>

<template>
  <div>
    <settings-item
      :item="location"
      v-for="location in settingsStore.locations"
      :key="location.id"
    />
  </div>
</template>
