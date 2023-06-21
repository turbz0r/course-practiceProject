import { openModal, modalClose } from './modal';

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

        openModal();

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
            modalClose();
        }, 4000);
    }

    // fetch('http://localhost:3000/menu')
    //     .then((data) => data.json())
    //     .then((res) => console.log(res));
}

export default forms;
