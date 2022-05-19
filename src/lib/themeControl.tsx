import Cookies from "js-cookie";
import { siteThemes } from "../env/vars.json";

export default function changeThemeTo(theme: string) {
  const body: HTMLElement = document.querySelector("body");
  body.classList.remove(...siteThemes);
  body.classList.add(theme);
  Cookies.set("theme", theme, { sameSite: "lax" });
  // toggleJapanTheme();
}

export function initialTheme() {
  const body: HTMLElement = document.querySelector("body");
  const theme: string = Cookies.get("theme");
  if (theme) {
    body.classList.remove(...siteThemes);
    body.classList.add(theme);
  }
  // toggleJapanTheme();
}

export function darkModeTheme() {
  const body: HTMLElement = document.querySelector("body");
  const isDark: boolean = body.classList.contains("dark-mode");
  if (isDark) {
    changeThemeTo("nothing");
  } else {
    changeThemeTo("dark-mode");
  }
}
