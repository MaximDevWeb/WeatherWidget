import type { beaufortScaleItem } from "@/types";

const beaufortScale: beaufortScaleItem[] = [
  { name: "calm", from: 0, to: 0.2 },
  { name: "light air", from: 0.3, to: 1.5 },
  { name: "light breeze", from: 1.5, to: 3.3 },
  { name: "gentle breeze", from: 3.3, to: 5.4 },
  { name: "moderate", from: 5.4, to: 7.9 },
  { name: "fresh breeze", from: 7.9, to: 10.7 },
  { name: "strong breeze", from: 10.7, to: 13.8 },
  { name: "moderate gale", from: 13.8, to: 17.1 },
  { name: "fresh gale", from: 17.1, to: 20.7 },
  { name: "strong gale", from: 20.7, to: 24.4 },
  { name: "whole gale", from: 24.4, to: 28.4 },
  { name: "storm", from: 28.4, to: 32.6 },
  { name: "hurricane", from: 32.6, to: 1000 },
];

/**
 * Function of converting wind speed to a string
 * @param {number} speed
 */

export const windToString = (speed: number): string => {
  const wind = beaufortScale.find(
    (item) => speed > item.from && speed <= item.to
  );
  return wind ? wind.name : "calm";
};
