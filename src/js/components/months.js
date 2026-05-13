import { YearsDots } from "./years.js";

import { getSecundaryColor } from "../utils/css.variables.js";

import { Months } from "../features/calendar.js";

import Dot from "./dot.js";

export function MonthsDots(year) {
  const buttonColor = "#222222";
  const buttonHover = "#2F2F2F";

  const panelMeses = document.getElementById("panel-meses");
  const title = document.getElementById("panel-meses-leave");

  const meses = Months.getMonths();

  title.textContent = year;

  const section = document.createElement("section");

  section.id = "dots-meses";

  section.style.cssText = `
    display: flex;
    flex-direction: column;
    gap: 1em;
    overflow-y: auto;
  `;

  const date = new Date();

  const actualMonth = date.getMonth();
  const actualYear = date.getFullYear();

  meses.forEach((el, i) => {
    const isActive = i == actualMonth && year == actualYear;

    const dot = Dot(
      `dot-month-${i}`,
      el,
      isActive ? getSecundaryColor() : buttonColor,
      isActive ? buttonColor : buttonHover,
    );

    dot.addEventListener("click", () => Months.postMonth(i));

    section.appendChild(dot);
  });

  const oldSection = panelMeses.querySelector("#dots-meses");

  if (oldSection) {
    panelMeses.replaceChild(section, oldSection);
  } else {
    panelMeses.appendChild(section);
  }

  panelMeses.classList.remove("hide");

  // Add fade-in animation
  section.classList.add("fade-in");
  setTimeout(() => section.classList.remove("fade-in"), 500);
}
