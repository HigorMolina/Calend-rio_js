export default function Dot(title, buttonColor, hoverColor, circle = false) {
  // TODO: MUDAR PARA BUTTON
  const dot = document.createElement("div");

  dot.textContent = title;

  const baseCss = `
    display: flex;
    background-color: ${buttonColor};
    cursor: pointer;
    align-items: center;
    justify-content: center;
    padding: 1em;
    border-radius: 0.5em;
    font-size: 20px;
    font-weight: semi-bold;
    transition: all 0.5s;
    `;

  if (circle) {
    dot.style.cssText = `
    ${baseCss}
    border-radius: 100%;
    aspect-ratio: 1/1;
    `;
  } else {
    dot.style.cssText = baseCss;
  }

  dot.addEventListener("mouseenter", () => {
    dot.style.backgroundColor = hoverColor;
  });

  dot.addEventListener("mouseleave", () => {
    dot.style.backgroundColor = buttonColor;
  });

  return dot;
}
