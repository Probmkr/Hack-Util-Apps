import Cookies from "js-cookie";
import changeThemeTo from "./themeControl";

export default function removeClasses(query: string, classes: string[]) {
  document.querySelector(query).classList.remove(...classes);
}
