import { getMonths } from "../features/calendar.js";

import Dot from "./dot.js";

export function MonthsDots() {
  const panelAno = document.getElementById("panel-ano");
  const meses = getMonths();

  const section = document.createElement("section");

  section.style.cssText = `
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 1fr);
    gap: 1em;
  `;

  meses.forEach((el) => {
    const dot = Dot(el, "#014f86");

    section.appendChild(dot);
  });

  panelAno.appendChild(section);
}
