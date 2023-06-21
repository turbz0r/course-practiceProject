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
export default tabs;
