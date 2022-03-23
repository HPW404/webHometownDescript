function animateTB(obj, target, callback) {
    // 先清除以前的定时器，只保留当前一个定时器执行
    clearInterval(obj.toTopTimer);
    obj.toTopTimer = setInterval(function() {
        // 将步长值写入计时器内
        // 避免出现小数，对步长取整
        var step = (target - window.pageYOffset) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if(window.pageYOffset == target) {
            // 停止动画，即停止计时器
            clearInterval(obj.toTopTimer);
            // 回调函数需在计时器清除后调用
            callback && callback();
        }
        // 每次步长动态调整
        // obj.style.left = window.pageYOffset + step + 'px';
        window.scroll(0,  window.pageYOffset + step);
    }, 15);
}