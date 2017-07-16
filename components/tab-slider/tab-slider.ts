class tabSlider {
    /**
     *
     */
    constructor({ container }) {
        this.initEvents(container);
    }

    initEvents(container) {
        container.onclick = this.tabClick;
    }


    //EVENTS
    tabClick(e) {
        let target = e.target;
        let tabBtn = target.closest('.tab-button');
        if (tabBtn) {
            let tabFor = tabBtn.getAttribute('tab-for');
            let content = document.getElementById(tabFor);
            let contents = content.parentElement.children;
            for (let i = 0; i < contents.length; i++) {
                contents[i].removeAttribute('active');
            }
            content.setAttribute('active', '');
        }
    }
}