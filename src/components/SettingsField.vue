<script setup lang="ts">
import { ref } from "vue";
import { useSettingsStore } from "@/stores/settings";
import { randString } from "@/helpers/random";
import { debounce } from "lodash";
import type { LocationItemData } from "@/types";
import { http } from "@/helpers/http";

/**
 * This is the settings field component.
 */

const settingsStore = useSettingsStore();

const location = ref<string>("");
const locationList = ref<LocationItemData[]>([]);
const load = ref<boolean>(false);

/**
 * Function of adding a location to the list
 * @param {LocationItemData} item
 */
const addLocationEvent = (item: LocationItemData): void => {
  settingsStore.addLocation({
    id: randString(),
    name: item.name,
    lat: item.lat,
    lon: item.lon,
    country: item.country,
  });

  location.value = "";
  locationList.value = [];
};

/**
 * Input event processing function
 */
const inputLocationEvent = (): void => {
  if (location.value.length > 2) {
    loadLocation();
  } else {
    locationList.value = [];
  }
};

/**
 * Function for getting a list of locations by name
 */
const loadLocation = debounce(() => {
  if (location.value) {
    load.value = true;

    http(`/geo/1.0/direct?q=${location.value}&limit=3`)
      .then((result) => {
        locationList.value = result.data;
        load.value = false;
      })
      .catch(() => {
        console.log("Load data error");
        load.value = false;
      });
  }
}, 500);
</script>

<template>
  <div class="field">
    <div class="field__list" v-if="locationList.length || load">
      <div class="field__search" v-if="load">search...</div>
      <div
        v-else
        class="field__item"
        v-for="item in locationList"
        @click="addLocationEvent(item)"
      >
        {{ item.name }}, {{ item.country }}
      </div>
    </div>

    <label for="location" class="field__label">Add Location:</label>

    <div class="field__input">
      <input
        id="location"
        type="text"
        placeholder="start entering location"
        v-model="location"
        @input="inputLocationEvent"
      />
    </div>
  </div>
</template>
