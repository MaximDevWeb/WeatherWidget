import App from "./App.vue";
import { createPinia, setActivePinia } from "pinia";
import { defineCustomElement } from "vue";

setActivePinia(createPinia());

const element = defineCustomElement(App);
customElements.define("weather-widget", element);
