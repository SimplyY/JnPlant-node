!function(o){function n(A){if(e[A])return e[A].exports;var t=e[A]={exports:{},id:A,loaded:!1};return o[A].call(t.exports,t,t.exports,n),t.loaded=!0,t.exports}var e={};return n.m=o,n.c=e,n.p="",n(0)}([function(o,n,e){function A(o){c.scene&&c.user&&t()}function t(){a.back(),a.paddingSceneInfo(i.data),a.setClickLoveEvent(i.data,l.data,r),a.setClickCommentEvent()}function r(o,n){if(i.setLoveNumberInServer(o,i.sceneId),n)l.data.loveScenesIds.push(i.data._id);else{var e=$.inArray(i.data._id,l.data.loveScenesIds);l.data.loveScenesIds.splice(e,1)}l.setLoveInServer(l.data.loveScenesIds,l.data._id)}e(15),e(12),e(13),e(14);var a=e(4),d=e(5),i=d.sceneModel,l=d.userModel,c={scene:!1,user:!1};i.getData(c,A),l.getData(c,A)},function(o,n){o.exports=function(){var o=[];return o.toString=function(){for(var o=[],n=0;n<this.length;n++){var e=this[n];e[2]?o.push("@media "+e[2]+"{"+e[1]+"}"):o.push(e[1])}return o.join("")},o.i=function(n,e){"string"==typeof n&&(n=[[null,n,""]]);for(var A={},t=0;t<this.length;t++){var r=this[t][0];"number"==typeof r&&(A[r]=!0)}for(t=0;t<n.length;t++){var a=n[t];"number"==typeof a[0]&&A[a[0]]||(e&&!a[2]?a[2]=e:e&&(a[2]="("+a[2]+") and ("+e+")"),o.push(a))}},o}},function(o,n,e){function A(o,n){for(var e=0;e<o.length;e++){var A=o[e],t=b[A.id];if(t){t.refs++;for(var r=0;r<t.parts.length;r++)t.parts[r](A.parts[r]);for(;r<A.parts.length;r++)t.parts.push(l(A.parts[r],n))}else{for(var a=[],r=0;r<A.parts.length;r++)a.push(l(A.parts[r],n));b[A.id]={id:A.id,refs:1,parts:a}}}}function t(o){for(var n=[],e={},A=0;A<o.length;A++){var t=o[A],r=t[0],a=t[1],d=t[2],i=t[3],l={css:a,media:d,sourceMap:i};e[r]?e[r].parts.push(l):n.push(e[r]={id:r,parts:[l]})}return n}function r(o,n){var e=u(),A=g[g.length-1];if("top"===o.insertAt)A?A.nextSibling?e.insertBefore(n,A.nextSibling):e.appendChild(n):e.insertBefore(n,e.firstChild),g.push(n);else{if("bottom"!==o.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");e.appendChild(n)}}function a(o){o.parentNode.removeChild(o);var n=g.indexOf(o);n>=0&&g.splice(n,1)}function d(o){var n=document.createElement("style");return n.type="text/css",r(o,n),n}function i(o){var n=document.createElement("link");return n.rel="stylesheet",r(o,n),n}function l(o,n){var e,A,t;if(n.singleton){var r=h++;e=w||(w=d(n)),A=c.bind(null,e,r,!1),t=c.bind(null,e,r,!0)}else o.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(e=i(n),A=m.bind(null,e),t=function(){a(e),e.href&&URL.revokeObjectURL(e.href)}):(e=d(n),A=s.bind(null,e),t=function(){a(e)});return A(o),function(n){if(n){if(n.css===o.css&&n.media===o.media&&n.sourceMap===o.sourceMap)return;A(o=n)}else t()}}function c(o,n,e,A){var t=e?"":A.css;if(o.styleSheet)o.styleSheet.cssText=k(n,t);else{var r=document.createTextNode(t),a=o.childNodes;a[n]&&o.removeChild(a[n]),a.length?o.insertBefore(r,a[n]):o.appendChild(r)}}function s(o,n){var e=n.css,A=n.media;n.sourceMap;if(A&&o.setAttribute("media",A),o.styleSheet)o.styleSheet.cssText=e;else{for(;o.firstChild;)o.removeChild(o.firstChild);o.appendChild(document.createTextNode(e))}}function m(o,n){var e=n.css,A=(n.media,n.sourceMap);A&&(e+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(A))))+" */");var t=new Blob([e],{type:"text/css"}),r=o.href;o.href=URL.createObjectURL(t),r&&URL.revokeObjectURL(r)}var b={},p=function(o){var n;return function(){return"undefined"==typeof n&&(n=o.apply(this,arguments)),n}},f=p(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),u=p(function(){return document.head||document.getElementsByTagName("head")[0]}),w=null,h=0,g=[];o.exports=function(o,n){n=n||{},"undefined"==typeof n.singleton&&(n.singleton=f()),"undefined"==typeof n.insertAt&&(n.insertAt="bottom");var e=t(o);return A(e,n),function(o){for(var r=[],a=0;a<e.length;a++){var d=e[a],i=b[d.id];i.refs--,r.push(i)}if(o){var l=t(o);A(l,n)}for(var a=0;a<r.length;a++){var i=r[a];if(0===i.refs){for(var c=0;c<i.parts.length;c++)i.parts[c]();delete b[i.id]}}}};var k=function(){var o=[];return function(n,e){return o[n]=e,o.filter(Boolean).join("\n")}}()},function(o,n){n.sceneApiUrl="http://121.40.224.83:8080/JnPlant/api/scene/",n.userApiUrl="http://121.40.224.83:8080/JnPlant/api/user/"},function(o,n,e){function A(){var o=new Hammer.Manager(document.getElementById("scene-page"));o.add(new Hammer.Swipe({velocity:.05,threshold:0,direction:Hammer.DIRECTION_HORIZONTAL})),o.on("swiperight",function(o){console.log(o),window.android.back()})}function t(o){$(".top-img").attr("src",o.imgUrl),$(".title").html(markdown.toHTML("##"+o.title)),$(".author").html(markdown.toHTML("- 投稿作者："+o.authorName)),$(".location").html(markdown.toHTML("- 美景地点："+o.location)),$(".month").html(markdown.toHTML("- 美景时间："+o.month.toString()+"月")),$("#article").html(markdown.toHTML(o.article)),$("#love-num").text(o.loversAmount),$("#com-num").text(o.commentsIds.length)}function r(o,n,e){function A(){var n=$(".love");r=!r,r?(t(n,r),o.loversAmount+=1):(t(n,r),o.loversAmount-=1),$(".love-num").text(o.loversAmount),e(o.loversAmount,r)}function t(o,n){n?o.removeClass("icon-heart-o").addClass("icon-heart").css("color","#fdacc9"):o.removeClass("icon-heart").addClass("icon-heart-o").css("color","#ffffff")}var r=!1;n&&$.inArray(o._id,n.loveScenesIds)>-1&&(r=!0,t($(".love"),r)),$("#love-icon").tap(function(){return window.android&&!n?void window.android.webToast("请先登录"):void A()})}function a(){$("#comment-icon").tap(function(){window.android&&window.android.enterComment()})}e(7),o.exports={back:A,paddingSceneInfo:t,setClickLoveEvent:r,setClickCommentEvent:a}},function(o,n,e){var A=e(3),t=e(6),r=t.getQureyParams(window.location.href),a={sceneId:r.sceneId,data:{},getData:function(o,n){var e=A.sceneApiUrl+a.sceneId;$.get(e,function(e){a.data=e,o.scene=!0,n()})},setLoveNumberInServer:function(o,n){var e={loversAmount:o};t.restfulPutRequest(A.sceneApiUrl,n,e)}},d={userOpenId:r.openId,data:{},getData:function(o,n){userUrl=A.userApiUrl+"?openId="+d.userOpenId,$.get(userUrl,function(e){d.data=e[0],o.user=!0,n()})},setLoveInServer:function(o,n){var e={loveScenesIds:o};t.restfulPutRequest(A.userApiUrl,n,e)}};n.sceneModel=a,n.userModel=d},function(o,n){n.restfulPutRequest=function(o,n,e){$.ajax({url:o+n,type:"PUT",dataType:"json",contentType:"application/json",data:JSON.stringify(e),success:function(){console.log("put success")},fail:function(){console.log("put error")}})},n.getQureyParams=function(o){var n={},e=o.split("?");e=e[e.length-1];for(var A=e.split("&"),t=0;t<A.length;t++){var r=A[t].split("=");n[r[0]]=r[1]}return n}},function(o,n){!function(o){function n(o){return"tagName"in o?o:o.parentNode}function e(o,n,e,A){var t=Math.abs(o-n),r=Math.abs(e-A);return t>=r?o-n>0?"Left":"Right":e-A>0?"Up":"Down"}function A(){l=null,c.last&&(c.el.trigger("longTap"),c={})}function t(){l&&clearTimeout(l),l=null}function r(){a&&clearTimeout(a),d&&clearTimeout(d),i&&clearTimeout(i),l&&clearTimeout(l),a=d=i=l=null,c={}}var a,d,i,l,c={},s=750;o(document).ready(function(){var m,b;o(document.body).bind("touchstart",function(e){m=Date.now(),b=m-(c.last||m),c.el=o(n(e.touches[0].target)),a&&clearTimeout(a),c.x1=e.touches[0].pageX,c.y1=e.touches[0].pageY,b>0&&250>=b&&(c.isDoubleTap=!0),c.last=m,l=setTimeout(A,s)}).bind("touchmove",function(o){t(),c.x2=o.touches[0].pageX,c.y2=o.touches[0].pageY,Math.abs(c.x1-c.x2)>10&&o.preventDefault()}).bind("touchend",function(n){t(),c.x2&&Math.abs(c.x1-c.x2)>30||c.y2&&Math.abs(c.y1-c.y2)>30?i=setTimeout(function(){c.el.trigger("swipe"),c.el.trigger("swipe"+e(c.x1,c.x2,c.y1,c.y2)),c={}},0):"last"in c&&(d=setTimeout(function(){var n=o.Event("tap");n.cancelTouch=r,c.el.trigger(n),c.isDoubleTap?(c.el.trigger("doubleTap"),c={}):a=setTimeout(function(){a=null,c.el.trigger("singleTap"),c={}},250)},0))}).bind("touchcancel",r),o(window).bind("scroll",r)}),["swipe","swipeLeft","swipeRight","swipeUp","swipeDown","doubleTap","tap","singleTap","longTap"].forEach(function(n){o.fn[n]=function(o){return this.bind(n,o)}})}(Zepto)},function(o,n,e){n=o.exports=e(1)(),n.push([o.id,".markdown-body{-webkit-text-size-adjust:100%;text-size-adjust:100%;color:#333;overflow:hidden;font-family:Helvetica Neue,Helvetica,Segoe UI,Arial,freesans,sans-serif;font-size:16px;line-height:1.6;word-wrap:break-word}.markdown-body a{background-color:transparent}.markdown-body a:active,.markdown-body a:hover{outline:0}.markdown-body strong{font-weight:700}.markdown-body h1{font-size:2em;margin:.67em 0;text-align:center}.markdown-body img{border:0}.markdown-body pre{overflow:auto}.markdown-body code,.markdown-body kbd,.markdown-body pre{font-family:monospace;font-size:1em}.markdown-body input{color:inherit;font:inherit;margin:0}.markdown-body html input[disabled]{cursor:default}.markdown-body input{line-height:normal}.markdown-body input[type=checkbox]{box-sizing:border-box;padding:0}.markdown-body table{border-collapse:collapse;border-spacing:0}.markdown-body td,.markdown-body th{padding:0}.markdown-body *{box-sizing:border-box}.markdown-body input{font:13px/1.4 Helvetica,arial,nimbussansl,liberationsans,freesans,clean,sans-serif}.markdown-body a{color:#4078c0;text-decoration:none}.markdown-body a:active,.markdown-body a:hover{text-decoration:underline}.markdown-body h1,.markdown-body h2,.markdown-body h3,.markdown-body h4,.markdown-body h5,.markdown-body h6{margin-top:15px;margin-bottom:15px;line-height:1.1}.markdown-body h1{font-size:30px}.markdown-body h2{font-size:21px}.markdown-body h3{font-size:16px}.markdown-body h4{font-size:14px}.markdown-body h5{font-size:12px}.markdown-body h6{font-size:11px}.markdown-body blockquote{margin:0}.markdown-body ol,.markdown-body ul{padding:0;margin-top:0;margin-bottom:0}.markdown-body ol ol,.markdown-body ul ol{list-style-type:lower-roman}.markdown-body ol ol ol,.markdown-body ol ul ol,.markdown-body ul ol ol,.markdown-body ul ul ol{list-style-type:lower-alpha}.markdown-body dd{margin-left:0}.markdown-body code{font-family:Consolas,Liberation Mono,Menlo,Courier,monospace;font-size:12px}.markdown-body pre{margin-top:0;margin-bottom:0;font:12px Consolas,Liberation Mono,Menlo,Courier,monospace}.markdown-body .select::-ms-expand{opacity:0}.markdown-body .octicon{font:normal normal normal 16px/1 octicons-anchor;display:inline-block;text-decoration:none;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.markdown-body .octicon-link:before{content:'\\F05C'}.markdown-body>:first-child{margin-top:0!important}.markdown-body>:last-child{margin-bottom:0!important}.markdown-body .anchor{position:absolute;top:0;left:0;display:block;padding-right:6px;padding-left:30px;margin-left:-30px}.markdown-body .anchor:focus{outline:none}.markdown-body h1,.markdown-body h2,.markdown-body h3,.markdown-body h4,.markdown-body h5,.markdown-body h6{position:relative;margin-top:1em;margin-bottom:16px;font-weight:700;line-height:1.4}.markdown-body h1 .octicon-link,.markdown-body h2 .octicon-link,.markdown-body h3 .octicon-link,.markdown-body h4 .octicon-link,.markdown-body h5 .octicon-link,.markdown-body h6 .octicon-link{display:none;color:#000;vertical-align:middle}.markdown-body h1:hover .anchor,.markdown-body h2:hover .anchor,.markdown-body h3:hover .anchor,.markdown-body h4:hover .anchor,.markdown-body h5:hover .anchor,.markdown-body h6:hover .anchor{padding-left:8px;margin-left:-30px;text-decoration:none}.markdown-body h1:hover .anchor .octicon-link,.markdown-body h2:hover .anchor .octicon-link,.markdown-body h3:hover .anchor .octicon-link,.markdown-body h4:hover .anchor .octicon-link,.markdown-body h5:hover .anchor .octicon-link,.markdown-body h6:hover .anchor .octicon-link{display:inline-block}.markdown-body h1{padding-bottom:.3em;font-size:2.25em;line-height:1.2}.markdown-body h1 .anchor{line-height:1}.markdown-body h2{padding-bottom:.3em;font-size:1.75em;line-height:1.225}.markdown-body h2 .anchor{line-height:1}.markdown-body h3{font-size:1.5em;line-height:1.43}.markdown-body h3 .anchor{line-height:1.2}.markdown-body h4{font-size:1.25em}.markdown-body h4 .anchor{line-height:1.2}.markdown-body h5{font-size:1em}.markdown-body h5 .anchor{line-height:1.1}.markdown-body h6{font-size:1em;color:#777}.markdown-body h6 .anchor{line-height:1.1}.markdown-body blockquote,.markdown-body dl,.markdown-body ol,.markdown-body p,.markdown-body pre,.markdown-body table,.markdown-body ul{margin-top:0;margin-bottom:16px}.markdown-body ol,.markdown-body ul{padding-left:2em}.markdown-body ol ol,.markdown-body ol ul,.markdown-body ul ol,.markdown-body ul ul{margin-top:0;margin-bottom:0}.markdown-body li>p{margin-top:16px}.markdown-body dl{padding:0}.markdown-body dl dt{padding:0;margin-top:16px;font-size:1em;font-style:italic;font-weight:700}.markdown-body dl dd{padding:0 16px;margin-bottom:16px}.markdown-body blockquote{padding:0 15px;color:#777;border-left:4px solid #ddd}.markdown-body blockquote>:first-child{margin-top:0}.markdown-body blockquote>:last-child{margin-bottom:0}.markdown-body table{display:block;width:100%;overflow:auto;word-break:normal;word-break:keep-all}.markdown-body table th{font-weight:700}.markdown-body table td,.markdown-body table th{padding:6px 13px;border:1px solid #ddd}.markdown-body table tr{background-color:#fff;border-top:1px solid #ccc}.markdown-body table tr:nth-child(2n){background-color:#f8f8f8}.markdown-body img{max-width:100%;box-sizing:border-box}.markdown-body code{padding:0;padding-top:.2em;padding-bottom:.2em;margin:0;font-size:85%;background-color:rgba(0,0,0,.04);border-radius:3px}.markdown-body code:after,.markdown-body code:before{letter-spacing:-.2em;content:\"\\A0\"}.markdown-body pre>code{padding:0;margin:0;font-size:100%;word-break:normal;white-space:pre;background:transparent;border:0}.markdown-body .highlight{margin-bottom:16px}.markdown-body .highlight pre,.markdown-body pre{padding:16px;overflow:auto;font-size:85%;line-height:1.45;background-color:#f7f7f7;border-radius:3px}.markdown-body .highlight pre{margin-bottom:0;word-break:normal}.markdown-body pre{word-wrap:normal}.markdown-body pre code{display:inline;max-width:initial;padding:0;margin:0;overflow:initial;line-height:inherit;word-wrap:normal;background-color:transparent;border:0}.markdown-body pre code:after,.markdown-body pre code:before{content:normal}.markdown-body kbd{display:inline-block;padding:3px 5px;font-size:11px;line-height:10px;color:#555;vertical-align:middle;background-color:#fcfcfc;border:1px solid #ccc;border-radius:3px;box-shadow:inset 0 -1px 0 #bbb}.markdown-body .pl-c{color:#969896}.markdown-body .pl-c1,.markdown-body .pl-s .pl-v{color:#0086b3}.markdown-body .pl-e,.markdown-body .pl-en{color:#795da3}.markdown-body .pl-s .pl-s1,.markdown-body .pl-smi{color:#333}.markdown-body .pl-ent{color:#63a35c}.markdown-body .pl-k{color:#a71d5d}.markdown-body .pl-pds,.markdown-body .pl-s,.markdown-body .pl-s .pl-pse .pl-s1,.markdown-body .pl-sr,.markdown-body .pl-sr .pl-cce,.markdown-body .pl-sr .pl-sra,.markdown-body .pl-sr .pl-sre{color:#183691}.markdown-body .pl-v{color:#ed6a43}.markdown-body .pl-id{color:#b52a1d}.markdown-body .pl-ii{background-color:#b52a1d;color:#f8f8f8}.markdown-body .pl-sr .pl-cce{color:#63a35c;font-weight:700}.markdown-body .pl-ml{color:#693a17}.markdown-body .pl-mh,.markdown-body .pl-mh .pl-en,.markdown-body .pl-ms{color:#1d3e81;font-weight:700}.markdown-body .pl-mq{color:teal}.markdown-body .pl-mi{color:#333;font-style:italic}.markdown-body .pl-mb{color:#333;font-weight:700}.markdown-body .pl-md{background-color:#ffecec;color:#bd2c00}.markdown-body .pl-mi1{background-color:#eaffea;color:#55a532}.markdown-body .pl-mdr{color:#795da3;font-weight:700}.markdown-body .pl-mo{color:#1d3e81}.markdown-body kbd{display:inline-block;padding:3px 5px;font:11px Consolas,Liberation Mono,Menlo,Courier,monospace;line-height:10px;color:#555;vertical-align:middle;background-color:#fcfcfc;border:1px solid #ccc;border-radius:3px;box-shadow:inset 0 -1px 0 #bbb}.markdown-body .task-list-item{list-style-type:none}.markdown-body .task-list-item+.task-list-item{margin-top:3px}.markdown-body .task-list-item input{margin:0 .35em .25em -1.6em;vertical-align:middle}.markdown-body :checked+.radio-label{z-index:1;position:relative;border-color:#4078c0}",""])},function(o,n,e){n=o.exports=e(1)(),n.push([o.id,"body,html{margin:auto;width:100%}p{margin:0;padding:0;font-weight:400}",""])},function(o,n,e){n=o.exports=e(1)(),n.push([o.id,"@font-face{font-family:icomoon;src:url("+e(16)+') format(\'woff\');font-weight:400;font-style:normal}[class*=" icon-"],[class^=icon-]{font-family:icomoon;speak:none;font-style:normal;font-weight:400;font-variant:normal;text-transform:none;line-height:1;position:relative;top:.11rem;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.icon-heart:before{font-size:1.4rem;content:"\\E900"}.icon-heart-o:before{font-size:1.3rem;content:"\\E901"}.icon-bubble:before{font-size:1.3rem;content:"\\E902"}',""])},function(o,n,e){n=o.exports=e(1)(),n.push([o.id,"#top-img{margin-left:-15%;width:133%;max-width:133%}.scene-info{width:98%;margin-left:auto;margin-right:auto}.title{text-align:center}footer{background-color:#4aca63;color:#fff;font-size:1.5rem;width:100%;height:2.5rem;position:fixed;bottom:0;left:0}footer .icons{padding:.3rem .5rem 0;position:relative}#article{margin-bottom:2.5rem}.icon1,.icon2{position:absolute}.icon1{left:3rem}.icon2{right:3.5rem}.com-num,.love-num{font-size:1.3rem;font-weight:150}",""])},function(o,n,e){var A=e(8);"string"==typeof A&&(A=[[o.id,A,""]]);e(2)(A,{});A.locals&&(o.exports=A.locals)},function(o,n,e){var A=e(9);"string"==typeof A&&(A=[[o.id,A,""]]);e(2)(A,{});A.locals&&(o.exports=A.locals)},function(o,n,e){var A=e(10);"string"==typeof A&&(A=[[o.id,A,""]]);e(2)(A,{});A.locals&&(o.exports=A.locals)},function(o,n,e){var A=e(11);"string"==typeof A&&(A=[[o.id,A,""]]);e(2)(A,{});A.locals&&(o.exports=A.locals)},function(o,n){o.exports="data:application/font-woff;base64,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"}]);