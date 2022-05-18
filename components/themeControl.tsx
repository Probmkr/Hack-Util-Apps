import Cookies from "js-cookie";

export default function changeThemeTo(theme: string) {
  let body: HTMLElement = document.querySelector("body");
  body.className = theme;
  Cookies.set("theme", theme, { sameSite: "lax" });
}

export function initialTheme() {
  let body: HTMLElement = document.querySelector("body");
  let theme: string = Cookies.get("theme");
  theme == "nothing" ? null : theme;
  let darkMode: string = Cookies.get("dark-mode");
  if (theme) {
    body.className = theme;
  } else if (darkMode === "true") {
    body.classList.add("dark-mode");
  }
}

export function darkModeTheme() {
  let body: HTMLElement = document.querySelector("body");
  let isDark: boolean = body.classList.contains("dark-mode");
  if (isDark) {
    body.classList.remove("dark-mode");
    Cookies.set("theme", "nothing", { sameSite: "lax" });
  } else {
    changeThemeTo("dark-mode");
    Cookies.set("theme", "dark-mode", { sameSite: "lax" });
  }
}
