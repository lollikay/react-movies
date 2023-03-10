import { isStorageAvailable } from "./isStorageAvailable.js";

export const getFromLocalStorage = (item = "") => {
  if(!item || !isStorageAvailable("localStorage")) return "";

  return localStorage.getItem(item) || "";
}