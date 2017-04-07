/**
 * Created by dell on 2016/9/16.
 */
window.onload = function () {
    damu();
}
function damu() {
    //1.自动轮播   定时器  过渡  过渡结束的时候（动画执行完的回调函数）  需要做无缝衔接
//* 2.点会随着图片的轮播 而改变当前样式对应这当前图片   监听当前是第几章图片
//* 3.让图片滑动起来    touch事件  监听起始触摸点和结束触摸点的改变  translateX
//* 4.当滑动的时候不超过一定的距离需要吸附回去  回到言来的位置    过渡
//* 5.当滑动的时候超过的一定的距离  上一张  下一张   ？怎么判断上一张还是下一张  （定下一定的距离到底是多少三分之）
//*


//1.自动轮播   定时器  过渡  过渡结束的时候（动画执行完的回调函数）  需要做无缝衔接
    var banner = document.querySelector(".jd_banner");
    var width = banner.offsetWidth;
    var imgBox = banner.querySelector("ul:first-child");
    var dianBox = banner.querySelector("ul:last-child");
    var lis = dianBox.querySelectorAll("li");

//图片索引
//过渡
    function addTransition() {
        imgBox.style.transition = "all 0.2s";
        imgBox.style.webitTransition = "all 0.2s";
    }

//移除过渡
    function removeTransition() {
        imgBox.style.transition = "none";
        imgBox.style.webitTransition = "none";
    }

//设置位置
    function setTransform(duang) {
        imgBox.style.transform = "translateX(" + duang + "px)";
        imgBox.style.webkitTransform = "translateX(" + duang + "px)";
    }


    var index = 1;
    var zom = setInterval(function () {
        index++;
        setTransform(-index * width);
        addTransition();
    }, 1000);

    window.ojb = {};
    ojb.transitionEnd = function (hua, has) {
        if (hua && typeof hua == "object") {
            hua.addEventListener("webkitTransitionEnd", function () {
                has && has()
            })
        } else {
            hua.addEventListener("transitionEnd", function () {
                has && has();
            })
        }

    }

    ojb.transitionEnd(imgBox, function () {
        if (index >= 9) {
            //alert(1230)
            index = 1;
            removeTransition();
            setTransform(-index * width);
        } else if (index <= 0) {
            index = 8;
            removeTransition();
            setTransform(-index * width);
        }
        serr();
    })

    var serr = function () {
        for (var i = 0; i < lis.length; i++) {
            lis[i].className = " ";
        }
        lis[index - 1].className = "current";

    }

    //3.让图片滑动起来    touch事件  监听起始触摸点和结束触摸点的改变  translateX

    //记录


//*
    var startX = 0;

    var moveX = 0;

    var gest = 0;
    //开始滑动
    var dop = false;
    imgBox.addEventListener("touchstart", function (e) {
        startX = e.touches[0].clientX;
        clearInterval(zom);
    })
    //滑动距离
    imgBox.addEventListener("touchmove", function (e) {
        moveX = e.touches[0].clientX;
        gest = moveX - startX;
        setTransform(-index * width + gest);
        removeTransition();
        dop = true;
    })
    //离开滑动
    window.addEventListener("touchend", function () {
//4.当滑动的时候不超过一定的距离需要吸附回去  回到言来的位置    过渡
//* 5.当滑动的时候超过的一定的距离  上一张  下一张   ？怎么判断上一张还是下一张  （定下一定的距离到底是多少三分之）
        if(dop && Math.abs(gest)>width/3){
            if(gest>0){
                index--;
            }else{
                index++;
            }
            addTransition();
            setTransform(-index*width);
        }
        else{
            //吸附回去
            addTransition();
            setTransform(-index*width);
        }
        //重置记录参数
        startX = 0;

        moveX = 0;

        gest = 0;
        //开始滑动
        dop = false;
        clearInterval(zom);
        zom = setInterval(function () {
            index++;
            setTransform(-index * width);
            addTransition();
        }, 1000);
    });



}