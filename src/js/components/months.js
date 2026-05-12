import { getMonths } from "../features/calendar.js";

import { getSecundaryColor } from "../utils/css.variables.js";

import Dot from "./dot.js";

export function MonthsDots(year, buttonColor, buttonHover) {
  const panelMeses = document.getElementById("panel-meses");
  const title = panelMeses.querySelector("header button");
  const meses = getMonths();

  title.textContent = year;

  const section = document.createElement("section");

  section.id = "dots-meses";

  section.style.cssText = `
    display: flex;
    flex-direction: column;
    gap: 1em;
    overflow-y: auto;
  `;

  const actualMonth = new Date().getMonth();
  const actualYear = new Date().getFullYear();

  meses.forEach((el, i) => {
    const isActive = i == actualMonth && year == actualYear;

    const dot = Dot(
      el,
      isActive ? getSecundaryColor() : buttonColor,
      isActive ? buttonColor : buttonHover,
    );

    section.appendChild(dot);
  });

  const oldSection = panelMeses.querySelector("#dots-meses");

  if (oldSection) {
    panelMeses.replaceChild(section, oldSection);
  } else {
    panelMeses.appendChild(section);
    panelMeses.classList.toggle("hide");
  }
}
