export default () => {
    const modalBtns = document.querySelectorAll('[data-modal]');

    modalBtns.forEach(modalBtn => {
        modalBtn.addEventListener('click', () => {
            const modal = document.querySelector('.modal');
            const body =  document.querySelector('body');

            if (modal === null) return;

            modal.classList.add('modal-show');

            document.querySelector('.modal__btn-close').addEventListener('click', () => {
                modal.classList.remove('modal-show');
                body.removeEventListener('keydown', pressedEscHandler);
            });

            document.querySelector('.modal-overlay').addEventListener('click', () => {
                modal.classList.remove('modal-show');
                body.removeEventListener('keydown', pressedEscHandler);
            });

            document.querySelector('body').addEventListener('keydown', pressedEscHandler);

            function pressedEscHandler(e) {
                if (e.key === 'Escape') {
                    modal.classList.remove('modal-show');
                }
                body.removeEventListener('keydown', pressedEscHandler);
            }
        });
    });
};