!function(o){function n(e){if(A[e])return A[e].exports;var t=A[e]={exports:{},id:e,loaded:!1};return o[e].call(t.exports,t,t.exports,n),t.loaded=!0,t.exports}var A={};return n.m=o,n.c=A,n.p="",n(0)}([function(o,n,A){function e(o){c.scene&&c.user&&t()}function t(){a.back(),a.paddingSceneInfo(i.data),a.setClickLoveEvent(i.data,l.data,r)}function r(o,n){if(i.setLoveNumberInServer(o,i.sceneId),n)l.data.loveScenesIds.push(i.data._id);else{var A=$.inArray(i.data._id,l.data.loveScenesIds);l.data.loveScenesIds.splice(A,1)}l.setLoveInServer(l.data.loveScenesIds,l.data._id)}A(17),A(13),A(14),A(15),A(16);var a=A(4),d=A(5),i=(A(3),d.sceneModel),l=d.userModel,c={scene:!1,user:!1};i.getData(c,e),l.getData(c,e)},function(o,n){o.exports=function(){var o=[];return o.toString=function(){for(var o=[],n=0;n<this.length;n++){var A=this[n];A[2]?o.push("@media "+A[2]+"{"+A[1]+"}"):o.push(A[1])}return o.join("")},o.i=function(n,A){"string"==typeof n&&(n=[[null,n,""]]);for(var e={},t=0;t<this.length;t++){var r=this[t][0];"number"==typeof r&&(e[r]=!0)}for(t=0;t<n.length;t++){var a=n[t];"number"==typeof a[0]&&e[a[0]]||(A&&!a[2]?a[2]=A:A&&(a[2]="("+a[2]+") and ("+A+")"),o.push(a))}},o}},function(o,n,A){function e(o,n){for(var A=0;A<o.length;A++){var e=o[A],t=b[e.id];if(t){t.refs++;for(var r=0;r<t.parts.length;r++)t.parts[r](e.parts[r]);for(;r<e.parts.length;r++)t.parts.push(l(e.parts[r],n))}else{for(var a=[],r=0;r<e.parts.length;r++)a.push(l(e.parts[r],n));b[e.id]={id:e.id,refs:1,parts:a}}}}function t(o){for(var n=[],A={},e=0;e<o.length;e++){var t=o[e],r=t[0],a=t[1],d=t[2],i=t[3],l={css:a,media:d,sourceMap:i};A[r]?A[r].parts.push(l):n.push(A[r]={id:r,parts:[l]})}return n}function r(o,n){var A=u(),e=g[g.length-1];if("top"===o.insertAt)e?e.nextSibling?A.insertBefore(n,e.nextSibling):A.appendChild(n):A.insertBefore(n,A.firstChild),g.push(n);else{if("bottom"!==o.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");A.appendChild(n)}}function a(o){o.parentNode.removeChild(o);var n=g.indexOf(o);n>=0&&g.splice(n,1)}function d(o){var n=document.createElement("style");return n.type="text/css",r(o,n),n}function i(o){var n=document.createElement("link");return n.rel="stylesheet",r(o,n),n}function l(o,n){var A,e,t;if(n.singleton){var r=w++;A=h||(h=d(n)),e=c.bind(null,A,r,!1),t=c.bind(null,A,r,!0)}else o.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(A=i(n),e=m.bind(null,A),t=function(){a(A),A.href&&URL.revokeObjectURL(A.href)}):(A=d(n),e=s.bind(null,A),t=function(){a(A)});return e(o),function(n){if(n){if(n.css===o.css&&n.media===o.media&&n.sourceMap===o.sourceMap)return;e(o=n)}else t()}}function c(o,n,A,e){var t=A?"":e.css;if(o.styleSheet)o.styleSheet.cssText=k(n,t);else{var r=document.createTextNode(t),a=o.childNodes;a[n]&&o.removeChild(a[n]),a.length?o.insertBefore(r,a[n]):o.appendChild(r)}}function s(o,n){var A=n.css,e=n.media;n.sourceMap;if(e&&o.setAttribute("media",e),o.styleSheet)o.styleSheet.cssText=A;else{for(;o.firstChild;)o.removeChild(o.firstChild);o.appendChild(document.createTextNode(A))}}function m(o,n){var A=n.css,e=(n.media,n.sourceMap);e&&(A+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */");var t=new Blob([A],{type:"text/css"}),r=o.href;o.href=URL.createObjectURL(t),r&&URL.revokeObjectURL(r)}var b={},p=function(o){var n;return function(){return"undefined"==typeof n&&(n=o.apply(this,arguments)),n}},f=p(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),u=p(function(){return document.head||document.getElementsByTagName("head")[0]}),h=null,w=0,g=[];o.exports=function(o,n){n=n||{},"undefined"==typeof n.singleton&&(n.singleton=f()),"undefined"==typeof n.insertAt&&(n.insertAt="bottom");var A=t(o);return e(A,n),function(o){for(var r=[],a=0;a<A.length;a++){var d=A[a],i=b[d.id];i.refs--,r.push(i)}if(o){var l=t(o);e(l,n)}for(var a=0;a<r.length;a++){var i=r[a];if(0===i.refs){for(var c=0;c<i.parts.length;c++)i.parts[c]();delete b[i.id]}}}};var k=function(){var o=[];return function(n,A){return o[n]=A,o.filter(Boolean).join("\n")}}()},function(o,n){n.sceneApiUrl="http://121.40.224.83:8080/JnPlant/api/scene/",n.userApiUrl="http://121.40.224.83:8080/JnPlant/api/user/"},function(o,n,A){A(7),n.back=function(){var o=new Hammer.Manager(document.getElementById("scene-page"));o.add(new Hammer.Swipe({velocity:.05,threshold:0,direction:Hammer.DIRECTION_HORIZONTAL})),o.on("swiperight",function(o){console.log(o),window.android.back()})},n.paddingSceneInfo=function(o){$(".top-img").attr("src",o.imgUrl),$(".title").html(markdown.toHTML("##"+o.title)),$(".author").html(markdown.toHTML("- 投稿作者："+o.authorName)),$(".location").html(markdown.toHTML("- 美景地点："+o.location)),$(".month").html(markdown.toHTML("- 美景时间："+o.month.toString()+"月")),$("#article").html(markdown.toHTML(o.article)),$("#love-num").text(o.loversAmount),$("#com-num").text(o.commentsIds.length)},n.setClickLoveEvent=function(o,n,A){function e(n){r=!r,r?(t(n,r),o.loversAmount+=1):(t(n,r),o.loversAmount-=1),$(".love-num").text(o.loversAmount),A(o.loversAmount,r)}function t(o,n){n?o.removeClass("icon-heart-o").addClass("icon-heart").css("color","#fdacc9"):o.removeClass("icon-heart").addClass("icon-heart-o").css("color","#ffffff")}var r=!1;$.inArray(o._id,n.loveScenesIds)>-1&&(r=!0,t($(".love"),r)),$(".love").tap(function(){if(window.android&&!n)return void window.android.webToast("请先登录");var o=$(this);e(o)})}},function(o,n,A){function e(o){var n={},A=o.split("?");A=A[A.length-1];for(var e=A.split("&"),t=0;t<e.length;t++){var r=e[t].split("=");n[r[0]]=r[1]}return n}var t=A(3),r=A(6),a=e(window.location.href),d={sceneId:a.sceneId,data:{},getData:function(o,n){var A=t.sceneApiUrl+d.sceneId;$.get(A,function(A){d.data=A,o.scene=!0,n()})},setLoveNumberInServer:function(o,n){var A={loversAmount:o};r.restfulPutRequest(t.sceneApiUrl,n,A)}},i={userOpenId:a.openId,data:{},getData:function(o,n){userUrl=t.userApiUrl+"?openId="+i.userOpenId,$.get(userUrl,function(A){i.data=A[0],o.user=!0,n()})},setLoveInServer:function(o,n){var A={loveScenesIds:o};r.restfulPutRequest(t.userApiUrl,n,A)}};n.sceneModel=d,n.userModel=i},function(o,n){n.restfulPutRequest=function(o,n,A){$.ajax({url:o+n,type:"PUT",dataType:"json",contentType:"application/json",data:JSON.stringify(A),success:function(){console.log("put success")},fail:function(){console.log("put error")}})}},function(o,n){!function(o){function n(o){return"tagName"in o?o:o.parentNode}function A(o,n,A,e){var t=Math.abs(o-n),r=Math.abs(A-e);return t>=r?o-n>0?"Left":"Right":A-e>0?"Up":"Down"}function e(){l=null,c.last&&(c.el.trigger("longTap"),c={})}function t(){l&&clearTimeout(l),l=null}function r(){a&&clearTimeout(a),d&&clearTimeout(d),i&&clearTimeout(i),l&&clearTimeout(l),a=d=i=l=null,c={}}var a,d,i,l,c={},s=750;o(document).ready(function(){var m,b;o(document.body).bind("touchstart",function(A){m=Date.now(),b=m-(c.last||m),c.el=o(n(A.touches[0].target)),a&&clearTimeout(a),c.x1=A.touches[0].pageX,c.y1=A.touches[0].pageY,b>0&&250>=b&&(c.isDoubleTap=!0),c.last=m,l=setTimeout(e,s)}).bind("touchmove",function(o){t(),c.x2=o.touches[0].pageX,c.y2=o.touches[0].pageY,Math.abs(c.x1-c.x2)>10&&o.preventDefault()}).bind("touchend",function(n){t(),c.x2&&Math.abs(c.x1-c.x2)>30||c.y2&&Math.abs(c.y1-c.y2)>30?i=setTimeout(function(){c.el.trigger("swipe"),c.el.trigger("swipe"+A(c.x1,c.x2,c.y1,c.y2)),c={}},0):"last"in c&&(d=setTimeout(function(){var n=o.Event("tap");n.cancelTouch=r,c.el.trigger(n),c.isDoubleTap?(c.el.trigger("doubleTap"),c={}):a=setTimeout(function(){a=null,c.el.trigger("singleTap"),c={}},250)},0))}).bind("touchcancel",r),o(window).bind("scroll",r)}),["swipe","swipeLeft","swipeRight","swipeUp","swipeDown","doubleTap","tap","singleTap","longTap"].forEach(function(n){o.fn[n]=function(o){return this.bind(n,o)}})}(Zepto)},function(o,n,A){n=o.exports=A(1)(),n.push([o.id,"",""])},function(o,n,A){n=o.exports=A(1)(),n.push([o.id,".markdown-body{-webkit-text-size-adjust:100%;text-size-adjust:100%;color:#333;overflow:hidden;font-family:Helvetica Neue,Helvetica,Segoe UI,Arial,freesans,sans-serif;font-size:16px;line-height:1.6;word-wrap:break-word}.markdown-body a{background-color:transparent}.markdown-body a:active,.markdown-body a:hover{outline:0}.markdown-body strong{font-weight:700}.markdown-body h1{font-size:2em;margin:.67em 0;text-align:center}.markdown-body img{border:0}.markdown-body pre{overflow:auto}.markdown-body code,.markdown-body kbd,.markdown-body pre{font-family:monospace;font-size:1em}.markdown-body input{color:inherit;font:inherit;margin:0}.markdown-body html input[disabled]{cursor:default}.markdown-body input{line-height:normal}.markdown-body input[type=checkbox]{box-sizing:border-box;padding:0}.markdown-body table{border-collapse:collapse;border-spacing:0}.markdown-body td,.markdown-body th{padding:0}.markdown-body *{box-sizing:border-box}.markdown-body input{font:13px/1.4 Helvetica,arial,nimbussansl,liberationsans,freesans,clean,sans-serif}.markdown-body a{color:#4078c0;text-decoration:none}.markdown-body a:active,.markdown-body a:hover{text-decoration:underline}.markdown-body h1,.markdown-body h2,.markdown-body h3,.markdown-body h4,.markdown-body h5,.markdown-body h6{margin-top:15px;margin-bottom:15px;line-height:1.1}.markdown-body h1{font-size:30px}.markdown-body h2{font-size:21px}.markdown-body h3{font-size:16px}.markdown-body h4{font-size:14px}.markdown-body h5{font-size:12px}.markdown-body h6{font-size:11px}.markdown-body blockquote{margin:0}.markdown-body ol,.markdown-body ul{padding:0;margin-top:0;margin-bottom:0}.markdown-body ol ol,.markdown-body ul ol{list-style-type:lower-roman}.markdown-body ol ol ol,.markdown-body ol ul ol,.markdown-body ul ol ol,.markdown-body ul ul ol{list-style-type:lower-alpha}.markdown-body dd{margin-left:0}.markdown-body code{font-family:Consolas,Liberation Mono,Menlo,Courier,monospace;font-size:12px}.markdown-body pre{margin-top:0;margin-bottom:0;font:12px Consolas,Liberation Mono,Menlo,Courier,monospace}.markdown-body .select::-ms-expand{opacity:0}.markdown-body .octicon{font:normal normal normal 16px/1 octicons-anchor;display:inline-block;text-decoration:none;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.markdown-body .octicon-link:before{content:'\\F05C'}.markdown-body>:first-child{margin-top:0!important}.markdown-body>:last-child{margin-bottom:0!important}.markdown-body .anchor{position:absolute;top:0;left:0;display:block;padding-right:6px;padding-left:30px;margin-left:-30px}.markdown-body .anchor:focus{outline:none}.markdown-body h1,.markdown-body h2,.markdown-body h3,.markdown-body h4,.markdown-body h5,.markdown-body h6{position:relative;margin-top:1em;margin-bottom:16px;font-weight:700;line-height:1.4}.markdown-body h1 .octicon-link,.markdown-body h2 .octicon-link,.markdown-body h3 .octicon-link,.markdown-body h4 .octicon-link,.markdown-body h5 .octicon-link,.markdown-body h6 .octicon-link{display:none;color:#000;vertical-align:middle}.markdown-body h1:hover .anchor,.markdown-body h2:hover .anchor,.markdown-body h3:hover .anchor,.markdown-body h4:hover .anchor,.markdown-body h5:hover .anchor,.markdown-body h6:hover .anchor{padding-left:8px;margin-left:-30px;text-decoration:none}.markdown-body h1:hover .anchor .octicon-link,.markdown-body h2:hover .anchor .octicon-link,.markdown-body h3:hover .anchor .octicon-link,.markdown-body h4:hover .anchor .octicon-link,.markdown-body h5:hover .anchor .octicon-link,.markdown-body h6:hover .anchor .octicon-link{display:inline-block}.markdown-body h1{padding-bottom:.3em;font-size:2.25em;line-height:1.2}.markdown-body h1 .anchor{line-height:1}.markdown-body h2{padding-bottom:.3em;font-size:1.75em;line-height:1.225}.markdown-body h2 .anchor{line-height:1}.markdown-body h3{font-size:1.5em;line-height:1.43}.markdown-body h3 .anchor{line-height:1.2}.markdown-body h4{font-size:1.25em}.markdown-body h4 .anchor{line-height:1.2}.markdown-body h5{font-size:1em}.markdown-body h5 .anchor{line-height:1.1}.markdown-body h6{font-size:1em;color:#777}.markdown-body h6 .anchor{line-height:1.1}.markdown-body blockquote,.markdown-body dl,.markdown-body ol,.markdown-body p,.markdown-body pre,.markdown-body table,.markdown-body ul{margin-top:0;margin-bottom:16px}.markdown-body ol,.markdown-body ul{padding-left:2em}.markdown-body ol ol,.markdown-body ol ul,.markdown-body ul ol,.markdown-body ul ul{margin-top:0;margin-bottom:0}.markdown-body li>p{margin-top:16px}.markdown-body dl{padding:0}.markdown-body dl dt{padding:0;margin-top:16px;font-size:1em;font-style:italic;font-weight:700}.markdown-body dl dd{padding:0 16px;margin-bottom:16px}.markdown-body blockquote{padding:0 15px;color:#777;border-left:4px solid #ddd}.markdown-body blockquote>:first-child{margin-top:0}.markdown-body blockquote>:last-child{margin-bottom:0}.markdown-body table{display:block;width:100%;overflow:auto;word-break:normal;word-break:keep-all}.markdown-body table th{font-weight:700}.markdown-body table td,.markdown-body table th{padding:6px 13px;border:1px solid #ddd}.markdown-body table tr{background-color:#fff;border-top:1px solid #ccc}.markdown-body table tr:nth-child(2n){background-color:#f8f8f8}.markdown-body img{max-width:100%;box-sizing:border-box}.markdown-body code{padding:0;padding-top:.2em;padding-bottom:.2em;margin:0;font-size:85%;background-color:rgba(0,0,0,.04);border-radius:3px}.markdown-body code:after,.markdown-body code:before{letter-spacing:-.2em;content:\"\\A0\"}.markdown-body pre>code{padding:0;margin:0;font-size:100%;word-break:normal;white-space:pre;background:transparent;border:0}.markdown-body .highlight{margin-bottom:16px}.markdown-body .highlight pre,.markdown-body pre{padding:16px;overflow:auto;font-size:85%;line-height:1.45;background-color:#f7f7f7;border-radius:3px}.markdown-body .highlight pre{margin-bottom:0;word-break:normal}.markdown-body pre{word-wrap:normal}.markdown-body pre code{display:inline;max-width:initial;padding:0;margin:0;overflow:initial;line-height:inherit;word-wrap:normal;background-color:transparent;border:0}.markdown-body pre code:after,.markdown-body pre code:before{content:normal}.markdown-body kbd{display:inline-block;padding:3px 5px;font-size:11px;line-height:10px;color:#555;vertical-align:middle;background-color:#fcfcfc;border:1px solid #ccc;border-radius:3px;box-shadow:inset 0 -1px 0 #bbb}.markdown-body .pl-c{color:#969896}.markdown-body .pl-c1,.markdown-body .pl-s .pl-v{color:#0086b3}.markdown-body .pl-e,.markdown-body .pl-en{color:#795da3}.markdown-body .pl-s .pl-s1,.markdown-body .pl-smi{color:#333}.markdown-body .pl-ent{color:#63a35c}.markdown-body .pl-k{color:#a71d5d}.markdown-body .pl-pds,.markdown-body .pl-s,.markdown-body .pl-s .pl-pse .pl-s1,.markdown-body .pl-sr,.markdown-body .pl-sr .pl-cce,.markdown-body .pl-sr .pl-sra,.markdown-body .pl-sr .pl-sre{color:#183691}.markdown-body .pl-v{color:#ed6a43}.markdown-body .pl-id{color:#b52a1d}.markdown-body .pl-ii{background-color:#b52a1d;color:#f8f8f8}.markdown-body .pl-sr .pl-cce{color:#63a35c;font-weight:700}.markdown-body .pl-ml{color:#693a17}.markdown-body .pl-mh,.markdown-body .pl-mh .pl-en,.markdown-body .pl-ms{color:#1d3e81;font-weight:700}.markdown-body .pl-mq{color:teal}.markdown-body .pl-mi{color:#333;font-style:italic}.markdown-body .pl-mb{color:#333;font-weight:700}.markdown-body .pl-md{background-color:#ffecec;color:#bd2c00}.markdown-body .pl-mi1{background-color:#eaffea;color:#55a532}.markdown-body .pl-mdr{color:#795da3;font-weight:700}.markdown-body .pl-mo{color:#1d3e81}.markdown-body kbd{display:inline-block;padding:3px 5px;font:11px Consolas,Liberation Mono,Menlo,Courier,monospace;line-height:10px;color:#555;vertical-align:middle;background-color:#fcfcfc;border:1px solid #ccc;border-radius:3px;box-shadow:inset 0 -1px 0 #bbb}.markdown-body .task-list-item{list-style-type:none}.markdown-body .task-list-item+.task-list-item{margin-top:3px}.markdown-body .task-list-item input{margin:0 .35em .25em -1.6em;vertical-align:middle}.markdown-body :checked+.radio-label{z-index:1;position:relative;border-color:#4078c0}",""])},function(o,n,A){n=o.exports=A(1)(),n.push([o.id,"body,html{margin:auto;width:100%}p{margin:0;padding:0;font-weight:400}",""])},function(o,n,A){n=o.exports=A(1)(),n.push([o.id,"@font-face{font-family:icomoon;src:url("+A(18)+') format(\'woff\');font-weight:400;font-style:normal}[class*=" icon-"],[class^=icon-]{font-family:icomoon;speak:none;font-style:normal;font-weight:400;font-variant:normal;text-transform:none;line-height:1;position:relative;top:.11rem;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.icon-heart:before{font-size:1.4rem;content:"\\E900"}.icon-heart-o:before{font-size:1.3rem;content:"\\E901"}.icon-bubble:before{font-size:1.3rem;content:"\\E902"}',""])},function(o,n,A){n=o.exports=A(1)(),n.push([o.id,".scene-info{width:98%;margin-left:auto;margin-right:auto}.title{text-align:center}footer{background-color:#4aca63;color:#fff;font-size:1.5rem;width:100%;height:2.5rem;position:fixed;bottom:0;left:0}footer .icons{padding:.3rem .5rem 0;position:relative}#article{margin-bottom:2.5rem}.icon1,.icon2{position:absolute}.icon1{left:3rem}.icon2{right:3.5rem}.com-num,.love-num{font-size:1.3rem;font-weight:150}",""])},function(o,n,A){var e=A(8);"string"==typeof e&&(e=[[o.id,e,""]]);A(2)(e,{});e.locals&&(o.exports=e.locals)},function(o,n,A){var e=A(9);"string"==typeof e&&(e=[[o.id,e,""]]);A(2)(e,{});e.locals&&(o.exports=e.locals)},function(o,n,A){var e=A(10);"string"==typeof e&&(e=[[o.id,e,""]]);A(2)(e,{});e.locals&&(o.exports=e.locals)},function(o,n,A){var e=A(11);"string"==typeof e&&(e=[[o.id,e,""]]);A(2)(e,{});e.locals&&(o.exports=e.locals)},function(o,n,A){var e=A(12);"string"==typeof e&&(e=[[o.id,e,""]]);A(2)(e,{});e.locals&&(o.exports=e.locals)},function(o,n){o.exports="data:application/font-woff;base64,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"}]);