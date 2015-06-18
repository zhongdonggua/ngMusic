var musicApp=angular.module("MusicApp",["ui.router","MainModule"]);musicApp.config(["$stateProvider","$urlRouterProvider",function(e,t){t.otherwise("/index"),e.state("index",{url:"/index",views:{"":{templateUrl:"tpls/main.html"},"choose@index":{templateUrl:"tpls/choose.html"},"list@index":{templateUrl:"tpls/list.html"},"music@index":{templateUrl:"tpls/musicctrl.html"}}}).state("login",{url:"/login",views:{"":{templateUrl:"tpls/login.html"}}})}]);var mainModule=angular.module("MainModule",[]),SEARCHURL="http://cors.coding.io",SERVERURL="http://ngmusic.coding.io/node",LOGINURL="http://iuser.coding.io/auth";mainModule.directive("loadchannel",["$rootScope","MusicService","MessageService",function(e,t,n){return{restrict:"AE",link:function(o,i){i.on("click",function(o){o.stopPropagation();var a=i.attr("data-id");e.name="随心听: "+i.attr("data-name"),e.$apply(),t.updateList(a),n.channelChange(),n.loadingBroadcast(!0,"加载中...")})}}}]),mainModule.directive("pauseaudio",["MusicService",function(e){return{restrict:"A",link:function(t,n){n.on("click",function(t){t.stopPropagation(),e.playorpauseSong()})}}}]),mainModule.directive("removespan",["MusicService","MessageService",function(e){return{restrict:"A",link:function(t,n){n.on("click",function(t){t.stopPropagation();var o=n.parent().attr("data-index"),i=e.getSetting("isUsrPlay");i?e.removeSong(o):e.addOneSong(o,!0)})}}}]),mainModule.directive("playaudio",["MusicService",function(e){return{restrict:"AE",link:function(t,n){n.on("click",function(t){t.stopPropagation();var o=n.attr("data-index");e.getSetting("searchMode")?(e.addOneSong(o),e.changePlayer(0)):e.playSong(o)})}}}]),mainModule.directive("detectiveenter",["MusicService",function(e){return{restrict:"AE",link:function(t,n){n.on("keydown",function(t){13===t.keyCode&&e.changePlayer(2,n[0].value)})}}}]),mainModule.directive("progressdiv",["MusicService",function(e){return{restrict:"AE",link:function(t,n){function o(t){if(i){var o=n[0].getBoundingClientRect(),s=r.getBoundingClientRect().width,c=t.x-o.left;c>s?c=s:c>o.width&&(c=o.width),a.style.width=c+"px",e.setAudiocurrentTime(c/o.width)}return t.stopPropagation(),t.preventDefault(),!1}var i=!1,a=document.getElementById("currentprogress"),r=document.getElementById("loadedprogress");n.on("mousedown",function(){i=!0,document.addEventListener("mousemove",o)}),document.addEventListener("mouseup",function(e){o(e),i=!1,document.removeEventListener("mousemove",o)})}}}]),mainModule.service("MusicService",["$http","$q","$rootScope","MessageService",function(e,t,n,o){function i(e,t){for(var n in e)t.hasOwnProperty(n)&&(e[n]=t[n])}function a(){var e={};for(var t in $)$.hasOwnProperty(t)&&"audioList"!=t&&"channelList"!=t&&(e[t]=$[t]);setTimeout(function(){localStorage.setItem("shang_music",JSON.stringify({setting:e,userSongIds:k}))})}function r(){var n=t.defer();return o.loadingBroadcast(!0,"获取中~~",1e3),e({url:SERVERURL+"/usersongs",method:"GET",headers:{"x-access-token":localStorage.getItem("token")},withCredentials:!0}).success(function(e){o.loadingBroadcast(!1),-1===e.errCode?n.reject("请重新登录~"):(k=JSON.parse(e.data)||k,n.resolve(k))}).error(function(){n.reject("请重新登录~")}),n.promise}function s(t){e.put(SERVERURL+"/usersongs",{songs:JSON.stringify(k)},{headers:{"x-access-token":localStorage.getItem("token")},withCredentials:!0}).success(function(e){0!==e.errCode?location.href="/#/login":t&&o.toastBroadcast(!0,"上传成功!",3e3)}).error(function(){location.href="/#/login"})}function c(){C?(C.style.width=S()*A+"px",N.style.width=R.currentTime/R.duration*A+"px"):(C=document.getElementById("loadedprogress"),T=document.getElementById("progressbar"),N=document.getElementById("currentprogress"),A=T.getBoundingClientRect().width||0)}function u(){d(($.currentIndex+1)%$.audioList.length)}function d(e){M(),(e||0===e)&&($.currentIndex=parseInt(e)),-1===$.currentIndex||$.currentIndex>=$.audioList.length||(s(),l(),a())}function l(){R.src=$.audioList[$.currentIndex].songLink,R.play(),$.isplaying=!0,n.alltime=g($.audioList[$.currentIndex].time),n.$broadcast("current.update"),n.currentIndex=$.currentIndex,o.toastBroadcast(!0,$.audioList[$.currentIndex].songName,2e3),b=shangLrcLoad.getInstance(R,"lrcdiv"),e.get(SEARCHURL+"?method=get&callback=obj&url=http://music.baidu.com"+$.audioList[$.currentIndex].lrcLink).success(function(e){b.loadNewLrc(e.data,0)}).error(function(){b.loadNewLrc("[00:00]未找到(┬＿┬)",0)})}function g(e){e=e||R.currentTime;var t=Math.floor(e/60),n=Math.round(e%60)<10?"0"+Math.round(e%60):Math.round(e%60);return t+":"+n}function p(e){b&&R&&(b.setRepaireTimeNu(parseInt(b.getRepaireTimeNu())+parseInt(e)),o.toastBroadcast(!0,b.getRepaireTimeNu()/10+"",3e3))}function f(e,t){if(!e||!e.data||!e.data.songList)return void($.audioList=[]);var n=e.data.songList,o=n.filter(function(e){return e.songLink&&/file\.qianqian\.com/.test(e.songLink)&&!/serverget\?url/.test(e.songLink)?e.songLink="http://cors4ngmusic.coding.io/?fun=fun&url="+encodeURIComponent(e.songLink):e.songLink&&(e.songLink=e.songLink.replace("http://yinyueshiting.baidu.com/data2/music/","http://musicdata.baidu.com/data2/music/")),e.rate});$.audioList=o,t&&(B=o)}function m(n){if(n&&(n=n.trim())){var o=t.defer();return e.get(SEARCHURL+"?method=get&url="+encodeURIComponent("http://sug.music.baidu.com/info/suggestion?format=json&word="+n+"&version=2&from=0")).success(function(e){o.resolve(e)}).error(function(e){o.resolve("")}),o.promise}}function h(){var n=t.defer();return e.get(SERVERURL+"/getchannellist").success(function(e){n.resolve(e.channel_list)}).error(function(e){n.reject(e)}),n.promise}function v(n){var o=t.defer();return e.get(SERVERURL+"/getsonglink?id="+n).success(function(e){o.resolve(e)}).error(function(e){o.reject(e)}),o.promise}function y(e){var t=v(e);t.then(function(e){f(e),n.$broadcast("aduioList.update")},function(e){$.audioList=[],n.$broadcast("aduioList.update")})}function L(){var e=h();e.then(function(e){$.channelList=e;var t=Math.floor(Math.random()*e.length);y(t),o.channelChange(),o.loadingBroadcast(!0,e[t].channel_name),n.name=e[t].channel_name},function(e){})}function S(){if(!R)return 0;var e=R.buffered;if(e.length){var t=e.end(e.length-1);return t/R.duration}}function M(){C&&N&&(C.style.width="0px",N.style.width="0px")}function I(e){var t=parseInt(e);return 1===$.audioList.length||-1>=t?($.audioList=[],k=[],$.currentIndex=-1,n.$broadcast("clear"),void a()):(t===$.currentIndex&&u(),$.audioList.splice(t,1),k.splice(t,1),t<=$.currentIndex&&($.currentIndex-=1),n.currentIndex=$.currentIndex,n.$broadcast("searchback.update"),void a())}var P,x=null,R=new Audio,b=null,k=[5963228],B=[],$={currentHadPlayedNu:0,audioList:[],currentIndex:-1,playMode:0,isUsrPlay:!0,isplaying:!1,channelList:[],searchMode:!1},w=localStorage.getItem("shang_music");if(w)try{var E=JSON.parse(w);P=E.setting||{},k=E.userSongIds||[]}catch(U){P={},k=[]}finally{i($,P)}R.onerror=function(){/\/null$/.test(R.src)||($.currentHadPlayedNu<=2?setTimeout(function(){R.src=$.audioList[$.currentIndex].songLink,R.play(),$.currentHadPlayedNu++},500):(clearTimeout(x),x=setTimeout(function(){$.currentHadPlayedNu=0,o.toastBroadcast(!0,"加载失败,播放下一首(┬＿┬)",1e3),u()},1e3)))},R.ontimeupdate=function(){n.time=g(),n.$apply(),c()},R.onended=function(){if(1===$.playMode)d($.currentIndex);else if(0===$.playMode)u();else{var e=$.audioList.length;d(Math.floor(Math.random()*e))}};var C=document.getElementById("loadedprogress"),T=document.getElementById("progressbar"),N=document.getElementById("currentprogress"),A=0;return n.$on("clear",function(){b=shangLrcLoad(R,"lrcdiv"),b.parseLrc(""),b.setRepaireTimeNu(0),b.init(),R.src=null,R.load()}),{channelList:h,songlink:v,getSongInfo:function(n){var o=t.defer();return e.get(SERVERURL+"/getsonginfo?id="+n).success(function(e){o.resolve(e)}).error(function(e){o.reject(e)}),o.promise},updateList:y,getAudioList:function(){return $.audioList},playSong:d,playorpauseSong:function(e){e?(R.pause(),$.isplaying=!1):(R.play(),$.isplaying=!0)},playNextSong:u,playPrevSong:function(){this.playSong(($.currentIndex-1+$.audioList.length)%$.audioList.length)},getCurrentSong:function(){return $.audioList[$.currentIndex]},changePlayer:function(t,i){if(o.loadingBroadcast(!0,"加载中"),$.searchMode=!1,$.isUsrPlay=0===t,0===t){for(var a=!0,r=B.slice(0).sort(function(e,t){return e.songId-t.songId}),s=k.slice(0).sort(function(e,t){return e-t}),c=0;c<s.length;c++)r[c]&&s[c]===r[c].songId||(a=!1);if(a)return $.isUsrPlay=!0,$.audioList=B,n.$broadcast("mode.update"),void o.loadingBroadcast();o.loadingBroadcast(!0,"自定义播放列表"),e.get(SERVERURL+"/getsongsbyids?data="+encodeURIComponent(JSON.stringify({ids:k}))).success(function(e){f(e,!0),$.isUsrPlay=!0,n.$broadcast("mode.update"),o.loadingBroadcast()}).error(function(e){o.loadingBroadcast()})}else if(1===t)o.loadingBroadcast(),L();else if(2===t){$.searchMode=!0,o.loadingBroadcast(!0,"搜索"+i+"中...");var u=m(i);if(!u)return o.toastBroadcast(!0,"请输入内容",3e3),void o.loadingBroadcast();u.then(function(t){$.isUsrPlay=!1;var i=t.data.song;i=i.map(function(e){return e.songid}),e.get(SERVERURL+"/getsongsbyids?data="+encodeURIComponent(JSON.stringify({ids:i}))).success(function(e){f(e),n.$broadcast("search.update"),o.loadingBroadcast()}).error(function(e){o.loadingBroadcast()})})}else 3===t&&(o.loadingBroadcast(),$.audioList=B,$.isUsrPlay=!0,n.$broadcast("searchback.update"))},searchSong:m,addOneSong:function(e,t){for(var n=$.audioList[e],i=-1,r=0;r<B.length;r++)if(B[r].songId===n.songId){i=r;break}-1===i?(k.push(n.songId),B.push(n),$.currentIndex=B.length-1,o.toastBroadcast(!0,"添加成功~",3e3)):(t&&($.currentIndex=i),o.toastBroadcast(!0,"已经存在~",3e3)),t||($.audioList=B),a()},removeSong:I,getSetting:function(e){return $.hasOwnProperty(e)?$[e]:""},setSetting:function(e,t){$.hasOwnProperty(e)&&($[e]=t)},setAudiocurrentTime:function(e){try{R.currentTime=e*R.duration}catch(t){R.setAudiocurrentTime&&R.setAudiocurrentTime(e-10>0?e-10:0)}},clearProgress:M,changeLrcTime:p,getSongs:r,upload:s}}]),mainModule.service("MessageService",["$rootScope",function(e){var t=null,n=!1,o="",i=!1,a="";return{loadingBroadcast:function(e,t){this.setLoading(e||!1),this.setLoadingMsg(t||""),this.broadcast()},setLoading:function(e){n=e},getLoading:function(){return n},setLoadingMsg:function(e){o=e},getLoadingMsg:function(){return o},toastBroadcast:function(e,n,o){if(this.settoast(e||!1),this.settoastMsg(n||""),this.broadcast(),parseInt(o)){var i=this;clearTimeout(t),t=setTimeout(function(){i.toastBroadcast(!1)},parseInt(o))}},settoast:function(e){i=e},gettoast:function(){return i},settoastMsg:function(e){a=e},gettoastMsg:function(){return a},broadcast:function(){e.$broadcast("message.update")},channelChange:function(){e.$broadcast("channel.toggle")}}}]),mainModule.controller("channelCtrl",["$rootScope","$scope","MusicService","MessageService",function(e,t,n,o){function i(){t.channels=n.getSetting("channelList"),t.showhide=a?"eleDownIn":"eleDownOut",a=!a}t.isLoading=!0,t.isUsrPlay=n.getSetting("isUsrPlay"),t.toggleChannel=i,t.$on("channel.toggle",i);var a=!1;t.togglePlayer=function(){var e=n.getSetting("isUsrPlay");t.isUsrPlay=!e,a=!1,t.showhide="eleDownOut",e?(o.loadingBroadcast(!0,"切换到随心听..."),n.changePlayer(1)):(o.loadingBroadcast(!0,"切换到用户列表..."),n.changePlayer(0))},t.upload=function(){n.upload(!0)}}]),mainModule.controller("listCtrl",["$rootScope","$scope","$state","MusicService","MessageService",function(e,t,n,o,i){function a(){localStorage.removeItem("token"),n.go("login")}function r(e){t.songs=o.getAudioList(),i.loadingBroadcast(),o.playSong(e),t.songs.length&&i.toastBroadcast(!0,t.songs[e].songName,2e3)}if(!localStorage.getItem("token"))return n.go("login"),void i.toastBroadcast(!0,"请重新登录~",3e3);t.songs=[],t.search={},e.$on("clear",function(){t.songs=[],t.$apply()}),e.$on("aduioList.update",function(){t.isUsrPlay=!1,t.isadd=!0,r(0)}),e.$on("mode.update",function(){var n=o.getSetting("isUsrPlay");e.name=n?"播放列表":"随心听",t.isUsrPlay=n,t.issearch=!1,t.isadd=!n;var i=o.getSetting("currentIndex");(i>o.getAudioList().length||-1>=i)&&(i=0),r(i)}),e.$on("searchback.update",function(){var n=o.getSetting("isUsrPlay");e.name=n?"播放列表":"随心听",t.isUsrPlay=n,t.issearch=!1,t.isadd=!1,t.songs=o.getAudioList()}),e.$on("search.update",function(){t.isUsrPlay=!1,t.issearch=!0,e.name="搜索 "+t.search.name+" 的结果",t.songs=o.getAudioList()}),t.backUsr=function(){o.changePlayer(3)},t.searchSong=function(){o.changePlayer(2,t.search.name)},t.isUsrPlay=o.getSetting("isUsrPlay");var s=navigator.userAgent;return/AppleWebKit\/(\S+)/.test(s)?void o.getSongs().then(function(){o.changePlayer(t.isUsrPlay?0:1)})["catch"](function(){i.toastBroadcast(!0,"请重新登录~~",3e3),a()}):void(e.name="本网页只支持chrome内核浏览器\n\r原因:在不使用flash下\r\n只有chrome支持播放mp3")}]),mainModule.controller("musciCtrl",["$rootScope","$scope","MusicService",function(e,t,n){t.song={songPicRadio:"http://7xiblm.com1.z0.glb.clouddn.com/o_19irpgates13ec7n3a1gck1hho9.png"},t.playMode=n.getSetting("playMode"),t.isPlaying=n.getSetting("isplaying"),t.changePlaying=function(){n.playorpauseSong(t.isPlaying),t.isPlaying=n.getSetting("isplaying")},e.$on("current.update",function(){e.time=null;var o=n.getCurrentSong();t.isPlaying=n.getSetting("isplaying"),t.song=o,o.songPicRadio="http://7xiblm.com1.z0.glb.clouddn.com/o_19irpgates13ec7n3a1gck1hho9.png";var i=n.getSongInfo(o.songId);i.then(function(e){var n=e.data.songList;if(n&&n.length){var o=n[0],i=o.songPicRadio;o.songPicRadio=i?/http:\/\/qukufile2\.qianqian\.com/.test(i)?i.match(/http:\/\/qukufile2\.qianqian\.com.*?jpg/)[0]:"serverget?url="+encodeURIComponent(o.songPicRadio):"http://7xiblm.com1.z0.glb.clouddn.com/o_19irpgates13ec7n3a1gck1hho9.png",t.song.songPicRadio=o.songPicRadio}},function(e){t.song.songPicRadio="http://7xiblm.com1.z0.glb.clouddn.com/o_19irpgates13ec7n3a1gck1hho9.png"})}),e.$on("clear",function(){e.time=null,e.alltime=null,t.song={songPicRadio:"http://7xiblm.com1.z0.glb.clouddn.com/o_19irpgates13ec7n3a1gck1hho9.png"},t.playMode=n.getSetting("playMode"),t.isPlaying=!1,e.$apply(),t.$apply(),n.clearProgress(),n.setSetting("isplaying",!1)}),t.prev=function(){n.playPrevSong()},t.next=function(){n.playNextSong()},t.changeLoop=function(){n.setSetting("playMode",(parseInt(t.playMode)+1)%3),t.playMode=n.getSetting("playMode")},t.changeLrc=function(e){n.changeLrcTime(e)}}]),mainModule.controller("messageCtrl",["$rootScope","$scope","MessageService",function(e,t,n){t.$on("message.update",function(){t.isLoading=n.getLoading(),t.loadingMsg=n.getLoadingMsg(),t.isToast=n.gettoast(),t.toastMsg=n.gettoastMsg()})}]),mainModule.controller("loginCtrl",["$scope","$http","$state","MessageService",function(e,t,n,o){function i(){o.loadingBroadcast(!0,"登陆中"),t({url:LOGINURL,method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},data:"username="+e.username+"&password="+e.password}).success(function(e){o.loadingBroadcast(!1),-1===e.errCode?o.toastBroadcast(!0,e.data||"登录失败~~",3e3):(localStorage.setItem("token",e.data.token),n.go("index"))}).error(function(e){o.loadingBroadcast(!1),o.toastBroadcast(!0,"登录失败,请检查网络~~",3e3)})}localStorage.getItem("token")&&n.go("index"),e.login=i,e.username="shang"}]),shangLrcLoad=function(){function e(e,t){function n(e,t){p.push({time:e,lrcstr:t})}function o(){e.currentTime>=g-f/10&&(i(),o())}function i(){if(l++,"undefined"!=typeof p[l]){clearInterval(h),g=p[l].time,m[l-2].className="",m[l-1].className="current";var e=m[l-1].moveHeight-m[0].moveHeight-y;e=e>0?parseInt(e):0;var t=v,n=t.scrollTop;h=setInterval(function(){var o=-8,i=(e-n)/-o;i=i>0?Math.ceil(i):Math.floor(i);var a=n+i;t.scrollTop=a,e===a&&clearInterval(h),n=a},30)}}function a(){n(0,""),n(0,""),n(999999,""),p.sort(function(e,t){return e.time-t.time});var e=document.createElement("div");v.appendChild(e);for(var t=0;t<p.length;t++){var o=document.createElement("p");m.push(o),o.innerHTML=p[t].lrcstr,e.appendChild(o),o.moveHeight=o.offsetTop}}function r(e){if(e)for(var t=e.split("\n"),o=0;o<t.length;o++)for(var i=t[o].split("]"),a=0;a<i.length-1;a++){var r=i[a].match(/(\d+)\:(\d+)((\.|\:)(\d+))?/);r&&!/^\s*$/.test(i[i.length-1])&&n(60*(+r[1]||0)+(+r[2]||0)+(+r[4]||0)/100,i[i.length-1])}}function s(){for(var e=0;e<m.length;e++)m[e].className=""}function c(e){f=e}function u(){return f}function d(e,t){v.innerHTML="",l=1,g=-1,p=[],m=[],r(e),a(),c(t||0)}e="string"==typeof e?document.getElementById(e):e,t="string"==typeof t?document.getElementById(t):t;var l=1,g=-1,p=[],f=0,m=[],h=null,v=document.createElement("div"),y=t.getBoundingClientRect().height/2-50;e.addEventListener("seeked",function(){l=1,g=-1}),e.addEventListener("timeupdate",function(){o()}),v.id="shang_lrc_div",t.appendChild(v);var L=document.createElement("style");return L.type="text/css",L.innerHTML="#shang_lrc_div{margin:0;padding:0;overflow-y:scroll;overflow-x:hidden;height:100%}#shang_lrc_div::-webkit-scrollbar{width:5px;height:5px;border-radius:4px}#shang_lrc_div::-webkit-scrollbar-button{display:none}#shang_lrc_div::-webkit-scrollbar-thumb{background:#ccc;border-radius:4px}#shang_lrc_div::-webkit-scrollbar-corner{display:none}.current{color:blueviolet;font-weight:bold}",document.getElementsByTagName("head")[0].appendChild(L),{init:a,parseLrc:r,clearClass:s,setRepaireTimeNu:c,getRepaireTimeNu:u,loadNewLrc:d}}var t=null;return{getInstance:function(n,o){return t||(t=e(n,o)),t}}}();