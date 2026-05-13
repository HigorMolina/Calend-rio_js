import Dot from "./dot.js";

import { getSecundaryColor } from "../utils/css.variables.js";

import { Days } from "../features/calendar.js";

export function DaysDots(month, monthNumber) {
  const buttonColor = "#2A2A2A";
  const buttonHover = "#383838";

  const panelDays = document.getElementById("panel-dias");

  const title = document.getElementById("panel-dias-leave");

  title.textContent = month;

  const section = document.createElement("section");

  section.id = "dots-dias";

  section.style.cssText = `
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1em;
    overflow-y: auto;
  `;

  const selectedYear = Number(
    document.getElementById("panel-meses-leave").textContent,
  );

  // mudar para dinamico
  const days = Days.getDays(selectedYear, monthNumber);

  const date = new Date();

  const actualYear = date.getFullYear();

  const actualDay = date.getDate();

  const actualMonth = date.getMonth();

  for (let index = 1; index <= days; index++) {
    const isActive =
      index == actualDay &&
      selectedYear == actualYear &&
      monthNumber == actualMonth;

    const dot = Dot(
      `dot-day-${index}`,
      index,
      isActive ? getSecundaryColor() : buttonColor,
      isActive ? buttonColor : buttonHover,
    );

    dot.addEventListener("click", () => Days.postDay(index));

    section.appendChild(dot);
  }

  const oldSection = panelDays.querySelector("#dots-dias");

  if (oldSection) {
    panelDays.replaceChild(section, oldSection);
  } else {
    panelDays.appendChild(section);
  }

  panelDays.classList.remove("hide");
}
