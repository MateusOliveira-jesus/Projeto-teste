let count = 1;
document.getElementById("ibtnradio1").checked = true;

setInterval( function(){
   nextImage();
},6000)
function nextImage() {
    count++;

    if (count>2) {
        count = 1;

    }

    document.getElementById(`ibtnradio${count}`).checked = true;

}

