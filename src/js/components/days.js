import Dot from "./dot.js";

export function DaysDots() {
  const panelDays = document.getElementById("panel-dias");

  const section = document.createElement("section");

  section.style.cssText = `
    display: flex;
    flex-direction: column;
    gap: 1em;
    overflow-y: auto;
  `;

  // mudar para dinamico
  const date = new Date(5, 2026, 0);

  for (let index = 1; index <= date.getDate(); index++) {
    const dot = Dot(index, "#2a6f97");
    section.appendChild(dot);
  }

  panelDays.appendChild(section);
}
