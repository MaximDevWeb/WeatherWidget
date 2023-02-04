import axios from "axios";
import { useSettingsStore } from "@/stores/settings";

/**
 * Function of sending a get request using axios
 * @param {string} url
 */
export const http = (url: string) => {
  const baseUrl = "http://api.openweathermap.org";
  const settingStore = useSettingsStore();

  return axios.get(url, {
    baseURL: baseUrl,
    params: {
      appid: settingStore.api,
    },
  });
};
