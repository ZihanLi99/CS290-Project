var btn = document.querySelector("button");
btn.onclick = function () {
    var img = document.getElementById('img1');
    var url = img.src;
    var a = document.createElement('a');
    var event = new MouseEvent('click');
    a.download = 'method1.png';
    a.href = url;
    a.target = "_blank";
    a.dispatchEvent(event);
}
