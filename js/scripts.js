function Move(elem_id, time) {
    var elem = document.getElementById(elem_id);
    var pos = -300;
    var width = window.innerWidth;
    var id = setInterval(frame, time);

    function frame() {
        if (pos == width) {
            pos = -300;
        } else {
            pos++;
            if (elem_id == "cloud") {
                elem.style.left = pos + 'px';
            }
            else if (elem_id == "cloud-right") {
                elem.style.right = pos + 'px';

            }
            else if (elem_id == "ballon") {
                elem.style.left = pos + 'px';
                BallonFn(elem , width , pos);
            }
        }
    }
}
function BallonFn(elem ,width ,pos) {
    if (pos==width/2)
    {
        
    }
}

