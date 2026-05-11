import { getMonths } from "../features/calendar.js";

import { getSecundaryColor } from "../utils/css.variables.js";

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

  const actualMonth = new Date().getMonth();

  meses.forEach((el, i) => {
    const isActive = i == actualMonth;

    const dot = Dot(
      el,
      isActive ? getSecundaryColor() : buttonColor,
      isActive ? buttonColor : buttonHover,
    );

    section.appendChild(dot);
  });

  panelMeses.appendChild(section);
}
