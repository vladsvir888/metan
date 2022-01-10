// normalize.css
import "normalize.css";

// animate.css
import "animate.css";

// wow.js
import Wow from 'wow.js';

// parallax.js
import Parallax from 'parallax-js'

// styles
import "./styles/style.scss";

// modules
import form from "./modules/form";
import lazyImages from "./modules/lazyImages";
import slider from "./modules/slider";

document.addEventListener('DOMContentLoaded', () => {
    form();
    lazyImages();
    slider();

    // parallax.js
    const scene = document.getElementById('scene');
    new Parallax(scene, {
        hoverOnly: true,
    });

    // wow.js
    new Wow().init();
});