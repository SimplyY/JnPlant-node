(function() {
    var love_num = parseInt($('.love-num').text());
    var isClicked = false;
    var currentpage = $('#scene-page');

    $('#love-icon').tap(function() {
        if (isClicked === false) {
            $('.love').removeClass('fa-heart-o').addClass('fa-heart').css('color', '#FF0066');

            love_num = love_num + 1;
            $('.love-num').text(love_num);
            isClicked = true;
        } else if (isClicked === true) {
            $('.love').removeClass('fa-heart').addClass('fa-heart-o').css('color', '#ffffff');

            love_num = love_num - 1;
            $('.love-num').text(love_num);
            isClicked = false;
        }
    });

})();
