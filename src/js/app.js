import Header from "./components/header.js";
import Panel from "./components/panel.js";

import { YearsDots } from "./components/years.js";
import { MonthsDots } from "./components/months.js";
import { DaysDots } from "./components/days.js";
import { Years, Months, Days } from "./features/calendar.js";

const now = new Date();

const main = document.querySelector("main");

function hidePanel(id) {
  const panel = document.getElementById(id);
  if (panel) panel.classList.add("hide");
}

function showPanel(id) {
  const panel = document.getElementById(id);
  if (panel) panel.classList.remove("hide");
}

function closeMonthsAndDays() {
  hidePanel("panel-dias");
  hidePanel("panel-meses");
}

function closeDays() {
  hidePanel("panel-dias");
}

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
    callbacks: {
      onLeave: closeMonthsAndDays,
      onUp: () => Years.navigateYear("up"),
      onDown: () => Years.navigateYear("down"),
    },
  },
  {
    id: "panel-dias",
    title: "days-boostrap",
    bg: "#1F1F1F",
    buttonColor: "#2A2A2A",
    colorHover: "#383838",
    callbacks: {
      onLeave: closeDays,
      onUp: () => Months.navigateMonth("up"),
      onDown: () => Months.navigateMonth("down"),
    },
  },
];

Header.init();

panelsData.forEach((el) =>
  main.appendChild(
    Panel(
      el.id,
      el.title,
      el.bg,
      el.buttonColor,
      el.colorHover,
      el?.canBack,
      el.callbacks,
    ),
  ),
);

// Create image section
const imageSection = document.createElement("div");
imageSection.className = "image-section";
const img = document.createElement("img");
img.src =
  "https://fateccampinas.com.br/portal/wp-content/uploads/2026/03/Logo_Fatec.png";
img.alt = "Calendário";
imageSection.appendChild(img);
main.appendChild(imageSection);

YearsDots();
