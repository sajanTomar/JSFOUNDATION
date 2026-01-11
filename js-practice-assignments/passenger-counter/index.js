const countEl = document.getElementById("count");
const modal = document.getElementById("modal");
const modalText = document.getElementById("modalText");
const confirmBtn = document.getElementById("confirmBtn");
const cancelBtn = document.getElementById("cancelBtn");
const buttons = document.querySelector(".buttons");
const labels = {
  inc: "increase the count",
  dec: "decrease the count",
  reset: "reset the counter"
};

let state = {
    count: 0
};
let pendingAction = null;

const actions = {
    inc: () => state.count++,
    dec: () => state.count = Math.max(0, state.count - 1),
    reset: () => state.count = 0
};

function render() {
  countEl.textContent = state.count;
  countEl.classList.add("bump");
  setTimeout(() => countEl.classList.remove("bump"), 150);
}

function openModal(actionKey) {
  pendingAction = actionKey;
  modalText.textContent = `Are you sure you want to ${labels[actionKey]}?`;
  modal.classList.add("active");
}

function closeModal() {
  modal.classList.remove("active");
  pendingAction = null;
}

confirmBtn.addEventListener("click", () => {
  if (!pendingAction) return;

  actions[pendingAction]();
  render();
  closeModal();
});

cancelBtn.addEventListener("click", closeModal);

buttons.addEventListener("click", (e) => {
  const action = e.target.dataset.action;
  if (!action) return;
  openModal(action);
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("active")) {
    closeModal();
  }
});
