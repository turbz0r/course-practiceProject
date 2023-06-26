require('es6-promise').polyfill();
import 'nodelist-foreach-polyfill';

import calc from './modules/calc';
import cards from './modules/cards';
import forms from './modules/forms';
import modal from './modules/modal';
import slider from './modules/slider';
import sliderNav from './modules/sliderNav';
import tabs from './modules/tabs';
import timer from './modules/timer';

window.addEventListener('DOMContentLoaded', () => {
    calc('.calculating__result span', '.calculating__field', '#gender div', '.calculating__choose_medium input', '.calculating__choose_big div');
    cards('.menu__field', '.container');
    forms('form');
    modal();
    slider({
        slidesElements: '.offer__slide',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        totalSpan: '#total',
        currentSpan: '#current',
        fieldSlides: '.offer__slider-inner',
        wrapperSlides: '.offer__slider-wrapper',
    });
    sliderNav();
    tabs('.tabheader__item', '.tabcontent', '.tabheader__items');
    timer('2023-07-01:12:00:00');
});
