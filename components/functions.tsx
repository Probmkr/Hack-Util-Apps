import Cokies from "js-cookie";

export function RemoveClasses(query: string, classes: string[]) {
  document.querySelector(query).classList.remove(...classes);
}

export function DarkMode() {
  let body: HTMLElement = document.querySelector("body");
  body.classList.toggle("dark-mode");
  body.classList.contains("dark-mode")
    ? Cokies.set("dark-mode", "true", { bbb: "aaa" })
    : Cokies.set("dark-mode", "false", { bbb: "aaa" });
}

export function InitialTheme() {
  let body: HTMLElement = document.querySelector("body");
  let darkMode: string = Cokies.get("dark-mode");
  if (darkMode === "true") {
    body.classList.add("dark-mode");
  }
}
