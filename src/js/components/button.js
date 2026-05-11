export function ButtonUpBack(id, type, buttonColor, hoverColor, callback) {
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

  btn.classList.add("button-up-down");

  btn.style.cssText = `
    background-color: ${buttonColor};
  `;

  btn.appendChild(icon);

  btn.addEventListener("click", () => callback());

  btn.addEventListener("mouseenter", () => {
    btn.style.backgroundColor = hoverColor;
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.backgroundColor = buttonColor;
  });

  return btn;
}

export function ButtonLeave(id, title, buttonColor, hoverColor, callback) {
  const btn = document.createElement("button");

  btn.id = id;
  btn.textContent = title;

  btn.classList.add("button-leave");
  btn.style.cssText = `
    background-color: ${buttonColor};
  `;

  btn.addEventListener("click", () => callback());

  btn.addEventListener("mouseenter", () => {
    btn.style.backgroundColor = hoverColor;
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.backgroundColor = buttonColor;
  });

  return btn;
}
