// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from 'swiper';

// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// configure Swiper to use modules
Swiper.use([Navigation, Pagination]);

export default () => {
    new Swiper(".promoSlider", {
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    document.querySelector('.swiper-pagination-current').nextSibling.remove();
};