import Cookies from "js-cookie";

export function removeClasses(query: string, classes: string[]) {
  document.querySelector(query).classList.remove(...classes);
}

export function darkModeTheme() {
  let body: HTMLElement = document.querySelector("body");
  body.classList.toggle("dark-mode");
  body.classList.contains("dark-mode")
    ? Cookies.set("dark-mode", "true", { sameSite: "lax" })
    : Cookies.set("dark-mode", "false", { sameSite: "lax" });
}

export function changeThemeTo(theme: string) {
  let body: HTMLElement = document.querySelector("body");
  body.className = theme;
  Cookies.set("theme", theme, { sameSite: "lax" });
}

export function initialTheme() {
  let body: HTMLElement = document.querySelector("body");
  let theme: string = Cookies.get("theme");
  let darkMode: string = Cookies.get("dark-mode");
  if (theme) {
    body.className = theme;
  } else if (darkMode === "true") {
    body.classList.add("dark-mode");
  }
}

