import { MonthsDots } from "../components/months.js";

export class Years {
  static getYears() {
    let years = [];

    for (let index = 0; index <= 19; index++) {
      years.push(new Date().getFullYear() + index);
    }

    return years;
  }

  static postYear(year) {
    const panelMeses = document.getElementById("panel-meses");

    MonthsDots(year, "#222222", "#2F2F2F");
  }
}

export function getMonths() {
  const meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  return meses;
}

export function getDays(year, month) {
  const date = new Date(month, year, 0);

  return date.getDate();
}
