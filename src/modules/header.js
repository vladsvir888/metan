export default () => {
    const targetElement = document.querySelector('.promo');
    const header = document.querySelector('.header');

    if (targetElement && header) {
        const callback = function (entries) {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    header.classList.add('header__fixed');
                    document.querySelector('body').style.paddingTop = `${header.clientHeight}px`;
                } else {
                    header.classList.remove('header__fixed');
                    document.querySelector('body').style.paddingTop = '';
                }
            });
        };
        const observer = new IntersectionObserver(callback, {});
        observer.observe(targetElement);
    }
};