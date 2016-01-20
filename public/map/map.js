var map = new AMap.Map('container',{
    zoom: 15,
    center: [120.271213,31.483745]
});

var params = getQureyParams(document.URL);

var apiUrl = 'http://121.40.224.83:8080/JnPlant/api/';
var iconURL = 'http://7xkpdt.com1.z0.glb.clouddn.com/bd8d4f61d3f8a25a3926e899e487a187.png';


if (params.sceneId !== undefined) {
    var qureyUrl = apiUrl + 'scene/' + params.sceneId;
}
if (params.plantId !== undefined){
    var qureyUrl = apiUrl + 'plant/' + params.sceneId;
}


$.get(qureyUrl, function (data) {
    if (data.title === undefined) {
        title = data.name;
    }

    var title = data.title;
    var position = [data.longitude, data.latitude];
    var contentTemplate = '<div>' + title + '</div>';

    var iconMarker = new AMap.Marker({
         position: position,
         map: map,
         icon: iconURL
    });

    var contentMarker = new AMap.Marker({
        position: position,
        map: map,
        content: contentTemplate,
        offset: new AMap.Pixel(-20,5)
    });
});

function getQureyParams(url) {
    var searchParams = {};

    var qurey = url.split('?');
    // scene_id=1&user_id=2
    qurey = qurey[qurey.length -1];

    var params = qurey.split('&');
    for (var i = 0; i < params.length; i++) {
        // scene_id=1
        var keyValue = params[i].split('=');
        searchParams[keyValue[0]] = keyValue[1];
    }

    return searchParams;
}
