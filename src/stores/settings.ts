import { defineStore } from "pinia";
import type { Location } from "@/types";

type Store = {
  showSettings: boolean;
  locations: Location[];
  api: string;
};

export const useSettingsStore = defineStore("settings", {
  state: (): Store => ({
    showSettings: false,
    locations: JSON.parse(localStorage.getItem("location") || "[]"),
    api: "7e15d5156b6685f2f7f85a305b6ad411",
  }),

  actions: {
    changeShowMenu(): void {
      this.showSettings = !this.showSettings;
    },
    addLocation(location: Location): void {
      this.locations.push(location);
      this.updateLocalStore();
    },
    deleteLocation(location: Location): void {
      this.locations = this.locations.filter((item) => item.id !== location.id);
      this.updateLocalStore();
    },
    updateLocalStore(): void {
      localStorage.setItem("location", JSON.stringify(this.locations));
    },
    sortLocation(donor: string, recipient: string): void {
      const donorIndex: number = this.locations.findIndex(
        (item) => item.id === donor
      );
      const recipientIndex: number = this.locations.findIndex(
        (item) => item.id === recipient
      );
      const dataRecipient = this.locations[recipientIndex];

      this.locations[recipientIndex] = this.locations[donorIndex];
      this.locations[donorIndex] = dataRecipient;

      this.updateLocalStore();
    },
  },
});
