var box2 = document.querySelector(".box2");

function right() {
    var newLeft = 0;
    if (box2.style.left === "-3600px") {
        newLeft = newLeft - 1200;
    } else {
        newLeft = parseInt(box2.style.left) - 600;
    }
    box2.style.left = newLeft + "px";
}
function left() {
    var newLeft = 0;
    if (box2.style.left === "0px") {
        newLeft = newLeft - 2400;
    } else {
        newLeft = parseInt(box2.style.left) + 600;
    }
    box2.style.left = newLeft + "px";
}

function autoPlay() {
    var timer = setInterval(function () {
        right();
    }, 4000);
}
autoPlay();

var arrow_right = document.querySelector(".arrow_right");
var arrow_left = document.querySelector(".arrow_left");

arrow_right.onclick = function () {
    console.log("1111");
    right();
}
arrow_left.onclick = function () {
    left();
}