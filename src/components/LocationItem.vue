<script setup lang="ts">
import wind from "@/assets/images/wind.svg";
import pressure from "@/assets/images/pressure.svg";
import type { Location, weatherData } from "@/types";
import { onMounted, ref, watch } from "vue";
import { http } from "@/helpers/http";
import Loading from "@/components/Loading.vue";
import { ceil, capitalize } from "lodash";
import { windToString } from "@/helpers/wheater";

/**
 * This is the location item component.
 * @props {Location} location
 */

const props = defineProps<{
  location: Location;
}>();

const weather = ref<weatherData | null>(null);

/**
 * Loading weather data when creating a component.
 */
onMounted(() => {
  http(
    `/data/2.5/weather?lat=${props.location.lat}&lon=${props.location.lon}&units=metric`
  )
    .then((result) => {
      weather.value = result.data as weatherData;
    })
    .catch(() => {
      console.log("Load data error");
    });
});
</script>

<template>
  <div class="location">
    <loading :load="!weather">
      <template v-if="weather">
        <div class="location__name">
          {{ location.name }}, {{ location.country }}
        </div>
        <div class="location__main">
          <div class="location__image">
            <img
              :src="`http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`"
              alt="weather image"
            />
          </div>
          <div class="location__temperature">
            {{ ceil(weather.main.temp) }}&deg;C
          </div>
        </div>

        <div class="location__description">
          Feels like {{ ceil(weather.main.feels_like) }}&deg;C.
          {{ capitalize(weather.weather[0].description) }}.
          {{ capitalize(windToString(weather.wind.speed)) }}
        </div>

        <div class="location__data">
          <div>
            <img :src="wind" alt="weather wind" />
            <span>{{ ceil(weather.wind.speed, 1) }}m/s SSE</span>
          </div>
          <div>
            <img :src="pressure" alt="pressure wind" />
            <span>{{ weather.main.pressure }}hPa</span>
          </div>
        </div>

        <div class="location__sub-data">
          <div>Humidity: {{ weather.main.humidity }}%</div>
          <div>Clouds: {{ weather.clouds.all }}%</div>
          <div>Visibility: {{ ceil(weather.visibility / 1000, 2) }}km</div>
        </div>
      </template>
    </loading>
  </div>
</template>
