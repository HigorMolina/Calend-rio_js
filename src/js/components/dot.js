export default function Dot(title, hoverColor) {
  // TODO: MUDAR PARA BUTTON
  const dot = document.createElement("div");

  dot.textContent = title;

  dot.style.cssText = `
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    padding: 1em;
    aspect-ratio: 1/1;
    border-radius: 1em;
    font-size: 1.5em;
    font-weight: semi-bold;
    transition: all 0.5s;
    `;

  dot.addEventListener("mouseenter", () => {
    dot.style.backgroundColor = hoverColor;
  });

  dot.addEventListener("mouseleave", () => {
    dot.style.backgroundColor = "transparent";
  });

  return dot;
}
