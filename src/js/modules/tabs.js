const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {
    const header = document.querySelector(headerSelector),
        tab = document.querySelectorAll(tabSelector),
        content = document.querySelectorAll(contentSelector);

    function hideTabContent() {
        content.forEach(item => {
            item.style.display = 'none';
        });

        tab.forEach(item => {
            item.classList.remove(activeClass)
        });
    }


    function showContent(i = 0) {
        content[i].style.display = 'block'
        tab[i].classList.add(activeClass)
    }

    hideTabContent();
    showContent();
};
export default tabs();