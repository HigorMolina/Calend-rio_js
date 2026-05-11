export default function Dot(title, buttonColor, hoverColor) {
  // TODO: MUDAR PARA BUTTON
  const dot = document.createElement("div");

  dot.textContent = title;

  dot.style.cssText = `
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

  dot.addEventListener("mouseenter", () => {
    dot.style.backgroundColor = hoverColor;
  });

  dot.addEventListener("mouseleave", () => {
    dot.style.backgroundColor = buttonColor;
  });

  return dot;
}
