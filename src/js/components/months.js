import { getMonths } from "../features/calendar.js";

import Dot from "./dot.js";

export function MonthsDots() {
  const panelAno = document.getElementById("panel-meses");
  const meses = getMonths();

  const section = document.createElement("section");

  section.style.cssText = `
    display: flex;
    flex-direction: column;
    gap: 1em;
  `;

  meses.forEach((el) => {
    const dot = Dot(el, "#2a6f97");

    section.appendChild(dot);
  });

  panelAno.appendChild(section);
}
