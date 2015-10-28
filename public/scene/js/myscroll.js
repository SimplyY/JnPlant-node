function loaded() {

    setTimeout(function () {
        var myScroll = new IScroll('.s-scroller', {
            mouseWheel: true,
            scrollbars: true
        });

        var mycroll = new IScroll('.c-scroller', {
            mouseWheel: true,
            scrollbars: true
        });
    }, 200);
}

document.addEventListener('touchmove', function(e) {
    e.preventDefault();
}, false);
