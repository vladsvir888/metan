export default () => {
    const burger = document.querySelector('.hamburger');
    const menu = document.querySelector('.burger-menu');
    const closeBtn = document.querySelector('.burger-menu__btn-close');
    const overlay = document.querySelector('.burger-menu__overlay');

    function openMenu() {
        menu.classList.add('is-active');
        document.querySelector('body').classList.add('no-scroll');
        window.addEventListener('keydown', pressedEscHandler);
    }

    function closeMenu() {
        menu.classList.remove('is-active');
        document.querySelector('body').classList.remove('no-scroll');
        window.removeEventListener('keydown', pressedEscHandler);
    }

    function pressedEscHandler(e) {
        if (e.key === 'Escape') {
            closeMenu();
        }
    }

    if (burger) {
        burger.addEventListener('click', () => {
            openMenu();
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            closeMenu();
        });
    }

    if (overlay) {
        overlay.addEventListener('click', (e) => {
            if (e.target.classList.contains('burger-menu__overlay')) {
                closeMenu();
            }
        });
    }
};