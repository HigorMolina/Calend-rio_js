import { ButtonUpBack, ButtonLeave } from "./button.js";

export default function Panel(
  id,
  title,
  bg,
  buttonColor,
  hoverColor,
  canBack = true,
) {
  const panel = document.createElement("div");

  panel.id = id;

  panel.style.cssText = `
  display: flex;
  flex-direction: column;
  gap: 2em;
  flex: 1;
  padding: 1em;
  background-color: ${bg};
  height: 100%;
  `;

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

    panel.appendChild(header);

    return panel;
  }

  const section = document.createElement("section");

  header.appendChild(
    ButtonLeave(`${title}-leave`, title, buttonColor, hoverColor, () =>
      console.log("leave"),
    ),
  );

  const buttonGroup = document.createElement("div");

  buttonGroup.style.cssText = `
    display: flex;
    gap: 1em;
  `;

  const upDownData = [
    {
      id: `${title}-up`,
      type: "up",
      buttonColor,
      hoverColor,
      callback: () => console.log("apertei up"),
    },
    {
      id: `${title}-down`,
      type: "down",
      buttonColor,
      hoverColor,
      callback: () => console.log("apertei down"),
    },
  ];

  upDownData.forEach((btnData) => {
    buttonGroup.appendChild(
      ButtonUpBack(
        btnData.id,
        btnData.type,
        btnData.buttonColor,
        btnData.hoverColor,
        btnData.callback,
      ),
    );
  });

  header.appendChild(buttonGroup);

  section.appendChild(header);

  panel.appendChild(section);

  return panel;
}
