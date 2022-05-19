import Cookies from "js-cookie";

export default function changeThemeTo(theme: string) {
  let container: HTMLElement = document.getElementById("bgContainer");
  container.className = theme;
  Cookies.set("theme", theme, { sameSite: "lax" });
  // toggleJapanTheme();
}

export function initialTheme() {
  let container: HTMLElement = document.getElementById("bgContainer");
  let theme: string = Cookies.get("theme");
  theme == "nothing" ? null : theme;
  let darkMode: string = Cookies.get("dark-mode");
  if (theme) {
    container.className = theme;
  } else if (darkMode === "true") {
    container.classList.add("dark-mode");
  }
  // toggleJapanTheme();
}

export function darkModeTheme() {
  let container: HTMLElement = document.getElementById("bgContainer");
  let isDark: boolean = container.classList.contains("dark-mode");
  if (isDark) {
    container.classList.remove("dark-mode");
    Cookies.set("theme", "nothing", { sameSite: "lax" });
  } else {
    changeThemeTo("dark-mode");
    Cookies.set("theme", "dark-mode", { sameSite: "lax" });
  }
}
