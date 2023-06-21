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

export default modal;
export { openModal };
export { modalClose };
