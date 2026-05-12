export default function Dot(
  id,
  title,
  buttonColor,
  hoverColor,
  circle = false,
) {
  // TODO: MUDAR PARA BUTTON
  const dot = document.createElement("div");

  dot.id = id;

  dot.textContent = title;

  dot.classList.add("dot");

  dot.style.cssText = `
  background-color: ${buttonColor};
  `;

  if (circle) {
    dot.style.cssText = `
    background-color: ${buttonColor};
    border-radius: 100%;
    aspect-ratio: 1/1;
    `;
  }

  dot.addEventListener("mouseenter", () => {
    dot.style.backgroundColor = hoverColor;
  });

  dot.addEventListener("mouseleave", () => {
    dot.style.backgroundColor = buttonColor;
  });

  return dot;
}
