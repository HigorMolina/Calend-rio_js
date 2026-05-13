import { ButtonUpBack, ButtonLeave } from "./button.js";

export default function Panel(
  id,
  title,
  bg,
  buttonColor,
  hoverColor,
  canBack = true,
  callbacks = {},
) {
  const { onLeave, onUp, onDown } = callbacks;

  const panel = document.createElement("div");
  panel.id = id;
  panel.classList.add("panel");
  panel.style.backgroundColor = bg;

  const header = document.createElement("header");
  header.style.cssText = `
    display: flex;
    gap:1em;
    align-items: center;
    justify-content: space-between;
    height:50px
  `;

  if (!canBack) {
    const p = document.createElement("p");
    p.textContent = title;
    p.classList.add("button-leave");
    p.style.cssText = `
      background-color: ${buttonColor};
    `;
    header.appendChild(p);
  } else {
    panel.classList.toggle("hide");
    header.appendChild(
      ButtonLeave(`${id}-leave`, title, buttonColor, hoverColor, () => {
        if (onLeave) {
          onLeave();
        } else {
          panel.classList.add("hide");
        }
      }),
    );
  }

  if (onUp || onDown) {
    const buttonGroup = document.createElement("div");
    buttonGroup.style.cssText = `
      display: flex;
      gap: 1em;
    `;

    if (onUp) {
      buttonGroup.appendChild(
        ButtonUpBack(`${id}-up`, "up", buttonColor, hoverColor, onUp),
      );
    }

    if (onDown) {
      buttonGroup.appendChild(
        ButtonUpBack(`${id}-down`, "down", buttonColor, hoverColor, onDown),
      );
    }

    header.appendChild(buttonGroup);
  }

  panel.appendChild(header);

  return panel;
}
