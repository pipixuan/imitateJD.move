/**
 * Created by dell on 2016/9/13.
 */
window.itcast = {};
itcast.transitionEnd = function (dom, back) {
    if (dom && typeof dom == "object") {
        dom.addEventListener("webkitTransitionEnd", function () {
            back && back();
        });
        dom.addEventListener("transitionEnd", function () {
            back && back();
        })
    }
}
itcast.tap = function (dom, funback) {
    var isMav = false;
    var time = 0;
    if (dom && typeof  dom == "object") {
        dom.addEventListener("touchstart", function (e) {
            time = Date.now();
        });
        dom.addEventListener("touchmove", function (e) {
            isMav = true;
        });
        dom.addEventListener("touchend", function (e) {
            if (!isMav && (Date.now() - time) < 200) {
                //if(funback){
                //    funback();
                //}
                funback && funback(e);
            }
            isMav = false;
            time = 0;
        });
    }
}

