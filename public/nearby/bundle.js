setInterval(function () {
    var location = andriod.getCurrentLocation();
    var domTest = document.getElementById('test');
    domTest.text = location.longitude.toString() + location.latitude.toString();
}, 100);
