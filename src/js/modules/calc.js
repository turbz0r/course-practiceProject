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

export default calc;
