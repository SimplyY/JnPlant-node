window.onload = function () {
    setInterval(function () {
        var longitude, latitude;
        if (android.getCurrentLongitude() !== ""){
            longitude = android.getCurrentLongitude();
            latitude = android.getCurrentLatitude();
            android.webToast(longitude);
            android.webToast(latitude);
            android.webToast('定位成功');
        }
    }, 8000);
}
