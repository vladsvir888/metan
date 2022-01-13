export default () => {
    document.querySelectorAll('a[href*="#"]:not([href$="#"])').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });

            const activeMenu = document.querySelector('.burger-menu.is-active');

            if (activeMenu) {
                activeMenu.classList.remove('is-active');
                document.querySelector('body').classList.remove('no-scroll');
            }
        });
    });
};