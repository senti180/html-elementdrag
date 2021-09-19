var x = document.querySelectorAll(".draggable");
for(var i = 0; i<x.length;i++)
{
    dragElement(x[i]);
}

function dragElement(elmnt) {
    elmnt.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.filter = "blur(2px)";
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        var w = window.innerWidth;
        var h = window.innerHeight;
        // PREVENT OVERFLOWING
        if((elmnt.offsetTop - pos2) < 1 || (elmnt.offsetLeft - pos1) < 1 || ((elmnt.offsetTop-pos2)+elmnt.offsetHeight)+1 > h || ((elmnt.offsetLeft-pos1)+elmnt.offsetWidth)+1 > w) return;
        // PREVENT OVERFLOWING
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement(e) {
        elmnt.style.filter = "blur(0px)";
        document.onmouseup = null;
        document.onmousemove = null;
    }
}