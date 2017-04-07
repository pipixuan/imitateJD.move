/**
 * Created by dell on 2016/9/18.
 */
window.onload = function() {
    deleteWin();
}
function deleteWin(){
    var options = document.querySelectorAll(".option_right");
    var bigBox = document.querySelector(".jd_win");
    var smollBox = document.querySelector(".jd_win_box");
    var cancel = document.querySelector(".cancel");

    var up = null;

    for(var i=0;i<options.length;i++){
        options[i].onclick = function () {
            bigBox.style.display = "block";
            smollBox.className = "jd_win_box myBounceInDown";
            up = this.querySelector(".right_up");

            up.style.transition = "all 1s";
            up.style.webitTransition = "all 1s";

            up.style.transform = "rotate(-35deg) translateY(2px)";
            up.style.webkitTransform = "rotate(-35deg) translateY(2px)";

            up.style.transformOrigin = "left bottom";
            up.style.webkitTransformOrigin = "left bottom";

        }
    }


    cancel.onclick = function () {
        bigBox.style.display = "none";
        if(up){
            up.style.transform = "none";
            up.style.webkitTransform = "none";
        }
    }



}