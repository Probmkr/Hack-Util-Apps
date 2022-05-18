import Cookies from "js-cookie";

export default function changeThemeTo(theme: string) {
  let body: HTMLElement = document.querySelector("body");
  body.className = theme;
  Cookies.set("theme", theme, { sameSite: "lax" });
  toggleJapanTheme();
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
  toggleJapanTheme();
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

export function toggleJapanTheme() {
  console.log("toggled");
  const body = document.querySelector("body");
  const isJapanMode = body.classList.contains("japan-mode");
  const isExists = Boolean(document.getElementById("japan-circle"));
  console.log("isExists: ", isExists);
  console.log("isJapanMode: ", isJapanMode)
  if (isJapanMode && !isExists) {
    const container = document.getElementById("container");
    const japanCircle = document.createElement("div");
    japanCircle.id = "japan-circle";
    japanCircle.className = "japan-circle";
    container.appendChild(japanCircle);
  } else if (!isJapanMode && isExists) {
    const japanCircle = document.getElementById("japan-circle");
    japanCircle.remove();
  }
}
