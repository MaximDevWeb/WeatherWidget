<script setup lang="ts">
import Icon from "@/components/icon/Icon.vue";
import { useSettingsStore } from "@/stores/settings";
import SettingsField from "@/components/SettingsField.vue";
import SettingsList from "@/components/SettingsList.vue";

/**
 * This is the location item component.
 * @props {Location} location
 */

const settingStore = useSettingsStore();

/**
 * Menu opening/hiding function
 */
const menuClickEvent = () => {
  settingStore.changeShowMenu();
};
</script>

<template>
  <div class="settings__button button__icon" @click="menuClickEvent">
    <icon :type="settingStore.showSettings ? 'close' : 'menu'" />
  </div>

  <div class="settings" :class="{ settings_show: settingStore.showSettings }">
    <settings-list />

    <settings-field />
  </div>
</template>
