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
    const currentSelected = document.querySelector(
      '[id^="dot-year-"].selected',
    );

    if (currentSelected) {
      currentSelected.classList.remove("selected");
    }

    const nextDot = document.getElementById(`dot-year-${year}`);

    if (nextDot) {
      nextDot.classList.add("selected");
      MonthsDots(year);
    }
  }
}

export class Months {
  static getMonths() {
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

  static postMonth(month) {
    const currentSelected = document.querySelector(
      '[id^="dot-month-"].selected',
    );

    if (currentSelected) {
      currentSelected.classList.remove("selected");
    }

    const nextDot = document.getElementById(`dot-month-${month}`);

    if (nextDot) {
      nextDot.classList.add("selected");

      // TODO: NÃO PASSAR ESSE YEAR
      MonthsDots(year);
    }
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
