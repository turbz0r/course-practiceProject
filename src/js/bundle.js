/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/calc.js":
/*!********************************!*\
  !*** ./src/js/modules/calc.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function calc(resultElement, inputfield, fieldGender, fieldInputs, fieldPhysical) {
    const calcResult = document.querySelector(resultElement),
        calcField = document.querySelector(inputfield),
        calcGender = calcField.querySelectorAll(fieldGender),
        calcInputs = calcField.querySelectorAll(fieldInputs),
        calcPhysical = calcField.querySelectorAll(fieldPhysical);

    let gender, height, weight, age, physical;

    if (localStorage.getItem('gender')) {
        gender = localStorage.getItem('gender');
    } else {
        gender = 'female';
        localStorage.setItem('gender', 'female');
    }

    if (localStorage.getItem('physical')) {
        physical = localStorage.getItem('physical');
    } else {
        physical = 1.375;
        localStorage.setItem('physical', 1.375);
    }

    function checkLocalSettings() {
        if (localStorage.getItem('gender')) {
            calcGender.forEach((item) => {
                item.classList.remove('calculating__choose-item_active');
                if (item.getAttribute('id') === localStorage.getItem('gender')) {
                    item.classList.add('calculating__choose-item_active');
                }
            });
        }

        if (localStorage.getItem('physical')) {
            calcPhysical.forEach((item) => {
                item.classList.remove('calculating__choose-item_active');
                if (item.getAttribute('data-ratio') === localStorage.getItem('physical')) {
                    item.classList.add('calculating__choose-item_active');
                }
            });
        }
    }

    checkLocalSettings();

    function totalCalculation() {
        if (!gender || !height || !weight || !age || !physical) {
            calcResult.textContent = `----`;
            return;
        } else {
            if (gender === 'female') {
                calcResult.textContent = ((447.6 + 9.2 * weight + 3.1 * height - 4.3 * age) * physical).toFixed();
            } else {
                calcResult.textContent = ((88.36 + 13.4 * weight + 4.8 * height - 5.7 * age) * physical).toFixed();
            }
        }
    }

    totalCalculation();

    calcGender.forEach((item) => {
        item.addEventListener('click', (event) => {
            calcGender.forEach((item) => item.classList.remove('calculating__choose-item_active'));
            event.target.classList.add('calculating__choose-item_active');
            gender = event.target.getAttribute('id');

            localStorage.setItem('gender', event.target.getAttribute('id'));

            totalCalculation();
        });
    });

    calcPhysical.forEach((item) => {
        item.addEventListener('click', (event) => {
            calcPhysical.forEach((item) => item.classList.remove('calculating__choose-item_active'));
            event.target.classList.add('calculating__choose-item_active');
            physical = event.target.getAttribute('data-ratio');

            localStorage.setItem('physical', +event.target.getAttribute('data-ratio'));

            totalCalculation();
        });
    });

    calcInputs.forEach((item) => {
        if (item.id === 'height') {
            item.addEventListener('input', (event) => {
                if (item.value.match(/\D/g)) {
                    item.style.border = '1px solid red';
                } else {
                    item.style.border = 'none';
                }
                height = +item.value;
                totalCalculation();
            });
        } else if (item.id === 'weight') {
            item.addEventListener('input', (event) => {
                if (item.value.match(/\D/g)) {
                    item.style.border = '1px solid red';
                } else {
                    item.style.border = 'none';
                }
                weight = +item.value;
                totalCalculation();
            });
        } else if (item.id === 'age') {
            item.addEventListener('input', (event) => {
                if (item.value.match(/\D/g)) {
                    item.style.border = '1px solid red';
                } else {
                    item.style.border = 'none';
                }
                age = +item.value;
                totalCalculation();
            });
        }
    });

    // let gender = 'female',
    //     height,
    //     weigth,
    //     age,
    //     ratio = 1.375;

    // function calculateTotal() {
    //     if (!gender || !height || !weigth || !age || !ratio) {
    //         calcResult.textContent = `----`;
    //         return;
    //     }

    //     if (gender === 'female') {
    //         calcResult.textContent = ((447.6 + 9.2 * weigth + 3.1 * height - 4.3 * age) * ratio).toFixed();
    //     } else {
    //         calcResult.textContent = ((88.36 + 13.4 * weigth + 4.8 * height - 5.7 * age) * ratio).toFixed();
    //     }
    // }

    // calculateTotal();

    // function getStaticInformation(parentSelector, activeClass) {
    //     const elements = document.querySelectorAll(`${parentSelector} div`);

    //     elements.forEach((elem) => {
    //         elem.addEventListener('click', (event) => {
    //             if (event.target.getAttribute('data-ratio')) {
    //                 ratio = +event.target.getAttribute('data-ratio');
    //             } else {
    //                 gender = event.target.getAttribute('id');
    //             }

    //             elements.forEach((element) => {
    //                 element.classList.remove(activeClass);
    //             });

    //             event.target.classList.add(activeClass);

    //             calculateTotal();
    //         });
    //     });
    // }

    // getStaticInformation('#gender', 'calculating__choose-item_active');
    // getStaticInformation('.calculating__choose_big', 'calculating__choose-item_active');

    // function getDynamicInformation(selector) {
    //     const input = document.querySelector(selector);

    //     input.addEventListener('input', () => {
    //         switch (input.getAttribute('id')) {
    //             case 'height':
    //                 height = +input.value;
    //                 break;
    //             case 'weight':
    //                 weigth = +input.value;
    //                 break;
    //             case 'age':
    //                 age = +input.value;
    //                 break;
    //         }
    //         calculateTotal();
    //     });
    // }

    // getDynamicInformation('#height');
    // getDynamicInformation('#weight');
    // getDynamicInformation('#age');
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);


/***/ }),

/***/ "./src/js/modules/cards.js":
/*!*********************************!*\
  !*** ./src/js/modules/cards.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function cards(field, container) {
    const menuField = document.querySelector(field),
        menuContainer = menuField.querySelector(container);

    class MenuCard {
        constructor(itemImage, itemTitle, itemDesc, itemPrice) {
            this.itemImage = itemImage;
            this.itemTitle = itemTitle;
            this.itemDesc = itemDesc;
            this.itemPrice = itemPrice;
        }

        appendCard() {
            const card = document.createElement('div');
            card.classList.add('menu__item');
            const cardDivider = document.createElement('div');
            cardDivider.classList.add('menu__item-divider');

            const cardImage = document.createElement('img'),
                cardTitle = document.createElement('h3'),
                cardDesc = document.createElement('div'),
                cardPrice = document.createElement('div');
            const cardPriceCost = document.createElement('div'),
                cardPriceTotal = document.createElement('div');

            cardTitle.classList.add('menu__item-subtitle');
            cardDesc.classList.add('menu__item-descr');
            cardPrice.classList.add('menu__item-price');
            cardPriceCost.classList.add('menu__item-cost');
            cardPriceTotal.classList.add('menu__item-total');

            cardPriceCost.textContent = 'Цена:';
            cardPriceTotal.innerHTML = `<span>${this.itemPrice}</span> грн/день `;
            cardPrice.append(cardPriceCost);
            cardPrice.append(cardPriceTotal);

            cardImage.setAttribute('src', this.itemImage);
            cardTitle.textContent = this.itemTitle;
            cardDesc.textContent = this.itemDesc;

            card.append(cardImage);
            card.append(cardTitle);
            card.append(cardDesc);
            card.append(cardDivider);
            card.append(cardPrice);

            menuContainer.append(card);
        }
    }

    const getResource = async (url) => {
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Error ocurred.\n${url} could not fetch data.\n Status: ${res.status}`);
        }

        return await res.json();
    };

    getResource('http://localhost:3000/menu').then((data) => {
        data.forEach(({ img, title, descr, price }) => {
            new MenuCard(img, title, descr, price).appendCard();
        });
    });

    // axios.get('http://localhost:3000/menu').then((response) => {
    //     response.data.forEach(({ img, title, descr, price }) => {
    //         new MenuCard(img, title, descr, price).appendCard();
    //     });
    // });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cards);


/***/ }),

/***/ "./src/js/modules/forms.js":
/*!*********************************!*\
  !*** ./src/js/modules/forms.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./src/js/modules/modal.js");


function forms(form) {
    const forms = document.querySelectorAll(form);

    const statusMessages = {
        loading: 'img/form/spinner.svg',
        success: 'Спасибо! Скоро мы с вами свяжемся...',
        failure: 'Что-то пошло не так',
    };

    forms.forEach((item) => {
        bindPostData(item);
    });

    const postData = async (url, data) => {
        const res = await fetch(url, {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: data,
        });
        return await res.json();
    };

    function bindPostData(form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();

            let messageBlock = document.createElement('img');
            messageBlock.src = statusMessages.loading;
            messageBlock.style.cssText = `
            display: block;
            margin: 0 auto;
            `;

            form.append(messageBlock);
            // form.insertAdjacentElement('afterend', messageBlock);

            // request.setRequestHeader('Content-type', 'application/json');

            const formData = new FormData(form);

            const json = JSON.stringify(Object.fromEntries(formData.entries()));

            postData('http://localhost:3000/requests', json)
                .then((data) => {
                    console.log(data);
                    showThanksModal(statusMessages.success);
                    statusMessages.remove();
                })
                .catch(() => {
                    showThanksModal(statusMessages.failure);
                })
                .finally(() => {
                    form.reset();
                });
        });
    }

    function showThanksModal(message) {
        const prevModalDialog = document.querySelector('.modal__dialog');

        prevModalDialog.classList.add('hide');

        (0,_modal__WEBPACK_IMPORTED_MODULE_0__.openModal)();

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
            <div class="modal__content">
                    <div class="modal__close" data-close>×</div>
                    <div class="modal__title">${message}</div>
            </div>
        `;

        document.querySelector('.modal').append(thanksModal);
        setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            (0,_modal__WEBPACK_IMPORTED_MODULE_0__.modalClose)();
        }, 4000);
    }

    // fetch('http://localhost:3000/menu')
    //     .then((data) => data.json())
    //     .then((res) => console.log(res));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forms);


/***/ }),

/***/ "./src/js/modules/modal.js":
/*!*********************************!*\
  !*** ./src/js/modules/modal.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   modalClose: () => (/* binding */ modalClose),
/* harmony export */   openModal: () => (/* binding */ openModal)
/* harmony export */ });
let modalTimer = setTimeout(openModal, 5000);
const modalWindow = document.querySelector('.modal');

function openModal() {
    modalWindow.classList.add('show');
    modalWindow.classList.remove('hide');
    document.body.style.overflow = 'hidden';
    clearInterval(modalTimer);
}

function modalClose() {
    modalWindow.classList.add('hide');
    modalWindow.classList.remove('show');
    document.body.style.overflow = '';
}

function modal() {
    document.addEventListener('click', (event) => {
        if (event.target.tagName === 'BUTTON' && event.target.hasAttribute('data-modal')) {
            openModal();
        }

        if (event.target.classList.contains('modal__close') && event.target.hasAttribute('data-close')) {
            modalClose();
        }
    });

    modalWindow.addEventListener('click', (event) => {
        if (event.target === modalWindow || event.target.getAttribute('data-close') == '') {
            modalClose();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (modalWindow.style.display != 'none' && event.key === 'Escape') {
            modalClose();
        }
    });

    function showModalScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
            openModal();
            window.removeEventListener('scroll', showModalScroll);
        }
    }

    window.addEventListener('scroll', showModalScroll);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);




/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function slider({ slidesElements, nextArrow, prevArrow, totalSpan, currentSpan, fieldSlides, wrapperSlides }) {
    const slides = document.querySelectorAll(slidesElements),
        arrowNext = document.querySelector(nextArrow),
        arrowPrev = document.querySelector(prevArrow),
        spanTotal = document.querySelector(totalSpan),
        spanCurrent = document.querySelector(currentSpan),
        slidesField = document.querySelector(fieldSlides),
        slidesWrapper = document.querySelector(wrapperSlides),
        width = window.getComputedStyle(slidesWrapper).width;

    let slideIndex = 1;
    let offset = 0;

    slidesField.style.width = 100 * slides.length + '%';
    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.5s all ease 0s';

    slidesWrapper.style.overflow = 'hidden';

    if (slides.length < 10) {
        spanTotal.textContent = `0${slides.length}`;
    } else {
        spanTotal.textContent = slides.length;
    }

    slides.forEach((slide) => {
        slide.style.width = width;
    });

    arrowNext.addEventListener('click', () => {
        if (offset === +width.replace(/\D/g, '') * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += +width.replace(/\D/g, '');
        }

        if (slideIndex === slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }

        if (slides.length < 10) {
            spanCurrent.textContent = `0${slideIndex}`;
        } else {
            spanCurrent.textContent = slideIndex;
        }

        slidesField.style.transform = `translateX(-${offset}px)`;
    });

    arrowPrev.addEventListener('click', () => {
        if (offset === 0) {
            offset = +width.replace(/\D/g, '') * (slides.length - 1);
        } else {
            offset -= +width.replace(/\D/g, '');
        }

        if (slideIndex === 1) {
            slideIndex = slides.length;
        } else {
            slideIndex--;
        }

        if (slides.length < 10) {
            spanCurrent.textContent = `0${slideIndex}`;
        } else {
            spanCurrent.textContent = slideIndex;
        }

        slidesField.style.transform = `translateX(-${offset}px)`;
    });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);


/***/ }),

/***/ "./src/js/modules/sliderNav.js":
/*!*************************************!*\
  !*** ./src/js/modules/sliderNav.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function sliderNav() {
    const slider = document.querySelector('.offer__slider'),
        slides = document.querySelectorAll('.offer__slide'),
        indicator = document.createElement('div');
    let spanTotal = document.querySelector('#total'),
        spanCurrent = document.querySelector('#current');
    const slidesWrapper = document.querySelector('.offer__slider-wrapper');
    let width = window.getComputedStyle(slidesWrapper).width;
    const slidesField = document.querySelector('.offer__slider-inner');
    let slideIndex = 1;
    let offset = 0;

    indicator.classList.add('carousel-indicators');
    slider.style.position = 'relative';
    slider.append(indicator);

    slides.forEach((item, index) => {
        let dot = document.createElement('div');
        dot.classList.add('dot');
        indicator.append(dot);
    });

    const dots = document.querySelectorAll('.dot');

    dots.forEach((item, index) => {
        item.addEventListener('click', () => {
            // slides.forEach((item) => {
            //     item.style.display = 'none';
            // });
            // slides[index].style.display = 'block';
            dots.forEach((item, index) => {
                item.style.opacity = '.5';
            });

            item.style.opacity = 1;

            offset = +width.replace(/\D/g, '') * index;

            slidesField.style.transform = `translateX(-${offset}px)`;

            if (slides.length < 10) {
                spanCurrent.textContent = `0${index + 1}`;
            } else {
                spanCurrent.textContent = index + 1;
            }
        });
    });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sliderNav);


/***/ }),

/***/ "./src/js/modules/tabs.js":
/*!********************************!*\
  !*** ./src/js/modules/tabs.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function tabs(mainTabs, contentTabs, parentTabsElement) {
    const tabs = document.querySelectorAll(mainTabs),
        tabsContent = document.querySelectorAll(contentTabs),
        tabsParent = document.querySelector(parentTabsElement);

    function hideTabContent() {
        tabsContent.forEach((item) => {
            item.style.display = 'none';
        });
        tabs.forEach((item) => {
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].style.display = 'block';
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        if (event.target.classList.contains('tabheader__item')) {
            tabs.forEach((item, index) => {
                if (item === event.target) {
                    hideTabContent();
                    showTabContent(index);
                }
            });
        }
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);


/***/ }),

/***/ "./src/js/modules/timer.js":
/*!*********************************!*\
  !*** ./src/js/modules/timer.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function timer(timeEndpoint) {
    function getRemainingTime(endtime) {
        let days, hours, minutes, seconds;

        const t = Date.parse(endtime) - Date.parse(new Date());

        if (t <= 0) {
            days = 0;
            hours = 0;
            minutes = 0;
            seconds = 0;
        } else {
            days = Math.floor(t / (1000 * 60 * 60 * 24));
            hours = Math.floor((t / (1000 * 60 * 60)) % 24);
            minutes = Math.floor((t / 1000 / 60) % 60);
            seconds = Math.floor((t / 1000) % 60);
        }

        return {
            total: t,
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds,
        };
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function zeroNumbersCheck(num) {
            if (num >= 0 && num < 10) {
                return `0${num}`;
            } else {
                return num;
            }
        }

        function updateClock() {
            const t = getRemainingTime(endtime);

            days.textContent = zeroNumbersCheck(t.days);
            hours.textContent = zeroNumbersCheck(t.hours);
            minutes.textContent = zeroNumbersCheck(t.minutes);
            seconds.textContent = zeroNumbersCheck(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock('.timer', timeEndpoint);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/calc */ "./src/js/modules/calc.js");
/* harmony import */ var _modules_cards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/cards */ "./src/js/modules/cards.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/forms */ "./src/js/modules/forms.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/modal */ "./src/js/modules/modal.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/slider */ "./src/js/modules/slider.js");
/* harmony import */ var _modules_sliderNav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/sliderNav */ "./src/js/modules/sliderNav.js");
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/tabs */ "./src/js/modules/tabs.js");
/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/timer */ "./src/js/modules/timer.js");









window.addEventListener('DOMContentLoaded', () => {
    (0,_modules_calc__WEBPACK_IMPORTED_MODULE_0__["default"])('.calculating__result span', '.calculating__field', '#gender div', '.calculating__choose_medium input', '.calculating__choose_big div');
    (0,_modules_cards__WEBPACK_IMPORTED_MODULE_1__["default"])('.menu__field', '.container');
    (0,_modules_forms__WEBPACK_IMPORTED_MODULE_2__["default"])('form');
    (0,_modules_modal__WEBPACK_IMPORTED_MODULE_3__["default"])();
    (0,_modules_slider__WEBPACK_IMPORTED_MODULE_4__["default"])({
        slidesElements: '.offer__slide',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        totalSpan: '#total',
        currentSpan: '#current',
        fieldSlides: '.offer__slider-inner',
        wrapperSlides: '.offer__slider-wrapper',
    });
    (0,_modules_sliderNav__WEBPACK_IMPORTED_MODULE_5__["default"])();
    (0,_modules_tabs__WEBPACK_IMPORTED_MODULE_6__["default"])('.tabheader__item', '.tabcontent', '.tabheader__items');
    (0,_modules_timer__WEBPACK_IMPORTED_MODULE_7__["default"])('2023-07-01:12:00:00');
});

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map