export const openModal = () => {
  const modalOverlay = document.querySelector(".modal-overlay");
  modalOverlay.classList.remove("hidden");
};

export const closeModal = () => {
  const modalOverlay = document.querySelector(".modal-overlay");
  modalOverlay.classList.add("hidden");
};

export const setupModal = () => {
  const closeButton = document.querySelector(".modal-close-button");
  closeButton.addEventListener("click", closeModal);
};
