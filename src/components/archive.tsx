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
