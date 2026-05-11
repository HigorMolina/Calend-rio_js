import { getMonths } from "../features/calendar.js";

import Dot from "./dot.js";

export function MonthsDots(buttonColor, buttonHover) {
  const panelMeses = document.getElementById("panel-meses");
  const meses = getMonths();

  const section = document.createElement("section");

  section.style.cssText = `
    display: flex;
    flex-direction: column;
    gap: 1em;
    overflow-y: auto;
  `;

  meses.forEach((el) => {
    const dot = Dot(el, buttonColor, buttonHover);

    section.appendChild(dot);
  });

  panelMeses.appendChild(section);
}
