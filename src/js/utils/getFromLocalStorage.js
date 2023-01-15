import { isStorageAvailable } from "./isStorageAvailable.js";

export const getFromLocalStorage = (item = "") => {
  if(!item || !isStorageAvailable("localStorage")) return null;

  return localStorage.getItem(item);
}