import { Years } from "../features/calendar.js";

import { getSecundaryColor } from "../utils/css.variables.js";
import { getThirdColor } from "../utils/css.variables.js";

import Dot from "./dot.js";

export function YearsDots() {
  const buttonColor = "#1E1E1E";
  const buttonHover = "#282828";

  const panelAnos = document.getElementById("panel-anos");

  const section = document.createElement("section");

  section.style.cssText = `
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1em;
    overflow-y: auto;
  `;

  const years = Years.getYears();

  const actualYear = new Date().getFullYear();

  years.forEach((year) => {
    const isActive = year === actualYear;
    const dot = Dot(
      `dot-year-${year}`,
      year,
      isActive ? getSecundaryColor() : buttonColor,
      isActive ? buttonColor : buttonHover,
      true,
    );

    dot.addEventListener("click", () => Years.postYear(year));

    section.appendChild(dot);
  });

  panelAnos.appendChild(section);

  // Add fade-in animation
  section.classList.add("fade-in");
  setTimeout(() => section.classList.remove("fade-in"), 500);
}
