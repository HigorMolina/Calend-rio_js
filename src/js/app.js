import Panel from "./components/panel.js";

import { MonthsDots } from "./components/months.js";

const now = new Date();

const panelsData = [
  {
    id: "panel-ano",
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
  {
    id: "panel-horario",
    title: now.getDay(),
    bg: "#2a6f97",
    colorHover: "#468faf",
  },
];

const body = document.querySelector("body");

panelsData.forEach((el) =>
  body.appendChild(Panel(el.id, el.title, el.bg, el.colorHover, el?.canBack)),
);

MonthsDots();
