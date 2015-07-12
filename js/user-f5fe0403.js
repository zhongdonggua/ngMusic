var musicApp=angular.module("MusicApp",["ui.router","MainModule"]);musicApp.config(["$stateProvider","$urlRouterProvider",function(e,t){t.otherwise("/index"),e.state("index",{url:"/index",views:{"":{templateUrl:"tpls/main.html"},"choose@index":{templateUrl:"tpls/choose.html"},"list@index":{templateUrl:"tpls/list.html"},"music@index":{templateUrl:"tpls/musicctrl.html"}}}).state("login",{url:"/login",views:{"":{templateUrl:"tpls/login.html"}}})}]);var imgModule=angular.module("imgModule",[]);imgModule.factory("ImgFactory",function(){var e="data:image/jpeg;base64,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";return{headImg:e}});var mainModule=angular.module("MainModule",["imgModule"]),SEARCHURL="http://cors.coding.io",SERVERURL="http://ngmusic.coding.io/node",LOGINURL="http://iuser.coding.io";mainModule.directive("loadchannel",["$rootScope","MusicFactory","MessageFactory",function(e,t,n){return{restrict:"AE",link:function(o,a){a.on("click",function(o){o.stopPropagation();var r=a.attr("data-id");e.name="随心听: "+a.attr("data-name"),e.$apply(),t.updateList(r),n.channelChange(),n.loadingBroadcast(!0,"加载中...")})}}}]),mainModule.directive("pauseaudio",["MusicFactory",function(e){return{restrict:"A",link:function(t,n){n.on("click",function(t){t.stopPropagation(),e.playorpauseSong()})}}}]),mainModule.directive("removespan",["MusicFactory",function(e){return{restrict:"A",link:function(t,n){n.on("click",function(t){t.stopPropagation();var o=n.parent().attr("data-index"),a=e.getSetting("isUsrPlay");a?e.removeSong(o):e.addOneSong(o,!0)})}}}]),mainModule.directive("playaudio",["MusicFactory",function(e){return{restrict:"AE",link:function(t,n){n.on("click",function(t){t.stopPropagation();var o=n.attr("data-index");e.getSetting("searchMode")?(e.addOneSong(o),e.changePlayer(0)):e.playSong(o)})}}}]),mainModule.directive("detectiveenter",["MusicFactory",function(e){return{restrict:"AE",link:function(t,n){n.on("keydown",function(t){13===t.keyCode&&e.changePlayer(2,n[0].value)})}}}]),mainModule.directive("progressdiv",["MusicFactory",function(e){return{restrict:"AE",link:function(t,n){function o(t){if(a){var o=n[0].getBoundingClientRect(),c=i.getBoundingClientRect().width,s=t.x-o.left;s>c?s=c:s>o.width&&(s=o.width),r.style.width=s+"px",e.setAudiocurrentTime(s/o.width)}return t.stopPropagation(),t.preventDefault(),!1}var a=!1,r=document.getElementById("currentprogress"),i=document.getElementById("loadedprogress");n.on("mousedown",function(){a=!0,document.addEventListener("mousemove",o)}),document.addEventListener("mouseup",function(e){o(e),a=!1,document.removeEventListener("mousemove",o)})}}}]),mainModule.factory("MusicFactory",["$http","$q","$rootScope","MessageFactory",function(e,t,n,o){function a(e,t){for(var n in e)t.hasOwnProperty(n)&&(e[n]=t[n])}function r(){var e={};for(var t in N)N.hasOwnProperty(t)&&"audioList"!=t&&"channelList"!=t&&(e[t]=N[t]);setTimeout(function(){localStorage.setItem("shang_music",JSON.stringify({setting:e,userSongIds:x}))})}function i(){var n=t.defer();return o.loadingBroadcast(!0,"获取中~~",1e3),e({url:SERVERURL+"/usersongs",method:"GET",headers:{"x-access-token":localStorage.getItem("token")},withCredentials:!0}).success(function(e){o.loadingBroadcast(!1),-1===e.errCode?n.reject("请重新登录~"):(x=JSON.parse(e.data)||x,n.resolve(x))}).error(function(){n.reject("请重新登录~")}),n.promise}function c(t){e.put(SERVERURL+"/usersongs",{songs:JSON.stringify(x)},{headers:{"x-access-token":localStorage.getItem("token")},withCredentials:!0}).success(function(e){0!==e.errCode?location.href="/#/login":t&&o.toastBroadcast(!0,"上传成功!",3e3)}).error(function(){location.href="/#/login"})}function s(){O?(O.style.width=L()*V+"px",T.style.width=k.currentTime/k.duration*V+"px"):(O=document.getElementById("loadedprogress"),j=document.getElementById("progressbar"),T=document.getElementById("currentprogress"),V=j.getBoundingClientRect().width||0)}function u(){d((N.currentIndex+1)%N.audioList.length)}function d(e){A(),(e||0===e)&&(N.currentIndex=parseInt(e)),-1===N.currentIndex||N.currentIndex>=N.audioList.length||(c(),l(),r())}function l(){k.src=N.audioList[N.currentIndex].songLink,k.play(),N.isplaying=!0,n.alltime=g(N.audioList[N.currentIndex].time),n.$broadcast("current.update"),n.currentIndex=N.currentIndex,o.toastBroadcast(!0,N.audioList[N.currentIndex].songName,2e3),P=shangLrcLoad.getInstance(k,"lrcdiv"),e.get(SEARCHURL+"?method=get&callback=obj&url=http://music.baidu.com"+N.audioList[N.currentIndex].lrcLink).success(function(e){P.loadNewLrc(e.data,0)}).error(function(){P.loadNewLrc("[00:00]未找到(┬＿┬)",0)})}function g(e){e=e||k.currentTime;var t=Math.floor(e/60),n=Math.round(e%60)<10?"0"+Math.round(e%60):Math.round(e%60);return t+":"+n}function p(e){P&&k&&(P.setRepaireTimeNu(parseInt(P.getRepaireTimeNu())+parseInt(e)),o.toastBroadcast(!0,P.getRepaireTimeNu()/10+"",3e3))}function f(e,t){if(!e||!e.data||!e.data.songList)return void(N.audioList=[]);var n=e.data.songList,o=n.filter(function(e){return e.songLink&&/file\.qianqian\.com/.test(e.songLink)&&!/serverget\?url/.test(e.songLink)?e.songLink="http://cors4ngmusic.coding.io/?fun=fun&ngmusic=ngmusic&url="+encodeURIComponent(e.songLink):e.songLink&&(e.songLink=e.songLink.replace("http://yinyueshiting.baidu.com/data2/music/","http://musicdata.baidu.com/data2/music/")),e.rate});N.audioList=o,t&&(B=o)}function m(n){if(n&&(n=n.trim())){var o=t.defer();return e.get(SEARCHURL+"?method=get&url="+encodeURIComponent("http://sug.music.baidu.com/info/suggestion?format=json&word="+n+"&version=2&from=0")).success(function(e){o.resolve(e)}).error(function(e){o.resolve("")}),o.promise}}function h(){var n=t.defer();return e.get(SERVERURL+"/getchannellist").success(function(e){n.resolve(e.channel_list)}).error(function(e){n.reject(e)}),n.promise}function y(n){var o=t.defer();return e.get(SERVERURL+"/getsonglink?id="+n).success(function(e){o.resolve(e)}).error(function(e){o.reject(e)}),o.promise}function M(e){var t=y(e);t.then(function(e){f(e),n.$broadcast("aduioList.update")},function(e){N.audioList=[],n.$broadcast("aduioList.update")})}function v(){var e=h();e.then(function(e){N.channelList=e;var t=Math.floor(Math.random()*e.length);M(t),o.channelChange(),o.loadingBroadcast(!0,e[t].channel_name),n.name=e[t].channel_name},function(e){})}function L(){if(!k)return 0;var e=k.buffered;if(e.length){var t=e.end(e.length-1);return t/k.duration}}function A(){O&&T&&(O.style.width="0px",T.style.width="0px")}function I(e){var t=parseInt(e);return 1===N.audioList.length||-1>=t?(N.audioList=[],x=[],N.currentIndex=-1,n.$broadcast("clear"),void r()):(t===N.currentIndex&&u(),N.audioList.splice(t,1),x.splice(t,1),t<=N.currentIndex&&(N.currentIndex-=1),n.currentIndex=N.currentIndex,n.$broadcast("searchback.update"),void r())}var S,R=null,k=new Audio,P=null,x=[5963228],B=[],N={currentHadPlayedNu:0,audioList:[],currentIndex:-1,playMode:0,isUsrPlay:!0,isplaying:!1,channelList:[],searchMode:!1},b=localStorage.getItem("shang_music");if(b)try{var U=JSON.parse(b);S=U.setting||{},x=U.userSongIds||[]}catch(E){S={},x=[]}finally{a(N,S)}k.onerror=function(){/\/null$/.test(k.src)||(N.currentHadPlayedNu<=2?setTimeout(function(){k.src=N.audioList[N.currentIndex].songLink,k.play(),N.currentHadPlayedNu++},500):(clearTimeout(R),R=setTimeout(function(){N.currentHadPlayedNu=0,o.toastBroadcast(!0,"加载失败,播放下一首(┬＿┬)",1e3),u()},1e3)))},k.ontimeupdate=function(){n.time=g(),n.$apply(),s()},k.onended=function(){if(1===N.playMode)d(N.currentIndex);else if(0===N.playMode)u();else{var e=N.audioList.length;d(Math.floor(Math.random()*e))}};var O=document.getElementById("loadedprogress"),j=document.getElementById("progressbar"),T=document.getElementById("currentprogress"),V=0;return n.$on("clear",function(){P=shangLrcLoad(k,"lrcdiv"),P.parseLrc(""),P.setRepaireTimeNu(0),P.init(),k.src=null,k.load()}),{channelList:h,songlink:y,getSongInfo:function(n){var o=t.defer();return e.get(SERVERURL+"/getsonginfo?id="+n).success(function(e){o.resolve(e)}).error(function(e){o.reject(e)}),o.promise},updateList:M,getAudioList:function(){return N.audioList},playSong:d,playorpauseSong:function(e){e?(k.pause(),N.isplaying=!1):(k.play(),N.isplaying=!0)},playNextSong:u,playPrevSong:function(){this.playSong((N.currentIndex-1+N.audioList.length)%N.audioList.length)},getCurrentSong:function(){return N.audioList[N.currentIndex]},changePlayer:function(t,a){if(o.loadingBroadcast(!0,"加载中..."),N.searchMode=!1,N.isUsrPlay=0===t,0===t){for(var r=!0,i=B.slice(0).sort(function(e,t){return e.songId-t.songId}),c=x.slice(0).sort(function(e,t){return e-t}),s=0;s<c.length;s++)i[s]&&c[s]===i[s].songId||(r=!1);if(r)return N.isUsrPlay=!0,N.audioList=B,n.$broadcast("mode.update"),void o.loadingBroadcast();o.loadingBroadcast(!0,"自定义播放列表"),e.get(SERVERURL+"/getsongsbyids?data="+encodeURIComponent(JSON.stringify({ids:x}))).success(function(e){f(e,!0),N.isUsrPlay=!0,n.$broadcast("mode.update"),o.loadingBroadcast()}).error(function(e){o.loadingBroadcast()})}else if(1===t)o.loadingBroadcast(),v();else if(2===t){N.searchMode=!0,o.loadingBroadcast(!0,"搜索"+a+"中...");var u=m(a);if(!u)return o.toastBroadcast(!0,"请输入内容",3e3),void o.loadingBroadcast();u.then(function(t){N.isUsrPlay=!1;var a=t.data.song;a=a.map(function(e){return e.songid}),e.get(SERVERURL+"/getsongsbyids?data="+encodeURIComponent(JSON.stringify({ids:a}))).success(function(e){f(e),n.$broadcast("search.update"),o.loadingBroadcast()}).error(function(e){o.loadingBroadcast()})})}else 3===t&&(o.loadingBroadcast(),N.audioList=B,N.isUsrPlay=!0,n.$broadcast("searchback.update"))},searchSong:m,addOneSong:function(e,t){for(var n=N.audioList[e],a=-1,i=0;i<B.length;i++)if(B[i].songId===n.songId){a=i;break}-1===a?(x.push(n.songId),B.push(n),N.currentIndex=B.length-1,o.toastBroadcast(!0,"添加成功~",3e3)):(t&&(N.currentIndex=a),o.toastBroadcast(!0,"已经存在~",3e3)),t||(N.audioList=B),c(),r()},removeSong:I,getSetting:function(e){return N.hasOwnProperty(e)?N[e]:""},setSetting:function(e,t){N.hasOwnProperty(e)&&(N[e]=t)},setAudiocurrentTime:function(e){try{k.currentTime=e*k.duration}catch(t){k.setAudiocurrentTime&&k.setAudiocurrentTime(e-10>0?e-10:0)}},clearProgress:A,changeLrcTime:p,getSongs:i,upload:c}}]),mainModule.factory("MessageFactory",["$rootScope","$timeout",function(e,t){var n=null,o=null;return{loadingBroadcast:function(o,a,r){e.$broadcast("loading",o,a),r=parseInt(r)||6e4,t.cancel(n),n=t(function(){e.$broadcast("loading",!1,a)},r)},toastBroadcast:function(n,a,r){e.$broadcast("toast",n,a),r=parseInt(r)||3e3,t.cancel(o),o=t(function(){e.$broadcast("toast",!1,a)},r)},channelChange:function(){e.$broadcast("channel.toggle")}}}]),mainModule.factory("UserFactory",["$http","$state","MessageFactory",function(e,t,n){function o(o,a){n.loadingBroadcast(!0,"注册中"),e({url:LOGINURL+"/",method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},data:"username="+o+"&password="+a}).success(function(e){n.loadingBroadcast(!1),-1===e.errCode?n.toastBroadcast(!0,e.data||"注册失败~~",3e3):(localStorage.setItem("token",e.data.token),t.go("index"))}).error(function(e){n.loadingBroadcast(!1),n.toastBroadcast(!0,"注册失败,请检查网络~~",3e3)})}function a(o,a){n.loadingBroadcast(!0,"登陆中..."),e({url:LOGINURL+"/auth",method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},data:"username="+o+"&password="+a}).success(function(e){n.loadingBroadcast(!1),-1===e.errCode?n.toastBroadcast(!0,e.data||"登录失败~~",3e3):(localStorage.setItem("token",e.data.token),t.go("index"))}).error(function(e){n.loadingBroadcast(!1),n.toastBroadcast(!0,"登录失败,请检查网络~~",3e3)})}return{login:a,regist:o}}]),mainModule.controller("channelCtrl",["$rootScope","$scope","MusicFactory","MessageFactory",function(e,t,n,o){function a(){t.channels=n.getSetting("channelList"),t.showhide=r?"eleDownIn":"eleDownOut",r=!r}t.isLoading=!0,t.isUsrPlay=n.getSetting("isUsrPlay"),t.toggleChannel=a,t.$on("channel.toggle",a);var r=!1;t.togglePlayer=function(){var e=n.getSetting("isUsrPlay");t.isUsrPlay=!e,r=!1,t.showhide="eleDownOut",e?(o.loadingBroadcast(!0,"切换到随心听..."),n.changePlayer(1)):(o.loadingBroadcast(!0,"切换到用户列表..."),n.changePlayer(0))},t.upload=function(){n.upload(!0)}}]),mainModule.controller("listCtrl",["$rootScope","$scope","$state","MusicFactory","MessageFactory",function(e,t,n,o,a){function r(){localStorage.removeItem("token"),n.go("login")}function i(e){t.songs=o.getAudioList(),a.loadingBroadcast(),o.playSong(e),t.songs.length&&a.toastBroadcast(!0,t.songs[e].songName,2e3)}if(!localStorage.getItem("token"))return n.go("login"),void a.toastBroadcast(!0,"请重新登录~",3e3);t.songs=[],t.search={},e.$on("clear",function(){t.songs=[],t.$apply()}),e.$on("aduioList.update",function(){t.isUsrPlay=!1,t.isadd=!0,i(0)}),e.$on("mode.update",function(){var n=o.getSetting("isUsrPlay");e.name=n?"播放列表":"随心听",t.isUsrPlay=n,t.issearch=!1,t.isadd=!n;var a=o.getSetting("currentIndex");(a>o.getAudioList().length||-1>=a)&&(a=0),i(a)}),e.$on("searchback.update",function(){var n=o.getSetting("isUsrPlay");e.name=n?"播放列表":"随心听",t.isUsrPlay=n,t.issearch=!1,t.isadd=!1,t.songs=o.getAudioList()}),e.$on("search.update",function(){t.isUsrPlay=!1,t.issearch=!0,e.name="搜索 "+t.search.name+" 的结果",t.songs=o.getAudioList()}),t.backUsr=function(){o.changePlayer(3)},t.searchSong=function(){o.changePlayer(2,t.search.name)},t.isUsrPlay=o.getSetting("isUsrPlay");var c=navigator.userAgent;return/AppleWebKit\/(\S+)/.test(c)?void o.getSongs().then(function(){o.changePlayer(t.isUsrPlay?0:1)})["catch"](function(){a.toastBroadcast(!0,"请重新登录~~",3e3),r()}):void(e.name="本网页只支持chrome内核浏览器\n\r原因:在不使用flash下\r\n只有chrome支持播放mp3")}]),mainModule.controller("musciCtrl",["$rootScope","$scope","MusicFactory","ImgFactory",function(e,t,n,o){t.song={songPicRadio:o.headImg},t.playMode=n.getSetting("playMode"),t.isPlaying=n.getSetting("isplaying"),t.changePlaying=function(){n.playorpauseSong(t.isPlaying),t.isPlaying=n.getSetting("isplaying")},e.$on("current.update",function(){e.time=null;var a=n.getCurrentSong();t.isPlaying=n.getSetting("isplaying"),t.song=a,a.songPicRadio=o.headImg;var r=n.getSongInfo(a.songId);r.then(function(e){var n=e.data.songList;if(n&&n.length){var a=n[0],r=a.songPicRadio;a.songPicRadio=r?/http:\/\/qukufile2\.qianqian\.com/.test(r)?r.match(/http:\/\/qukufile2\.qianqian\.com.*?jpg/)[0]:SERVERURL+"/serverget?url="+encodeURIComponent(a.songPicRadio):o.headImg,t.song.songPicRadio=a.songPicRadio}},function(e){t.song.songPicRadio=o.headImg})}),e.$on("clear",function(){e.time=null,e.alltime=null,t.song={songPicRadio:o.headImg},t.playMode=n.getSetting("playMode"),t.isPlaying=!1,e.$apply(),t.$apply(),n.clearProgress(),n.setSetting("isplaying",!1)}),t.prev=function(){n.playPrevSong()},t.next=function(){n.playNextSong()},t.changeLoop=function(){n.setSetting("playMode",(parseInt(t.playMode)+1)%3),t.playMode=n.getSetting("playMode")},t.changeLrc=function(e){n.changeLrcTime(e)}}]),mainModule.controller("messageCtrl",["$scope",function(e){e.$on("loading",function(t,n,o){e.isLoading=n,e.loadingMsg=o}),e.$on("toast",function(t,n,o){e.isToast=n,e.toastMsg=o})}]),mainModule.controller("loginCtrl",["$scope","$http","$state","UserFactory",function(e,t,n,o){localStorage.getItem("token")&&n.go("index"),e.username="shang",e.login=function(){o.login(e.username,e.password)},e.regist=function(){o.regist(e.username,e.password)}}]),shangLrcLoad=function(){function e(e,t){function n(e,t){p.push({time:e,lrcstr:t})}function o(){e.currentTime>=g-f/10&&(a(),o())}function a(){if(l++,"undefined"!=typeof p[l]){clearInterval(h),g=p[l].time,m[l-2].className="",m[l-1].className="current";var e=m[l-1].moveHeight-m[0].moveHeight-M;e=e>0?parseInt(e):0;var t=y,n=t.scrollTop;h=setInterval(function(){var o=-8,a=(e-n)/-o;a=a>0?Math.ceil(a):Math.floor(a);var r=n+a;t.scrollTop=r,e===r&&clearInterval(h),n=r},30)}}function r(){n(0,""),n(0,""),n(999999,""),p.sort(function(e,t){return e.time-t.time});var e=document.createElement("div");y.appendChild(e);for(var t=0;t<p.length;t++){var o=document.createElement("p");m.push(o),o.innerHTML=p[t].lrcstr,e.appendChild(o),o.moveHeight=o.offsetTop}}function i(e){if(e)for(var t=e.split("\n"),o=0;o<t.length;o++)for(var a=t[o].split("]"),r=0;r<a.length-1;r++){var i=a[r].match(/(\d+)\:(\d+)((\.|\:)(\d+))?/);i&&!/^\s*$/.test(a[a.length-1])&&n(60*(+i[1]||0)+(+i[2]||0)+(+i[4]||0)/100,a[a.length-1])}}function c(){for(var e=0;e<m.length;e++)m[e].className=""}function s(e){f=e}function u(){return f}function d(e,t){y.innerHTML="",l=1,g=-1,p=[],m=[],i(e),r(),s(t||0)}e="string"==typeof e?document.getElementById(e):e,t="string"==typeof t?document.getElementById(t):t;var l=1,g=-1,p=[],f=0,m=[],h=null,y=document.createElement("div"),M=t.getBoundingClientRect().height/2-50;e.addEventListener("seeked",function(){l=1,g=-1}),e.addEventListener("timeupdate",function(){o()}),y.id="shang_lrc_div",t.appendChild(y);var v=document.createElement("style");return v.type="text/css",v.innerHTML="#shang_lrc_div{margin:0;padding:0;overflow-y:scroll;overflow-x:hidden;height:100%}#shang_lrc_div::-webkit-scrollbar{width:5px;height:5px;border-radius:4px}#shang_lrc_div::-webkit-scrollbar-button{display:none}#shang_lrc_div::-webkit-scrollbar-thumb{background:#ccc;border-radius:4px}#shang_lrc_div::-webkit-scrollbar-corner{display:none}.current{color:blueviolet;font-weight:bold}",document.getElementsByTagName("head")[0].appendChild(v),{init:r,parseLrc:i,clearClass:c,setRepaireTimeNu:s,getRepaireTimeNu:u,loadNewLrc:d}}var t=null;return{getInstance:function(n,o){return t||(t=e(n,o)),t}}}();