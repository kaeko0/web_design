//页面加载时执行
window.onload = function () {
    var topAreaBG = document.getElementById("TopBGIMG");
    var topAreaBGHeight = topAreaBG.offsetHeight;
    // 滚动条事件
    window.onscroll = function () {
        scrollFunction();
    }
    // 是否显示特殊按钮，条件
    function scrollFunction() {
        if (document.body.scrollTop > topAreaBGHeight || document.documentElement.scrollTop > topAreaBGHeight) {
            document.getElementById("GoUPScrollBTN").style.display = "block";
        } else {
            document.getElementById("GoUPScrollBTN").style.display = "none";
        }
    }

    document.getElementById("GoUPScrollBTN").addEventListener("click", GoUPScroll);

    document.getElementById("CognitionLibrary").addEventListener("click", function () {window.open("../CognitionLibrary.html")});
    document.getElementById("ArtnLibrary").addEventListener("click", function () {window.open("../ArtLibrary.html")});

    var Topicitems = document.querySelectorAll(".Topicsitem");
    for (var n = 0; n < Topicitems.length; n++){
        Topicitems[n].addEventListener("click", function () {window.open("../TigerCulture.html")});
    }

    document.getElementById("t1BTN").addEventListener("click", function () {window.open("../Tools.html")});
    document.getElementById("t2BTN").addEventListener("click", function () {window.open("../newFriendsites.html")});
    document.getElementById("t3BTN").addEventListener("click", function () {window.open("../Tools.html")});
    document.getElementById("t4BTN").addEventListener("click", function () {window.open("../Tools.html")});
    // 当前页面打开
    // window.location.href = "#";
   
    document.getElementById("homepage-downArrow").addEventListener("click", function(){window.scroll({top:topAreaBGHeight,left:0,behavior:'smooth'})})
}

//此处定义一个箭头函数， const‘函数名’ = ('传入参数') => {‘函数体’}
const gotoPrev = () => current > 0 ? gotoNum(current - 1) : gotoNum(slides.length - 1);

const gotoNext = () => current < slides.length - 1 ? gotoNum(current + 1) : gotoNum(0);

function GoUPScroll() {
    window.scroll({top:0,left:0,behavior:'smooth'});
}


