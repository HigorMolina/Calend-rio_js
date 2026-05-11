export function ButtonUpBack(id, type, hoverColor, callback) {
  const icon = document.createElement("i");

  switch (type) {
    case "up":
      icon.className = "fa-solid fa-chevron-up";
      break;
    case "down":
      icon.className = "fa-solid fa-chevron-down";
      break;
  }

  const btn = document.createElement("button");

  btn.id = id;

  btn.style.cssText = `
    background-color: transparent;
    border: 0;
    padding: 1em;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    transition: all 0.5s;
    cursor: pointer;
  `;

  btn.appendChild(icon);

  btn.addEventListener("click", () => callback());

  btn.addEventListener("mouseenter", () => {
    btn.style.backgroundColor = hoverColor;
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.backgroundColor = "transparent";
  });

  return btn;
}

export function ButtonLeave(id, title, hoverColor, callback) {
  const btn = document.createElement("button");

  btn.id = id;
  btn.textContent = title;

  btn.style.cssText = `
    cursor: pointer;
    font-size: 24px;
    background-color: transparent;
    border: 0;
    padding: 8px;
    display: flex;
    border-radius: 8px;
    flex: 1;
    transition: all 0.5s;
  `;

  btn.addEventListener("click", () => callback());

  btn.addEventListener("mouseenter", () => {
    btn.style.backgroundColor = hoverColor;
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.backgroundColor = "transparent";
  });

  return btn;
}
