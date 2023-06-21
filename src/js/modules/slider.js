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

export default slider;
