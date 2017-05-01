function initViewDom() {
    console.log('from initViewDom');
    var DEFAULT_WIDTH = 640, // 页面默认宽度
        ua = navigator.userAgent.toLowerCase(), //根据user agent的信息获取浏览器信息
        deviceWidth = window.screen.width, // 设备的宽度
        devicePixelRatio = window.devicePixelRatio || 1, // 物理像素和设备独立像素的比例，默认为1
        targetDensitydpi;

    var supportsOrientationChange = "onorirentationchange" in window,
        orientationEvent = supportsOrientationChange ? "onorirentationchange" : "resize";

    var deviceInfo = 'ua is:'+ ua + ', deviceWidth is:' + deviceWidth + ', devicePixelRatio is:' + devicePixelRatio;

    $(window).on(orientationEvent, (e) => {
        onResize();
    });

    $(window).resize(onResize);
    onResize();

    function onResize() {
        var scale;
        if (window.orientation == 180 || window.orientation === 0) {
            var domwidth = document.documentElement.clientWidth;
            var domheight = document.documentElement.clientHeight;
            scale = Math.max(domwidth/640, domheight/1138);
            var width = 640*scale;
            var height = 1138*scale;
            TweenMax.set($('#minisite'), {rotation:90, scaleX: scale, scaleY: scale});

            // alert('竖屏, domWidth is' + domwidth + ', domHeight is' + domheight + ', scale is'+ scale);
            document.getElementById('device-info').innerHTML = deviceInfo;
        } else {
            var domwidth = document.documentElement.clientWidth;
            var domheight = document.documentElement.clientHeight;
            scale = Math.max(domwidth/1138, domheight/640);
            var width = 1138*scale;
            var height = 640*scale;
            TweenMax.set($('#minisite'), {rotation:0, scaleX: scale, scaleY: scale});
            // alert('横屏, domWidth is' + domwidth + ', domHeight is' + domheight + ', scale is'+ scale);
            document.getElementById('device-info').innerHTML = deviceInfo;
        }
        // alert("orientationEvent is: " +orientationEvent);
        // document.getElementById('device-info').innerHTML = deviceInfo;
    }

    // alert('ua is:'+ ua + ', deviceWidth is:' + deviceWidth + ', devicePixelRatio is:' + devicePixelRatio);
}

// 自动执行
(function () {
    console.log('自动执行');
    function initView() {
        console.log('init view');
        initViewDom();
    }
    document.addEventListener("DOMContentLoaded", initView);
})();
