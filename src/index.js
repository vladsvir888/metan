// normalize.css
import 'normalize.css';

// animate.css
import 'animate.css';

// wow.js
import Wow from 'wow.js';

// parallax.js
import Parallax from 'parallax-js';

// font-awesome
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

library.add([faAngleUp]);

dom.watch();

// styles
import './styles/style.scss';

// modules
import form from './modules/form';
import lazyImages from './modules/lazyImages';
import slider from './modules/slider';
import ymaps from './modules/ymaps';
import topBtn from './modules/topBtn';
import scrollTo from './modules/scrollTo';
import header from './modules/header';
import burgerMenu from './modules/burgerMenu';
import modal from './modules/modal';

document.addEventListener('DOMContentLoaded', () => {
    form();
    lazyImages();
    slider();
    ymaps();
    topBtn();
    scrollTo();
    header();
    burgerMenu();
    modal();

    // parallax.js
    const scene = document.getElementById('scene');
    new Parallax(scene, {
        hoverOnly: true,
    });

    // wow.js
    new Wow().init();
});