import Panel from "./components/panel.js";

import { YearsDots } from "./components/years.js";
import { MonthsDots } from "./components/months.js";
import { DaysDots } from "./components/days.js";

const now = new Date();

const panelsData = [
  {
    id: "panel-anos",
    title: "Anos",
    bg: "#121212",
    buttonColor: "#1E1E1E",
    colorHover: "#282828",
    canBack: false,
  },
  {
    id: "panel-meses",
    title: "month-boostrap",
    bg: "#181818",
    buttonColor: "#222222",
    colorHover: "#2F2F2F",
  },
  {
    id: "panel-dias",
    title: "days-boostrap",
    bg: "#1F1F1F",
    buttonColor: "#2A2A2A",
    colorHover: "#383838",
  },
];

const main = document.querySelector("main");

panelsData.forEach((el) =>
  main.appendChild(
    Panel(el.id, el.title, el.bg, el.buttonColor, el.colorHover, el?.canBack),
  ),
);

YearsDots();
