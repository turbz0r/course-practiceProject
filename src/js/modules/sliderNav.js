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

export default sliderNav;
