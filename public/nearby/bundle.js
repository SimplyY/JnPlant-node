setInterval(function () {
    var location = andriod.getCurrentLocation();
    andriod.webToast('test');
    andriod.webToast(location.longitude.toString() + location.latitude.toString())
}, 100);
