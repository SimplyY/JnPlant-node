(function() {
    var params = getQureyParams(window.location.href);
    var sceneId = params.sceneId;
    var sceneUrl = 'http://121.40.224.83:8080/JnPlant/api/scene/' + sceneId;
    console.log(sceneUrl);

    $.get(sceneUrl, function(data) {
        console.log(data.article);
        paddingSceneInfo(data);
    });

    function paddingSceneInfo(data) {
        $('.top-img').attr('src', data.imgUrl);
        $(".title").html(markdown.toHTML("##" + data.title));
        $(".author").html(markdown.toHTML("- 作者：" + data.authorName));
        $(".location").html(markdown.toHTML("- 地点：" + data.location));
        $(".month").html(markdown.toHTML("- 月份：" + data.month.toString()));
        $(".season").html(markdown.toHTML("- 季节："+ data.season));
        $("#article-md-preview").html(markdown.toHTML(data.article));
        setTimeout(function(){
            if(window.mySceneScroll){
                window.mySceneScroll.refresh();
            }
        },0);
    }

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
}());
