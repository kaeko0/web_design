//页面加载时执行
window.onload = function () {
    // 滚动条事件
    window.onscroll = function () {
        scrollFunction();
    }
    document.getElementById("GoUPScrollBTN").addEventListener("click", GoUPScroll);
}

//此处定义一个箭头函数， const‘函数名’ = ('传入参数') => {‘函数体’}
const gotoPrev = () => current > 0 ? gotoNum(current - 1) : gotoNum(slides.length - 1);


function GoUPScroll() {
    window.scrollTo(0, 0);
}

// 是否显示特殊按钮，条件
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("GoUPScrollBTN").style.display = "block";
    } else {
        document.getElementById("GoUPScrollBTN").style.display = "none";
    }
}