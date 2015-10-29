function loaded() {
    setTimeout(function () {
        window.mySceneScroll = new IScroll('.s-scroller', {
            mouseWheel: true,
            scrollbars: true
        });

        var myCommentSroll = new IScroll('.c-scroller', {
            mouseWheel: true,
            scrollbars: true
        });
    }, 200);
}

document.addEventListener('touchmove', function(e) {
    e.preventDefault();
}, false);
