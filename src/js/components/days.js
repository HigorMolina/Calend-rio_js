import Dot from "./dot.js";

import { getSecundaryColor } from "../utils/css.variables.js";

export function DaysDots(buttonColor, buttonHover) {
  const panelDays = document.getElementById("panel-dias");

  const section = document.createElement("section");

  section.style.cssText = `
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1em;
    overflow-y: auto;
  `;

  // mudar para dinamico
  const date = new Date(5, 2026, 0);

  const actualDay = new Date().getDate();

  for (let index = 1; index <= date.getDate(); index++) {
    const isActive = index == actualDay;

    const dot = Dot(
      index,
      isActive ? getSecundaryColor() : buttonColor,
      isActive ? buttonColor : buttonHover,
    );

    section.appendChild(dot);
  }

  panelDays.appendChild(section);
}
