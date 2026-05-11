import Dot from "./dot.js";

export function YearsDots() {
  const panelAno = document.getElementById("panel-anos");

  const section = document.createElement("section");

  section.style.cssText = `
    display: flex;
    flex-direction: column;
    gap: 1em;
    overflow-y: auto;
  `;

  // Pegandos os proximos 9 anos

  let years = [];

  for (let index = 0; index <= 9; index++) {
    years.push(new Date().getFullYear() + index);
  }

  years.forEach((el) => {
    const dot = Dot(el, "#2a6f97");

    section.appendChild(dot);
  });

  panelAno.appendChild(section);
}
