import Header from "../components/header.js";
import { MonthsDots } from "../components/months.js";
import { DaysDots } from "../components/days.js";

export class Years {
  static getYears() {
    let years = [];

    for (let index = 0; index <= 9; index++) {
      years.push(new Date().getFullYear() + index);
    }

    return years;
  }

  static getSelectedYear() {
    const selected = document.querySelector('[id^="dot-year-"].selected');
    if (selected) {
      return Number(selected.id.replace("dot-year-", ""));
    }
    return new Date().getFullYear();
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
    }

    MonthsDots(year);
    document.getElementById("panel-dias")?.classList.add("hide");
  }

  static navigateYear(direction) {
    const years = this.getYears();
    const currentYear = this.getSelectedYear();
    const currentIndex = years.indexOf(currentYear);
    const nextIndex =
      direction === "down"
        ? Math.min(currentIndex + 1, years.length - 1)
        : Math.max(currentIndex - 1, 0);

    if (nextIndex !== currentIndex) {
      this.postYear(years[nextIndex]);
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

  static getSelectedMonthIndex() {
    const selected = document.querySelector('[id^="dot-month-"].selected');
    if (selected) {
      return Number(selected.id.replace("dot-month-", ""));
    }
    return new Date().getMonth();
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
    }

    DaysDots(this.getMonths()[month], month);
  }

  static navigateMonth(direction) {
    const months = this.getMonths();
    const currentIndex = this.getSelectedMonthIndex();
    const nextIndex =
      direction === "down"
        ? Math.min(currentIndex + 1, months.length - 1)
        : Math.max(currentIndex - 1, 0);

    if (nextIndex !== currentIndex) {
      this.postMonth(nextIndex);
      document.getElementById("panel-dias")?.classList.remove("hide");
    }
  }
}

export class Days {
  static getDays(year, month) {
    const date = new Date(year, month + 1, 0);

    console.log(date.getDate());

    return date.getDate();
  }

  static getSelectedDay() {
    const selected = document.querySelector('[id^="dot-day-"].selected');
    if (selected) {
      return Number(selected.id.replace("dot-day-", ""));
    }
    return 1;
  }

  static getSelectedMonthIndex() {
    const selected = document.querySelector('[id^="dot-month-"].selected');
    if (selected) {
      return Number(selected.id.replace("dot-month-", ""));
    }
    return new Date().getMonth();
  }

  static postDay(day) {
    const currentSelected = document.querySelector('[id^="dot-day-"].selected');

    if (currentSelected) {
      currentSelected.classList.remove("selected");
    }

    const nextDot = document.getElementById(`dot-day-${day}`);

    if (nextDot) {
      nextDot.classList.add("selected");
    }

    const selectedYear = Number(
      document.getElementById("panel-meses-leave")?.textContent ||
        new Date().getFullYear(),
    );
    const selectedMonthName =
      document.getElementById("panel-dias-leave")?.textContent || "";
    const selectedMonth = Months.getMonths().indexOf(selectedMonthName);

    Header.openAppointmentModal({
      year: selectedYear,
      month: selectedMonth,
      monthName: selectedMonthName,
      day,
    });
  }

  static navigateDay(direction) {
    const selectedYear = Number(
      document.getElementById("panel-meses-leave")?.textContent ||
        new Date().getFullYear(),
    );
    const selectedMonth = this.getSelectedMonthIndex();
    const currentDay = this.getSelectedDay();
    const maxDay = this.getDays(selectedYear, selectedMonth);

    const nextDay =
      direction === "down"
        ? Math.min(currentDay + 1, maxDay)
        : Math.max(currentDay - 1, 1);

    if (nextDay !== currentDay) {
      this.postDay(nextDay);
    }
  }
}
