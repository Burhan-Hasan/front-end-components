var tabSlider = (function () {
    /**
     *
     */
    function tabSlider(_a) {
        var container = _a.container;
        this.initEvents(container);
    }
    tabSlider.prototype.initEvents = function (container) {
        container.onclick = this.tabClick;
    };
    //EVENTS
    tabSlider.prototype.tabClick = function (e) {
        var target = e.target;
        var tabBtn = target.closest('.tab-button');
        if (tabBtn) {
            var tabFor = tabBtn.getAttribute('tab-for');
            var content = document.getElementById(tabFor);
            var contents = content.parentElement.children;
            for (var i = 0; i < contents.length; i++) {
                contents[i].removeAttribute('active');
            }
            content.setAttribute('active', '');
        }
    };
    return tabSlider;
}());
