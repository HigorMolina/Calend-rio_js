const appointments = [];

const modalOverlayTemplate = () => {
  const overlay = document.createElement("div");
  overlay.className = "modal-overlay";
  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) {
      closeModals();
    }
  });
  return overlay;
};

let appointmentFormOverlay;
let appointmentsListOverlay;
let appointmentForm;
let appointmentListContainer;
let selectedDateLabel;
let editingAppointmentId = null;

function init() {
  const header = document.querySelector(".main-header");
  if (!header) return;

  const viewButton = header.querySelector("nav ul li button");
  if (viewButton) {
    viewButton.addEventListener("click", openAppointmentsModal);
  }

  createModals();
}

function createModals() {
  appointmentFormOverlay = modalOverlayTemplate();
  appointmentsListOverlay = modalOverlayTemplate();

  appointmentFormOverlay.innerHTML = `
    <div class="modal-card">
      <header class="modal-header">
        <h2>Agendar compromisso</h2>
        <button class="modal-close" type="button" aria-label="Fechar">×</button>
      </header>
      <div class="modal-body">
        <p class="modal-date"></p>
        <label>
          Título
          <input type="text" name="title" placeholder="Tarefa" />
        </label>
        <label>
          Início
          <input type="time" name="startTime" />
        </label>
        <label>
          Fim
          <input type="time" name="endTime" />
        </label>
        <p class="modal-warning" style="color: #ff6b6b; display: none;"></p>
      </div>
      <footer class="modal-actions">
        <button class="modal-button modal-cancel" type="button">Cancelar</button>
        <button class="modal-button modal-save" type="button">Salvar</button>
      </footer>
    </div>
  `;

  appointmentsListOverlay.innerHTML = `
    <div class="modal-card modal-card--wide">
      <header class="modal-header">
        <h2>Compromissos</h2>
        <button class="modal-close" type="button" aria-label="Fechar">×</button>
      </header>
      <div class="modal-body modal-list-body">
        <div class="modal-list"></div>
      </div>
      <footer class="modal-actions">
        <button class="modal-button modal-close-button" type="button">Fechar</button>
      </footer>
    </div>
  `;

  document.body.appendChild(appointmentFormOverlay);
  document.body.appendChild(appointmentsListOverlay);

  appointmentForm = appointmentFormOverlay.querySelector(".modal-card");
  appointmentListContainer =
    appointmentsListOverlay.querySelector(".modal-list");
  selectedDateLabel = appointmentFormOverlay.querySelector(".modal-date");

  appointmentFormOverlay
    .querySelector(".modal-close")
    .addEventListener("click", closeModals);
  appointmentFormOverlay
    .querySelector(".modal-cancel")
    .addEventListener("click", closeModals);
  appointmentFormOverlay
    .querySelector(".modal-save")
    .addEventListener("click", saveAppointment);

  appointmentsListOverlay.querySelectorAll(".modal-close").forEach((button) => {
    button.addEventListener("click", closeModals);
  });
  appointmentsListOverlay
    .querySelector(".modal-close-button")
    .addEventListener("click", closeModals);
}

function openAppointmentModal(
  { year, month, monthName, day },
  appointment = null,
) {
  if (!appointmentFormOverlay) {
    createModals();
  }

  appointmentFormOverlay.classList.add("open");
  appointmentsListOverlay.classList.remove("open");

  selectedDateLabel.textContent = `${day} de ${monthName} de ${year}`;
  appointmentForm.dataset.year = year;
  appointmentForm.dataset.month = month;
  appointmentForm.dataset.monthName = monthName;
  appointmentForm.dataset.day = day;

  const titleInput = appointmentForm.querySelector("input[name='title']");
  const startInput = appointmentForm.querySelector("input[name='startTime']");
  const endInput = appointmentForm.querySelector("input[name='endTime']");
  const warning = appointmentForm.querySelector(".modal-warning");

  if (appointment) {
    editingAppointmentId = appointment.id;
    titleInput.value = appointment.title;
    startInput.value = appointment.startTime;
    endInput.value = appointment.endTime;
  } else {
    editingAppointmentId = null;
    titleInput.value = "";
    startInput.value = "";
    endInput.value = "";
  }

  warning.style.display = "none";
  titleInput.focus();
}

function openAppointmentsModal() {
  if (!appointmentsListOverlay) {
    createModals();
  }
  renderAppointments();
  appointmentsListOverlay.classList.add("open");
  appointmentFormOverlay.classList.remove("open");
}

function closeModals() {
  if (appointmentFormOverlay) appointmentFormOverlay.classList.remove("open");
  if (appointmentsListOverlay) appointmentsListOverlay.classList.remove("open");
  editingAppointmentId = null;
}

function hasTimeConflict(newAppointment, excludeId = null) {
  return appointments.some((appointment) => {
    if (excludeId && appointment.id === excludeId) return false;
    if (
      appointment.year !== newAppointment.year ||
      appointment.month !== newAppointment.month ||
      appointment.day !== newAppointment.day
    ) {
      return false;
    }
    const newStart = newAppointment.startTime;
    const newEnd = newAppointment.endTime;
    const existingStart = appointment.startTime;
    const existingEnd = appointment.endTime;
    return newStart < existingEnd && newEnd > existingStart;
  });
}

function saveAppointment() {
  const title = appointmentForm
    .querySelector("input[name='title']")
    .value.trim();
  const startTime = appointmentForm.querySelector(
    "input[name='startTime']",
  ).value;
  const endTime = appointmentForm.querySelector("input[name='endTime']").value;
  const year = Number(appointmentForm.dataset.year);
  const month = Number(appointmentForm.dataset.month);
  const monthName = appointmentForm.dataset.monthName;
  const day = Number(appointmentForm.dataset.day);
  const warning = appointmentForm.querySelector(".modal-warning");

  if (!title || !startTime || !endTime) {
    return;
  }

  const newAppointment = {
    title,
    startTime,
    endTime,
    year,
    month,
    monthName,
    day,
  };

  if (hasTimeConflict(newAppointment, editingAppointmentId)) {
    warning.textContent =
      "Conflito de horário! Já existe um compromisso neste período.";
    warning.style.display = "block";
    return;
  }

  if (editingAppointmentId) {
    const index = appointments.findIndex(
      (app) => app.id === editingAppointmentId,
    );
    if (index !== -1) {
      appointments[index] = { ...newAppointment, id: editingAppointmentId };
    }
  } else {
    newAppointment.id = Date.now();
    appointments.push(newAppointment);
  }

  closeModals();
}

function editAppointment(appointment) {
  openAppointmentModal(
    {
      year: appointment.year,
      month: appointment.month,
      monthName: appointment.monthName,
      day: appointment.day,
    },
    appointment,
  );
}

function deleteAppointment(id) {
  if (confirm("Tem certeza que deseja deletar este compromisso?")) {
    const index = appointments.findIndex((app) => app.id === id);
    if (index !== -1) {
      appointments.splice(index, 1);
      renderAppointments();
    }
  }
}

function renderAppointments() {
  appointmentListContainer.innerHTML = "";

  if (appointments.length === 0) {
    appointmentListContainer.textContent =
      "Nenhum compromisso agendado nesta sessão.";
    return;
  }

  appointments.forEach((appointment) => {
    const item = document.createElement("div");
    item.className = "appointment-item";
    item.innerHTML = `
      <div class="appointment-info">
        <strong>${appointment.title}</strong>
        <span>${appointment.day} de ${appointment.monthName} de ${appointment.year}</span>
        <span>${appointment.startTime} - ${appointment.endTime}</span>
      </div>
      <div class="appointment-actions">
        <button class="modal-button modal-edit" data-id="${appointment.id}">Editar</button>
        <button class="modal-button modal-delete" data-id="${appointment.id}">Deletar</button>
      </div>
    `;
    item
      .querySelector(".modal-edit")
      .addEventListener("click", () => editAppointment(appointment));
    item
      .querySelector(".modal-delete")
      .addEventListener("click", () => deleteAppointment(appointment.id));
    appointmentListContainer.appendChild(item);
  });
}

export default {
  init,
  openAppointmentModal,
};
