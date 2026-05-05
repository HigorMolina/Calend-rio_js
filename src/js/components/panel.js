import { ButtonUpBack, ButtonLeave } from "./button.js";

export default function Panel(id, title, bg, hoverColor, content) {
  const panel = document.createElement("div");

  panel.id = id;

  panel.style.cssText = `
  flex: 1;
  padding: 1em;
  background-color: ${bg}`;

  const section = document.createElement("section");

  const header = document.createElement("header");

  header.style.cssText = `
    display: flex;
    gap:1em;
    align-items: center;
    justify-content: space-between;
  `;

  header.appendChild(
    ButtonLeave(`${title}-leave`, title, hoverColor, () =>
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
      hoverColor,
      callback: () => console.log("apertei up"),
    },
    {
      id: `${title}-down`,
      type: "down",
      hoverColor,
      callback: () => console.log("apertei down"),
    },
  ];

  upDownData.forEach((btnData) => {
    buttonGroup.appendChild(
      ButtonUpBack(
        btnData.id,
        btnData.type,
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

// <div class="painel-meses">
//   <section>
//     <header class="date-header">
//       <button class="botao-voltar"><h2>Ano</h2></button>
//       <div class="nav-group">
//         <button class="botao-nav">
//           <i class="fa-solid fa-chevron-up"></i>
//         </button>
//         <button class="botao-nav">
//           <i class="fa-solid fa-chevron-down"></i>
//         </button>
//       </div>
//     </header>
//     <main>Meses</main>
//   </section>
// </div>
