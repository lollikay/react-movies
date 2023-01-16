import { isStorageAvailable } from "./isStorageAvailable.js";

export const writeToLocalStorage = (item = "", value = "") => {
  if(!item || !isStorageAvailable("localStorage")) return "";
  return localStorage.setItem(item, value);
}