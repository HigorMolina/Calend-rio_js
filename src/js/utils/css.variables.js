const rootStyles = getComputedStyle(document.documentElement);

export function getSecundaryColor() {
  const secundaryColor = rootStyles
    .getPropertyValue("--secundary-color")
    .trim();

  return secundaryColor;
}

export function getThirdColor() {
  const thirdColor = rootStyles.getPropertyValue("--third-color").trim();

  return thirdColor;
}
