
/*part1 start
var autoScale = function() {
    var ratio = 320 / 504, // 这是设计稿宽高比（504是iPhone5的高度去掉标题栏高度）
        winW = document.documentElement.clientWidth,
        winH = document.documentElement.clientHeight,
        ratio2 = winW / winH,
        scale;
    
    if (ratio < ratio2) {
        scale = (winH/504).toString().substring(0, 6);
    } else {
        scale = (winW/320).toString().subString(0, 6);
    }
    
    var cssText = '-webkit-transform: scale(' + scale + '); -webkit-transform-origin: top; opacity: 1;';
    $('.wrapper').attr('style', cssText);
}

setTimeout(function() {
    if (document.documentElement.clientWidth / document.documentElement.clientHeight !== 320/504) {
        autoScale();
    } else {
        $('.container').css({'opacity': 1});
    }
} , 300); // 添加一定时长以确保宽高获取正确

window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", autoScale , false); // 切换横竖屏

//横竖屏提示
window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function() {
    detectOrientation();
}, false);

function detectOrientation() {
    if (window.orientation === 180 || window.orientation === 0) {
//        竖屏
    }
    
    if (window.orientation === 90 || window.orientation === -90) {
//        横屏
    }
}

part1 end*/