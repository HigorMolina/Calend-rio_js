import Panel from "./components/panel.js";

const panelsData = [
  {
    id: "panel-ano",
    title: "Ano",
    bg: "#013a63",
    colorHover: "#014f86",
    content: "",
  },
  {
    id: "panel-meses",
    title: "Meses",
    bg: "#01497c",
    colorHover: "#2a6f97",
    content: "",
  },
  {
    id: "panel-dias",
    title: "Dias",
    bg: "#014f86",
    colorHover: "#2a6f97",
    content: "",
  },
  {
    id: "panel-horarios",
    title: "Horários",
    bg: "#2a6f97",
    colorHover: "#468faf",
    content: "",
  },
];

const body = document.querySelector("body");

panelsData.forEach((el) =>
  body.appendChild(Panel(el.id, el.title, el.bg, el.colorHover, el.content)),
);
