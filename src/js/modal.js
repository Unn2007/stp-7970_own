(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    links: document.querySelectorAll('.nav-link'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  

  refs.links.forEach(link => {
    if (link) {
      link.addEventListener('click', closeModal);
    }
  });

  function closeModal() {
    refs.modal.classList.add('is-hidden');
  }

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
