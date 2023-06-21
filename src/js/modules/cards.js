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

export default cards;
