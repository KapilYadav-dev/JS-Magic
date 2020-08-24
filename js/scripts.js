function CloudMove() {
    var elem = document.getElementById("cloud");
    var pos = 0;
    var width = window.innerWidth;
    var obj_width = elem.offsetWidth;
    var id = setInterval(frame, 50);
    function frame() {
        if (pos == width - obj_width) {
            pos = 0;
        } else {
            pos++;
            elem.style.left = pos + 'px';
        }
    }
}

function BallonMove() {
    var elem = document.getElementById("ballon");
    var pos = 0;
    var width = window.innerWidth;
    var obj_width = elem.offsetWidth;
    var id = setInterval(frame, 20);
    var Angle = "0";
    function frame() {
        if (pos == width - obj_width) {
            pos = 0;
        } else {
            pos++;
            elem.style.transform = "rotate(" + Angle + "deg)";
            elem.style.left = pos + 'px';
        }
    }
}

