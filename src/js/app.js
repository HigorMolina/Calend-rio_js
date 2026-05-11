import Panel from "./components/panel.js";

import { YearsDots } from "./components/years.js";
import { MonthsDots } from "./components/months.js";
import { DaysDots } from "./components/days.js";

const now = new Date();

const panelsData = [
  {
    id: "panel-anos",
    title: "Anos",
    bg: "#013a63",
    colorHover: "#014f86",
    canBack: false,
  },
  {
    id: "panel-meses",
    title: now.getFullYear(),
    bg: "#01497c",
    colorHover: "#2a6f97",
  },
  {
    id: "panel-dias",
    title: now.toLocaleString("pt-BR", { month: "long" }),
    bg: "#014f86",
    colorHover: "#2a6f97",
  },
  // {
  //   id: "panel-horario",
  //   title: now.getDay(),
  //   bg: "#2a6f97",
  //   colorHover: "#468faf",
  // },
];

const main = document.querySelector("main");

panelsData.forEach((el) =>
  main.appendChild(Panel(el.id, el.title, el.bg, el.colorHover, el?.canBack)),
);

YearsDots();
MonthsDots();
DaysDots();
