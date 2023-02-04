<script setup lang="ts">
import Icon from "@/components/icon/Icon.vue";
import type { Location } from "@/types";
import { useSettingsStore } from "@/stores/settings";
import { ref } from "vue";

/**
 * This is settings item component.
 * @props {Location} item
 */

const props = defineProps<{
  item: Location;
}>();

const settingsStore = useSettingsStore();

const enter = ref<boolean>(false);

/**
 * Function delete location
 */
const deleteLocationEvent = () => {
  settingsStore.deleteLocation(props.item);
};

/**
 * Function for processing the start of the move event
 * @param {DragEvent} event
 */
const startTransferEvent = (event: DragEvent) => {
  if (event.dataTransfer) {
    event.dataTransfer.setData("locationId", props.item.id);
  }
};

/**
 * Function for processing enter transfer
 * @param {DragEvent} event
 */
const enterTransferEvent = (event: DragEvent) => {
  enter.value = true;
};

/**
 * Function for processing leave transfer
 * @param {DragEvent} event
 */
const leaveTransferEvent = (event: DragEvent) => {
  enter.value = false;
};

/**
 * Function for processing drop transfer
 * @param {DragEvent} event
 */
const dropTransferEvent = (event: DragEvent) => {
  if (event.dataTransfer) {
    const donorId = event.dataTransfer.getData("locationId");
    const recipientId = props.item.id;

    settingsStore.sortLocation(donorId, recipientId);

    enter.value = false;
  }
};
</script>

<template>
  <div
    class="item"
    :class="{ item_drop: enter }"
    draggable="true"
    @dragstart="startTransferEvent"
    @dragenter="enterTransferEvent"
    @dragleave="leaveTransferEvent"
    @dragover.prevent
    @drop="dropTransferEvent"
  >
    <div class="item__transfer button__icon">
      <icon type="transfer" />
    </div>

    <div class="item__name">
      {{ `${item.name}, ${item.country}` }}
    </div>

    <div class="item__remove button__icon" @click="deleteLocationEvent()">
      <icon type="delete" />
    </div>
  </div>
</template>
