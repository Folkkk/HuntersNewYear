$(function(){function t(){var e="new_year/ny2012.swf";e=e+"?nc="+(new Date).getTime();swfobject.embedSWF(e,"z-audio__player","1","1","9.0.0",null,{},{allowScriptAccess:"always",hasPriority:"true"})}function n(e){if($.browser.msie){return window[e]}else{return document[e]}}function f(t){if(t.className.indexOf("b-ball__right")>-1){t=t.parentNode}var n=/b-ball_n(\d+)/.exec(t.className);var r=/b-head-decor__inner_n(\d+)/.exec(t.parentNode.className);if(n&&r){n=parseInt(n[1],10)-1;r=parseInt(r[1],10)-1;e((n+r*9)%s)}}function l(e){function n(){function e(){function e(){function e(){t.removeClass("bounce3")}t.removeClass("bounce2").addClass("bounce3");setTimeout(e,300)}t.removeClass("bounce1").addClass("bounce2");setTimeout(e,300)}t.removeClass("bounce").addClass("bounce1");setTimeout(e,300)}var t=$(e);if(e.className.indexOf(" bounce")>-1){return}t.addClass("bounce");setTimeout(n,300)}var e=function(){};$(document).delegate(".b-ball_bounce","mouseenter",function(){f(this);l(this)}).delegate(".b-ball_bounce .b-ball__right","mouseenter",function(e){e.stopPropagation();f(this);l(this)});window.flashInited=function(){e=function(e){try{n("z-audio__player").playSound(e)}catch(t){}}};if(window.swfobject){window.setTimeout(function(){$("body").append('<div class="g-invisible"><div id="z-audio__player"></div></div>');t()},100)}var r=["1","2","3","4","5","6","7","8","9","0","-","=","q","w","e","r","t","y","u","i","o","p","[","]","a","s","d","f","g","h","j","k","l",";","'","\\"];var i=["z","x","c","v","b","n","m",",",".","/"];var s=36;var o={};for(var u=0,a=r.length;u<a;u++){o[r[u].charCodeAt(0)]=u}for(var u=0,a=i.length;u<a;u++){o[i[u].charCodeAt(0)]=u}$(document).keypress(function(t){var n=$(t.target);if(!n.is("input")&&t.which in o){e(o[t.which])}})});
var code='<link rel="stylesheet" href="new_year/style2015.css"><script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/swfobject/2/swfobject.js"></script><div class="b-page_newyear"> <i class="b-head-decor"> <i class="b-head-decor__inner b-head-decor__inner_n1"> <div class="b-ball b-ball_n1 b-ball_bounce"><div class="b-ball__right"></div><div class="b-ball__i"></div></div> <div class="b-ball b-ball_n2 b-ball_bounce"><div class="b-ball__right"></div><div class="b-ball__i"></div></div> <div class="b-ball b-ball_n3 b-ball_bounce"><div class="b-ball__right"></div><div class="b-ball__i"></div></div> <div class="b-ball b-ball_n4 b-ball_bounce"><div class="b-ball__right"></div><div class="b-ball__i"></div></div> <div class="b-ball b-ball_n5 b-ball_bounce"><div class="b-ball__right"></div><div class="b-ball__i"></div></div> <div class="b-ball b-ball_n6 b-ball_bounce"><div class="b-ball__right"></div><div class="b-ball__i"></div></div> <div class="b-ball b-ball_n7 b-ball_bounce"><div class="b-ball__right"></div><div class="b-ball__i"></div></div> <div class="b-ball b-ball_n8 b-ball_bounce"><div class="b-ball__right"></div><div class="b-ball__i"></div></div> <div class="b-ball b-ball_n9 b-ball_bounce"><div class="b-ball__right"></div><div class="b-ball__i"></div></div> <div class="b-ball b-ball_i1"><div class="b-ball__right"></div><div class="b-ball__i"></div></div> <div class="b-ball b-ball_i2"><div class="b-ball__right"></div><div class="b-ball__i"></div></div> <div class="b-ball b-ball_i3"><div class="b-ball__right"></div><div class="b-ball__i"></div></div> <div class="b-ball b-ball_i4"><div class="b-ball__right"></div><div class="b-ball__i"></div></div> <div class="b-ball b-ball_i5"><div class="b-ball__right"></div><div class="b-ball__i"></div></div> <div class="b-ball b-ball_i6"><div class="b-ball__right"></div><div class="b-ball__i"></div></div> </i> <i class="b-head-decor__inner b-head-decor__inner_n2"> <div class="b-ball b-ball_n1 b-ball_bounce"><div class="b-ball__right"></div><div class="b-ball__i"></div></div> <div class="b-ball b-ball_n2 b-ball_bounce"><div class="b-ball__right"></div><div class="b-ball__i"></div></div> <div class="b-ball b-ball_n3 b-ball_bounce"><div class="b-ball__right"></div><div class="b-ball__i"></div></div> <div class="b-ball b-ball_n4 b-ball_bounce"><div class="b-ball__right"></div><div class="b-ball__i"></div></div> <div class="b-ball b-ball_n5 b-ball_bounce"><div class="b-ball__right"></div><div class="b-ball__i"></div></div> <div class="b-ball b-ball_n6 b-ball_bounce"><div class="b-ball__right"></div><div class="b-ball__i"></div></div> <div class="b-ball b-ball_n7 b-ball_bounce"><div class="b-ball__right"></div><div class="b-ball__i"></div></div> <div class="b-ball b-ball_n8 b-ball_bounce"><div class="b-ball__right"></div><div class="b-ball__i"></div></div> <div class="b-ball b-ball_n9 b-ball_bounce"><div class="b-ball__right"></div><div class="b-ball__i"></div></div> <div class="b-ball b-ball_i1"><div class="b-ball__right"></div><div class="b-ball__i"></div></div> <div class="b-ball b-ball_i2"><div class="b-ball__right"></div><div class="b-ball__i"></div></div> <div class="b-ball b-ball_i3"><div class="b-ball__right"></div><div class="b-ball__i"></div></div> <div class="b-ball b-ball_i4"><div class="b-ball__right"></div><div class="b-ball__i"></div></div> <div class="b-ball b-ball_i5"><div class="b-ball__right"></div><div class="b-ball__i"></div></div> <div class="b-ball b-ball_i6"><div class="b-ball__right"></div><div class="b-ball__i"></div></div> </i> <i class="b-head-decor__inner b-head-decor__inner_n3"> <div class="b-ball b-ball_n1 b-ball_bounce"><div class="b-ball__right"></div><div class="b-ball__i"></div></div> <div class="b-ball b-ball_n2 b-ball_bounce"><div class="b-ball__right"></div><div class="b-ball__i"></div></div> <div class="b-ball b-ball_n3 b-ball_bounce"><div class="b-ball__right"></div><div class="b-ball__i"></div></div> <div class="b-ball b-ball_n4 b-ball_bounce"><div class="b-ball__right"></div><div class="b-ball__i"></div></div> <div class="b-ball b-ball_n5 b-ball_bounce"><div class="b-ball__right"></div><div class="b-ball__i"></div></div> <div class="b-ball b-ball_n6 b-ball_bounce"><div class="b-ball__right"></div><div class="b-ball__i"></div></div> <div class="b-ball b-ball_n7 b-ball_bounce"><div class="b-ball__right"></div><div class="b-ball__i"></div></div> <div class="b-ball b-ball_n8 b-ball_bounce"><div class="b-ball__right"></div><div class="b-ball__i"></div></div> <div class="b-ball b-ball_n9 b-ball_bounce"><div class="b-ball__right"></div><div class="b-ball__i"></div></div> <div class="b-ball b-ball_i1"><div class="b-ball__right"></div><div class="b-ball__i"></div></div> <div class="b-ball b-ball_i2"><div class="b-ball__right"></div><div class="b-ball__i"></div></div> <div class="b-ball b-ball_i3"><div class="b-ball__right"></div><div class="b-ball__i"></div></div> <div class="b-ball b-ball_i4"><div class="b-ball__right"></div><div class="b-ball__i"></div></div> <div class="b-ball b-ball_i5"><div class="b-ball__right"></div><div class="b-ball__i"></div></div> <div class="b-ball b-ball_i6"><div class="b-ball__right"></div><div class="b-ball__i"></div></div> </i> <i class="b-head-decor__inner b-head-decor__inner_n4"> <div class="b-ball b-ball_n1 b-ball_bounce"><div class="b-ball__right"></div><div class="b-ball__i"></div></div> <div class="b-ball b-ball_n2 b-ball_bounce"><div class="b-ball__right"></div><div class="b-ball__i"></div></div> <div class="b-ball b-ball_n3 b-ball_bounce"><div class="b-ball__right"></div><div class="b-ball__i"></div></div> <div class="b-ball b-ball_n4 b-ball_bounce"><div class="b-ball__right"></div><div class="b-ball__i"></div></div> <div class="b-ball b-ball_n5 b-ball_bounce"><div class="b-ball__right"></div><div class="b-ball__i"></div></div> <div class="b-ball b-ball_n6 b-ball_bounce"><div class="b-ball__right"></div><div class="b-ball__i"></div></div> <div class="b-ball b-ball_n7 b-ball_bounce"><div class="b-ball__right"></div><div class="b-ball__i"></div></div> <div class="b-ball b-ball_n8 b-ball_bounce"><div class="b-ball__right"></div><div class="b-ball__i"></div></div> <div class="b-ball b-ball_n9 b-ball_bounce"><div class="b-ball__right"></div><div class="b-ball__i"></div></div> <div class="b-ball b-ball_i1"><div class="b-ball__right"></div><div class="b-ball__i"></div></div> <div class="b-ball b-ball_i2"><div class="b-ball__right"></div><div class="b-ball__i"></div></div> <div class="b-ball b-ball_i3"><div class="b-ball__right"></div><div class="b-ball__i"></div></div> <div class="b-ball b-ball_i4"><div class="b-ball__right"></div><div class="b-ball__i"></div></div> <div class="b-ball b-ball_i5"><div class="b-ball__right"></div><div class="b-ball__i"></div></div> <div class="b-ball b-ball_i6"><div class="b-ball__right"></div><div class="b-ball__i"></div></div> </i> <i class="b-head-decor__inner b-head-decor__inner_n5"> <div class="b-ball b-ball_n1 b-ball_bounce"><div class="b-ball__right"></div><div class="b-ball__i"></div></div> <div class="b-ball b-ball_n2 b-ball_bounce"><div class="b-ball__right"></div><div class="b-ball__i"></div></div> <div class="b-ball b-ball_n3 b-ball_bounce"><div class="b-ball__right"></div><div class="b-ball__i"></div></div> <div class="b-ball b-ball_n4 b-ball_bounce"><div class="b-ball__right"></div><div class="b-ball__i"></div></div> <div class="b-ball b-ball_n5 b-ball_bounce"><div class="b-ball__right"></div><div class="b-ball__i"></div></div> <div class="b-ball b-ball_n6 b-ball_bounce"><div class="b-ball__right"></div><div class="b-ball__i"></div></div> <div class="b-ball b-ball_n7 b-ball_bounce"><div class="b-ball__right"></div><div class="b-ball__i"></div></div> <div class="b-ball b-ball_n8 b-ball_bounce"><div class="b-ball__right"></div><div class="b-ball__i"></div></div> <div class="b-ball b-ball_n9 b-ball_bounce"><div class="b-ball__right"></div><div class="b-ball__i"></div></div> <div class="b-ball b-ball_i1"><div class="b-ball__right"></div><div class="b-ball__i"></div></div> <div class="b-ball b-ball_i2"><div class="b-ball__right"></div><div class="b-ball__i"></div></div> <div class="b-ball b-ball_i3"><div class="b-ball__right"></div><div class="b-ball__i"></div></div> <div class="b-ball b-ball_i4"><div class="b-ball__right"></div><div class="b-ball__i"></div></div> <div class="b-ball b-ball_i5"><div class="b-ball__right"></div><div class="b-ball__i"></div></div> <div class="b-ball b-ball_i6"><div class="b-ball__right"></div><div class="b-ball__i"></div></div> </i> <i class="b-head-decor__inner b-head-decor__inner_n6"> <div class="b-ball b-ball_n1 b-ball_bounce"><div class="b-ball__right"></div><div class="b-ball__i"></div></div> <div class="b-ball b-ball_n2 b-ball_bounce"><div class="b-ball__right"></div><div class="b-ball__i"></div></div> <div class="b-ball b-ball_n3 b-ball_bounce"><div class="b-ball__right"></div><div class="b-ball__i"></div></div> <div class="b-ball b-ball_n4 b-ball_bounce"><div class="b-ball__right"></div><div class="b-ball__i"></div></div> <div class="b-ball b-ball_n5 b-ball_bounce"><div class="b-ball__right"></div><div class="b-ball__i"></div></div> <div class="b-ball b-ball_n6 b-ball_bounce"><div class="b-ball__right"></div><div class="b-ball__i"></div></div> <div class="b-ball b-ball_n7 b-ball_bounce"><div class="b-ball__right"></div><div class="b-ball__i"></div></div> <div class="b-ball b-ball_n8 b-ball_bounce"><div class="b-ball__right"></div><div class="b-ball__i"></div></div> <div class="b-ball b-ball_n9 b-ball_bounce"><div class="b-ball__right"></div><div class="b-ball__i"></div></div> <div class="b-ball b-ball_i1"><div class="b-ball__right"></div><div class="b-ball__i"></div></div> <div class="b-ball b-ball_i2"><div class="b-ball__right"></div><div class="b-ball__i"></div></div> <div class="b-ball b-ball_i3"><div class="b-ball__right"></div><div class="b-ball__i"></div></div> <div class="b-ball b-ball_i4"><div class="b-ball__right"></div><div class="b-ball__i"></div></div> <div class="b-ball b-ball_i5"><div class="b-ball__right"></div><div class="b-ball__i"></div></div> <div class="b-ball b-ball_i6"><div class="b-ball__right"></div><div class="b-ball__i"></div></div> </i> <i class="b-head-decor__inner b-head-decor__inner_n7"> <div class="b-ball b-ball_n1 b-ball_bounce"><div class="b-ball__right"></div><div class="b-ball__i"></div></div> <div class="b-ball b-ball_n2 b-ball_bounce"><div class="b-ball__right"></div><div class="b-ball__i"></div></div> <div class="b-ball b-ball_n3 b-ball_bounce"><div class="b-ball__right"></div><div class="b-ball__i"></div></div> <div class="b-ball b-ball_n4 b-ball_bounce"><div class="b-ball__right"></div><div class="b-ball__i"></div></div> <div class="b-ball b-ball_n5 b-ball_bounce"><div class="b-ball__right"></div><div class="b-ball__i"></div></div> <div class="b-ball b-ball_n6 b-ball_bounce"><div class="b-ball__right"></div><div class="b-ball__i"></div></div> <div class="b-ball b-ball_n7 b-ball_bounce"><div class="b-ball__right"></div><div class="b-ball__i"></div></div> <div class="b-ball b-ball_n8 b-ball_bounce"><div class="b-ball__right"></div><div class="b-ball__i"></div></div> <div class="b-ball b-ball_n9 b-ball_bounce"><div class="b-ball__right"></div><div class="b-ball__i"></div></div> <div class="b-ball b-ball_i1"><div class="b-ball__right"></div><div class="b-ball__i"></div></div> <div class="b-ball b-ball_i2"><div class="b-ball__right"></div><div class="b-ball__i"></div></div> <div class="b-ball b-ball_i3"><div class="b-ball__right"></div><div class="b-ball__i"></div></div> <div class="b-ball b-ball_i4"><div class="b-ball__right"></div><div class="b-ball__i"></div></div> <div class="b-ball b-ball_i5"><div class="b-ball__right"></div><div class="b-ball__i"></div></div> <div class="b-ball b-ball_i6"><div class="b-ball__right"></div><div class="b-ball__i"></div></div> </i> </i></div>';
return(code);
