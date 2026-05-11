const rootStyles = getComputedStyle(document.documentElement);

export function getSecundaryColor() {
  const secundaryColor = rootStyles
    .getPropertyValue("--secundary-color")
    .trim();

  return secundaryColor;
}
