// Modal (pop-up) open and close logic
const openModal = (modal, closeModal) => {

    window.addEventListener("load", () => {     // Open modal

        modal.showModal();

    });

    closeModal.addEventListener("click", () => {        // Close modal

        modal.close();

    });

};

export default openModal;