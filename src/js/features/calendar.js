export function getYears() {
  let years = [];

  for (let index = 0; index <= 19; index++) {
    years.push(new Date().getFullYear() + index);
  }

  return years;
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
