import { Years } from "../features/calendar.js";

import { getSecundaryColor } from "../utils/css.variables.js";

import Dot from "./dot.js";

export function YearsDots(buttonColor, buttonHover) {
  const panelAno = document.getElementById("panel-anos");

  const section = document.createElement("section");

  section.style.cssText = `
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 1em;
    overflow-y: auto;
  `;

  const years = Years.getYears();

  const actualYear = new Date().getFullYear();

  years.forEach((year) => {
    const isActive = year === actualYear;

    const dot = Dot(
      year,
      isActive ? getSecundaryColor() : buttonColor,
      isActive ? buttonColor : buttonHover,
      true,
    );

    dot.addEventListener("click", () => Years.postYear(year));

    section.appendChild(dot);
  });

  panelAno.appendChild(section);
}
